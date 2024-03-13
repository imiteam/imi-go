'use server'

import {getClient} from 'apollo-server-client'
import { GetUserInfoDocument, GetUserInfoQuery, GetUserInfoQueryVariables } from 'generated'

export async function getUserInfo(props: {userId: string}) {
    const {data} = await getClient().query<GetUserInfoQuery, GetUserInfoQueryVariables>({
      query: GetUserInfoDocument,
      variables: {userId: props.userId},
    })
  
    return data
  }