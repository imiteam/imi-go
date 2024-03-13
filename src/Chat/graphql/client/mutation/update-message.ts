import {gql} from 'graphql-request'

export const EditMessage = gql`
  mutation EditMessage($messageId: uuid!, $content: String, $data: json) {
    update_messages_by_pk(pk_columns: {id: $messageId}, _set: {content: $content, data: $data}) {
      id
    }
  }
`
