import { gql } from "graphql-request";

export const GetRoles = gql`
  query GetRoles @cached(ttl: 1) {
    roles {
      id
      image
      image_min
      name
      promt
      title
      type
    }
  }
`;
