import {gql} from 'graphql-tag'

export const GetUserHistory = gql`
query GetUserHistory($userId: uuid!) {
  payment_history(where: {user_id: {_eq: $userId}}) {
    transaction_id
    date
    plan
    card
    four_last
    card_exp_date
    amount
    status
  }
}
`
