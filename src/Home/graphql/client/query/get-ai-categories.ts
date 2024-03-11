import { gql } from "graphql-request";

export const GetAiCategories = gql`
  query GetAiCategories {
    ai_categories {
      id
      title
      icon
    }
  }
`;
