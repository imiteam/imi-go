import {gql} from 'graphql-request'

export const GetCurrentPromt = gql`
  query GetCurrentPromt($name: String) {
    roles(where: {name: {_eq: $name}}) {
      promt
      title
      id
      name
      directus_img {
        filename_disk
      }
    }
  }
`