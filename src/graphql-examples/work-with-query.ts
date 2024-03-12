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

// const {data: getChat} = await getClient().query({
//     query: GetChatByIdDocument,
//     variables: {chatId: props.params.id, userId: props.searchParams.userId},
//     fetchPolicy: 'no-cache',
//     context: {
//       fetchOptions: {
//         next: {revalidate: 0},
//       },
//     },
//   })

// либо передавая туда еще и типы и переменные - <GetRolesWithTitleFilterQuery, GetRolesWithTitleFilterQueryVariables>, это все также генерит команда gql-to-ts ы том же файле generated
// const {data} = await getClient().query<GetRolesWithTitleFilterQuery, GetRolesWithTitleFilterQueryVariables>({
//     query: GetRolesWithTitleFilterDocument,
//     variables: {title: props.searchParams.role_search ? String(props.searchParams.role_search) : ''},
//     fetchPolicy: 'no-cache',
//     context: {
//       fetchOptions: {
//         next: {revalidate: 0},
//       },
//     },
//   })
// Либо создав экшн :
// export async function getMyChats(props: {userId: string; value: string}) {
//     const {data} = await getClient().query<GetMyChatsQuery, GetMyChatsQueryVariables>({
//       query: GetMyChatsDocument,
//       variables: {userId: props.userId, value: props.value},
//     })
  
//     return data
//   }
// и заюзать его вот так :
// const historyData = await getMyChats({
//     userId: props.searchParams.userId as string,
//     value: props.searchParams.history_search ? String(props.searchParams.history_search) : '',
//   })