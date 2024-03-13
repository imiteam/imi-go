import {gql} from 'graphql-request'

export const DeleteChatById = gql`
  mutation DeleteChatById($chatId: uuid!) {
    delete_chats(where: {id: {_eq: $chatId}}) {
      returning {
        id
        title
      }
    }
  }
`