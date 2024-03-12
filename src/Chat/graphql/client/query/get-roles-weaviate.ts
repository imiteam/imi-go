import {gql} from 'graphql-request'

export const GetRolesWeaviate = gql`
  query GetRolesWeaviate($query: String!) {
    Get {
      RolesWeaviate(hybrid: {query: $query, properties: ["title"]}, limit: 3) {
        _additional {
          id
        }
        title
        name
      }
    }
  }
`
