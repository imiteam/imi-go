import {gql} from 'graphql-tag'

export const GetPlanInfo = gql`
  query GetPlanInfo($id: uuid!) {
    plans_by_pk(id: $id) {
      name
      price
      tokens
    }
  }
`
