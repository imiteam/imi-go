import { gql } from "graphql-request";

export const GetTemplateById = gql`
query GetTemplateById ($templateId : uuid ) {
    templates(where: {id: {_eq: $templateId}}) {
      icon
      id
      name
      title
    }
  }
`;

