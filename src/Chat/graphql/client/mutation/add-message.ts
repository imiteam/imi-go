//Используется в api => chat => route.ts с помощью библиотеки - import {GraphQLClient} from 'graphql-request'

import { gql } from "graphql-request";

export const AddMessage = gql`
mutation AddNewMessage($chatId: uuid, $content: String!, $data: json, $role: String!) {
    insert_messages_one(object: { chatId: $chatId, content: $content, data: $data, role: $role }) {
      id
    }
  }
`
