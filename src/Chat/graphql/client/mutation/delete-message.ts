import {gql} from 'graphql-request'

export const DeleteMessage = gql`
  mutation DeleteMessage($messageId: uuid!) {
    delete_messages_by_pk(id: $messageId) {
      id
    }
  }
`
