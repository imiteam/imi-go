import {gql} from 'graphql-request'

export const UpdateChat = gql`
  mutation UpdateChat($chatId: uuid!, $title: String, $model: String) {
    update_chats(where: {id: {_eq: $chatId}}, _set: {title: $title, model: $model}) {
      returning {
        id
      }
    }
  }
`
