import { gql } from "graphql-request";

export const GetTemplateTags = gql`
  query GetTemplateTags @cached(ttl: 1) {
    template_tags {
      id
      name
      title
    }
  }
`;
