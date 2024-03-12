// В графическом редакторе Hasura настрой запрос :

// subscription UserWallet($userId: uuid!) {
//     wallets(where: { user_id: { _eq: $userId } }) {
//       tokens
//       user_id
//       additional_tokens
//     }
//   }

// В директории где используется текущий запрос создай папку "graphql", а в ней папку "client" => "subscription" если таковых еще нет

// Создай файл .ts с именем на-что-subscription в папке "subscription" :

// import { gql } from "graphql-request";

// export const UserWallet = gql`
//   subscription UserWallet($userId: uuid!) {
//     wallets(where: { user_id: { _eq: $userId } }) {
//       tokens
//       user_id
//       additional_tokens
//     }
//   }
// `;

// Запусти в терминале команду npm run gql-to-ts => это создаст в папке generated которая в корне директории проекта в файле index.ts документ, типы, переменные и прочее

// Далее в клиентских компонетах к примеру можно вот так использовать :

// const { data: userWalletData } = useSubscription<
// UserWalletSubscription,
// UserWalletSubscriptionVariables
// >(UserWalletDocument, {
// variables: {
//   userId: userId,
// },
// });
