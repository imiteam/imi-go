import {gql} from 'graphql-tag'

export const GetUserSubscriptionId = gql`
  query GetUserSubscriptionId($userId: uuid!) {
    users(where: {id: {_eq: $userId}}) {
        subscription_id
      }
  }`
