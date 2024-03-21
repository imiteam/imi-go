"use server";

import { getClient } from "apollo-server-client";
import {
  AddNewMessageDocument,
  AddNewMessageMutation,
  AddNewMessageMutationVariables,
  ChangeAiTextModelDocument,
  ChangeAiTextModelMutation,
  ChangeAiTextModelMutationVariables,
  CreateChatDocument,
  CreateChatMutation,
  CreateChatMutationVariables,
  DeleteChatByIdDocument,
  DeleteChatByIdMutation,
  DeleteChatByIdMutationVariables,
  DeleteMessageDocument,
  DeleteMessageMutation,
  DeleteMessageMutationVariables,
  EditMessageDocument,
  GetAllChatMessagesDocument,
  GetAllChatMessagesQuery,
  GetAllChatMessagesQueryVariables,
  GetCurrentPromtDocument,
  GetCurrentPromtQuery,
  GetCurrentPromtQueryVariables,
  GetMyChatsDocument,
  GetMyChatsQuery,
  GetMyChatsQueryVariables,
  UpdateChatDocument,
  UpdateChatMutation,
  UpdateChatMutationVariables,
} from "generated";
import { redirect } from "next/navigation";


// MUTATIONS
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

export async function createNewUserMessage(props: {chatId: string; content: string}) {
  const mutatuion = await getClient().mutate<AddNewMessageMutation, AddNewMessageMutationVariables>({
    mutation: AddNewMessageDocument,
    variables: {chatId: props.chatId, content: props.content, role: 'user'},
  })

  return mutatuion.data?.insert_messages_one?.id
}

export async function deleteMessage(props: {messageId: string}) {
  const mutatuion = await getClient().mutate<DeleteMessageMutation, DeleteMessageMutationVariables>({
    mutation: DeleteMessageDocument,
    variables: {messageId: props.messageId},
  })

  return mutatuion.data?.delete_messages_by_pk?.id
}

export async function ChangeAiTextModel(props: {userId: string; model: string}) {
  const mutatuion = await getClient().mutate<ChangeAiTextModelMutation, ChangeAiTextModelMutationVariables>({
    mutation: ChangeAiTextModelDocument,
    variables: {userId: props.userId, model: props.model},
  })

  return mutatuion.data?.update_users?.returning
}

export async function updateChatAction(props: {chatId: string; title?: string; model?: string, description?: string}) {
  const mutatuion = await getClient().mutate<UpdateChatMutation, UpdateChatMutationVariables>({
    mutation: UpdateChatDocument,
    variables: {chatId: props.chatId, title: props.title, model: props.model,description: props.description},
  })

  return mutatuion.data?.update_chats?.returning
}

export async function editMessageAction(messageId: string, content: string) {
  const mutatuion = await getClient().mutate({
    mutation: EditMessageDocument,
    variables: {messageId: messageId, content: content},
  })

  return mutatuion.data?.update_messages_by_pk?.id
}

export async function deleteChatAction(chatId: string) {
  const mutatuion = await getClient().mutate<DeleteChatByIdMutation, DeleteChatByIdMutationVariables>({
    mutation: DeleteChatByIdDocument,
    variables: {chatId: chatId},
  })

  return mutatuion.data?.delete_chats?.returning
}


// QUERIES
export async function getMyChats(props: {userId: string; value: string}) {
  const {data} = await getClient().query<GetMyChatsQuery, GetMyChatsQueryVariables>({
    query: GetMyChatsDocument,
    variables: {userId: props.userId, value: props.value},
  })

  return data
}

export async function getAllChatMessages(props: {chatId: string; userId: string}) {
  const {data} = await getClient().query<GetAllChatMessagesQuery, GetAllChatMessagesQueryVariables>({
    query: GetAllChatMessagesDocument,
    variables: {chatId: props.chatId},
  })

  return data
}

export async function getCurrentPromt(props: {name: string}) {
  const {data} = await getClient().query<GetCurrentPromtQuery, GetCurrentPromtQueryVariables>({
    query: GetCurrentPromtDocument,
    variables: {name: props.name},
  })

  return data
}