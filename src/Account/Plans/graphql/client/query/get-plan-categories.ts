import {gql} from 'graphql-tag'

export const GetPlanCategories = gql`
  query GetPlanCategories {
    plan_categories {
      icon
      id
      name
      title
    }
  }
`
