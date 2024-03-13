'use server'

import {getClient} from 'apollo-server-client'
import { GetProfileCategoriesDocument, GetProfileCategoriesQuery, GetProfileCategoriesQueryVariables } from 'generated'

export async function getProfileCategories() {
    const {data} = await getClient().query<GetProfileCategoriesQuery, GetProfileCategoriesQueryVariables>({
      query: GetProfileCategoriesDocument,
    })
  
    return data
  }