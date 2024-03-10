import { gql } from "graphql-request";

export const UserWallet = gql`
  subscription UserWallet($userId: uuid!) {
    wallets(where: { user_id: { _eq: $userId } }) {
      tokens
      user_id
      additional_tokens
    }
  }
`;
