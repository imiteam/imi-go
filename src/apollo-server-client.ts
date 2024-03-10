import { ApolloLink, HttpLink, concat } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { cookies } from "next/headers";

export const { getClient } = registerApolloClient(() => {
  let cookieStore = cookies();
  let userCookie = cookieStore.get("next-auth.session-token");

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL!,
    credentials: "include",
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        "X-hasura-role": "user",
        Authorization: userCookie ? `Bearer ${userCookie.value}` : "",
      },
    }));
    return forward(operation);
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: concat(authMiddleware, httpLink),
  });
});
