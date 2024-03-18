import {gql} from 'graphql-tag'

export const GetUserInfo = gql` 
  query GetUserInfo($userId: uuid!) {
    users(where: {id: {_eq: $userId}}) {
      ai_text_model
      plan_id
      is_client
      is_subscriber
    }
  }
`
// создал в generated сам руками документ и в экшенах функцию так как типы не генерятся
