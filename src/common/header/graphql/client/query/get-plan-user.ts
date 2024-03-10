import { gql } from "graphql-tag";

export const GetPlanUser = gql`
  query GetPlanUser($id: uuid!) {
    users_by_pk(id: $id) {
      date_end_plan
      plan_id
    }
  }
`;
