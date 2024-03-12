// В графическом редакторе Hasura настрой запрос :

// query GetPlanUser($id: uuid!) {
//     users_by_pk(id: $id) {
//       date_end_plan
//       plan_id
//     }
//   }

// В директории где используется текущий запрос создай папку "graphql", а в ней папку "client" => "query" если таковых еще нет

// Создай файл .ts с именет get-что-то :

// import { gql } from "graphql-tag";

// export const GetPlanUser = gql`
//   query GetPlanUser($id: uuid!) {
//     users_by_pk(id: $id) {
//       date_end_plan
//       plan_id
//     }
//   }
// `;

// Запусти в терминале команду npm run gql-to-ts => это создаст в папке generated которая в корне директории проекта в файле index.ts документ, типы, переменные и прочее

// Далее в клиентских компонетах используй этот хук :

// const { data } = useQuery(GetPlanUserDocument, {
//     variables: { id: userId },
//   });

// В серверных :

// пока не знаю
