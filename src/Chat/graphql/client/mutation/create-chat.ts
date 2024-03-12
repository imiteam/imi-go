import { gql } from "graphql-request";

export const CreateChat = gql`
  mutation CreateChat(
    $model: String
    $system_promt: String
    $title: String
    $userId: uuid!
  ) {
    insert_chats_one(
      object: {
        model: $model
        system_promt: $system_promt
        title: $title
        userId: $userId
      }
    ) {
      id
    }
  }
`;
