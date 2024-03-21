import {gql} from 'graphql-request'

export const GetChatsByIds = gql`
  query GetChatsByIds($ids: [uuid!], $userId: uuid!) {
    chats(where: {id: {_in: $ids}, _and: {userId: {_eq: $userId}}}) {
      id
      title
      description
    }
  }
`
 