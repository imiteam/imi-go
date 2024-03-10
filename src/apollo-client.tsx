"use client";

import { ApolloLink, HttpLink, split } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { createClient } from "graphql-ws";
import { setVerbosity } from "ts-invariant";
if (process.env.NODE_ENV === "development") {
  setVerbosity("debug");
  loadDevMessages();
  loadErrorMessages();
}

function makeClient(additionalData: any) {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL!,
    credentials: "include",
    headers: {
      "X-hasura-role": "user",
      Authorization: additionalData ? `Bearer ${additionalData}` : "",
    },
  });

  const wsLink = new ApolloLink((operation) =>
    new GraphQLWsLink(
      createClient({
        lazy: true,
        connectionParams: {
          headers: {
            "X-hasura-role": "user",
            Authorization: additionalData ? `Bearer ${additionalData}` : "",
          },
        },
        lazyCloseTimeout: 10000,
        retryAttempts: 10,
        url: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WS_URL!,
      }),
    ).request(operation),
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink,
  );

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            splitLink,
          ])
        : splitLink,
  });
}

export function ApolloWrapper({
  children,
  additionalData,
}: React.PropsWithChildren<{ additionalData: any }>) {
  return (
    <ApolloNextAppProvider makeClient={() => makeClient(additionalData)}>
      {children}
    </ApolloNextAppProvider>
  );
}
