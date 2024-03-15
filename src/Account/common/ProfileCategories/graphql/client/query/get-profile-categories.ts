import {gql} from 'graphql-tag'

export const GetProfileCategories = gql`
query GetProfileCategories {
  profile_categories {
    title
    name
    id
  }
}

`
