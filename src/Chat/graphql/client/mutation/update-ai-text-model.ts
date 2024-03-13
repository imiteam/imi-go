import {gql} from 'graphql-request'

export const ChangeAiTextModel = gql`
  mutation ChangeAiTextModel($userId: uuid!, $model: String!) {
    update_users(where: {id: {_eq: $userId}}, _set: {ai_text_model: $model}) {
      affected_rows
      returning {
        id
        ai_text_model
      }
    }
  }
`