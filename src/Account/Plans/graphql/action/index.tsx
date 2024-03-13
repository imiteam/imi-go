'use server'

import { getClient } from "apollo-server-client"
import { GetPlanCategoriesDocument, GetPlanCategoriesQuery, GetPlanCategoriesQueryVariables, GetPlanInfoDocument, GetPlanInfoQuery, GetPlanInfoQueryVariables, GetPlanUserDocument, GetPlanUserQuery, GetPlanUserQueryVariables, GetUserInfoDocument, GetUserInfoQuery, GetUserInfoQueryVariables } from "generated"

export async function getPlanUser(props: {userId: string}) {
    const {data} = await getClient().query<GetPlanUserQuery, GetPlanUserQueryVariables>({
      query: GetPlanUserDocument,
      variables: {id: props.userId},
    })
  
    return data
  }
  
  export async function getUserInfo(props: {userId: string}) {
    const {data} = await getClient().query<GetUserInfoQuery, GetUserInfoQueryVariables>({
      query: GetUserInfoDocument,
      variables: {userId: props.userId},
    })
  
    return data
  }
  
  export async function getPlanCategories() {
    const {data} = await getClient().query<GetPlanCategoriesQuery, GetPlanCategoriesQueryVariables>({
      query: GetPlanCategoriesDocument,
    })
  
    return data
  }
  export async function getPlanInfo(props: {planId: string}) {
    const {data} = await getClient().query<GetPlanInfoQuery, GetPlanInfoQueryVariables>({
      query: GetPlanInfoDocument,
      variables: {id: props.planId},
    })
  
    return data
  }
  