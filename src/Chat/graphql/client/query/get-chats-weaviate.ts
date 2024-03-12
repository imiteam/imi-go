import {gql} from 'graphql-request'

export const GetChatHistoryWeaviate = gql`
  query GetChatHistoryWeaviate($query: String!, $userId: TextGetObjectsChatsWeaviate!) {
    Get {
      ChatsWeaviate(
        hybrid: {query: $query, properties: ["title"]}
        limit: 3
        where: {path: ["userId"], operator: Equal, valueText: $userId}
      ) {
        _additional {
          id
        }
        title
        userId
      }
    }
  }
`
