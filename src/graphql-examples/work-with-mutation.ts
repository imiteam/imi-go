// В графическом редакторе Hasura настрой запрос :

// mutation CreateChat($model: String, $system_promt: String, $title: String, $userId: uuid!) {
// insert_chats_one(object: {model: $model, system_promt: $system_promt, title: $title, userId: $userId}) {
//     id
//   }
// }

// В директории где используется текущий запрос создай папку "graphql", а в ней папку "client" => "mutation" если таковых еще нет

// Создай файл .ts с именем create-что-то/dalate-что-то/update-что-то в папке "mutation" :

// import {gql} from 'graphql-request'

// export const CreateChat = gql`
//   mutation CreateChat($model: String, $system_promt: String, $title: String, $userId: uuid!) {
//     insert_chats_one(object: {model: $model, system_promt: $system_promt, title: $title, userId: $userId}) {
//       id
//     }
//   }
// `

// Запусти в терминале команду npm run gql-to-ts => это создаст в папке generated которая в корне директории проекта в файле index.ts документ, типы, переменные и прочее

// Далее рядом с папкой "client" создай папку "action" и файл index.ts если их нет, и складируй в этом файле все экшены :

// import { getClient } from "apollo-server-client";
// import { CreateChatDocument, CreateChatMutation, CreateChatMutationVariables } from "generated";
// import { redirect } from "next/navigation";

// export const createChatAction = async (props: {model: string; title: string; userId: string; systemPromt?: string}) => {
//     const mutatuion = await getClient().mutate<CreateChatMutation, CreateChatMutationVariables>({
//       mutation: CreateChatDocument,
//       variables: {
//         model: props.model,
//         title: props.title,
//         userId: props.userId, 
//         system_promt: props.systemPromt,
//       },
//     })
//
//     return redirect(`/chat/${mutatuion.data?.insert_chats_one?.id}?userId=${props.userId}`)
//   }

// Далее в клиентских компонетах к примеру можно вот так использовать :


// const handleCreateNewChat = useCallback(async (userId: string, systemPromt: string) => {
//     // setCurrentRoleId(role.id)
//     try {
//       await createChatAction({
//         model: 'gpt-3',
//         title: props.title,
//         userId: userId,
//         systemPromt: systemPromt,
//       })
//     } catch (error) {
//       console.error(error)
//     }
//   }, [])

// Тут важная часть эта :

// try {
//       await createChatAction({
//         model: 'gpt-3',
//         title: props.title,
//         userId: userId,
//         systemPromt: systemPromt,
//       })
//     }
// Для серверных компонентов :


// const {data} = await getClient().mutate({
//     mutation: CreateChatDocument,
//     variables: {
//       model: model,
//       title: 'Новый чат',
//       userId: userId,
//       system_promt: 'absent',
//     },
//     fetchPolicy: 'no-cache',
//     context: {
//       fetchOptions: {
//         next: {revalidate: 0},
//       },
//     },
//   })