import {gql} from 'graphql-request'

export const GetAllChatMessages = gql`
  query GetAllChatMessages($chatId: uuid) {
    messages(where: {chatId: {_eq: $chatId}}, order_by: {createdAt: asc}) {
      chatId
      content
      data
      id
      role
      createdAt
    }
  }
`