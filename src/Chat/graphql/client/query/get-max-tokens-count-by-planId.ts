import {gql} from 'graphql-request'

export const GetMaxTokensCount = gql`
query GetMaxTokensCountByPlan($planId: uuid!) {
    plans(where: {id: {_eq: $planId}}) {
        tokens
    }
}
`

