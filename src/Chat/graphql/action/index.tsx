"use server";

import { getClient } from "apollo-server-client";
import {
  CreateChatDocument,
  CreateChatMutation,
  CreateChatMutationVariables,
} from "generated";
import { redirect } from "next/navigation";

export const createChatAction = async (props: {
  model: string;
  title: string;
  userId: string;
  systemPromt?: string;
}) => {
  const mutatuion = await getClient().mutate<
    CreateChatMutation,
    CreateChatMutationVariables
  >({
    mutation: CreateChatDocument,
    variables: {
      model: props.model,
      title: props.title,
      userId: props.userId,
      system_promt: props.systemPromt,
    },
  });

  return redirect(
    `/chat/${mutatuion.data?.insert_chats_one?.id}?userId=${props.userId}`,
  );
};
