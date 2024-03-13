import {gql} from 'graphql-request'

export const AddNewMessage = gql`
  mutation AddNewMessage($chatId: uuid, $content: String!, $data: json, $role: String!) {
    insert_messages_one(object: {chatId: $chatId, content: $content, data: $data, role: $role}) {
      id
    }
  }
`
