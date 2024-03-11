import { gql } from "graphql-request";

export const GetTemplateCategories = gql`
  query GetTemplateCategories @cached(ttl: 1) {
    template_categories(order_by: { id: asc }) {
      id
      name
      titile
      templates {
        id
        name
        title
        icon
      }
      ui_lg_c
      ui_lg_w
      ui_sm_c
      ui_sm_w
      ui_table_c
      ui_table_w
    }
  }
`;
