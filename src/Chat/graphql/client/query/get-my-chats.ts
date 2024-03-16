import {gql} from 'graphql-request'

export const GetMyChats = gql`
query GetMyChats($userId: uuid!, $value: String!) {
  chats(where: {userId: {_eq: $userId}, _and: {title: {_iregex: $value}}}, order_by: {createdAt: desc}) {
    id
    createdAt
    title
    description
    system_promt
  }
}
`
