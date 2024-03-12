import {gql} from 'graphql-request'

export const GetChatById = gql`
  query GetChatById($userId: uuid, $chatId: uuid) {
    chats(where: {id: {_eq: $chatId}, _and: {userId: {_eq: $userId}}}) {
      description
      icon
      model
      id
      system_promt
      title
    }
  }
`