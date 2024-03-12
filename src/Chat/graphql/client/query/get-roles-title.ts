import {gql} from 'graphql-request'

export const GetRolesWithTitleFilter = gql`
  query GetRolesWithTitleFilter($title: String!) {
    roles(where: {title: {_iregex: $title}}) {
      id
      name
      title
      type
      promt
      directus_img {
        filename_disk
      }
    }
  }
`
