import { GetUserHistoryDocument, GetUserHistoryQuery, GetUserHistoryQueryVariables } from 'generated'
import Histories from './Histories'
import { getClient } from 'apollo-server-client'


export const HistoryPage = async function HistoryPage(props :{
  searchParams: {[key: string]: string | string[] | undefined}
}) {
  
  const {data: getHistory} = await getClient().query<GetUserHistoryQuery,GetUserHistoryQueryVariables>({
        query: GetUserHistoryDocument,
        variables: { userId: props.searchParams.userId},
        fetchPolicy: 'no-cache',
        context: {
          fetchOptions: {
            next: {revalidate: 0},
          },
        },
      })
  
  return (
    <div className="size-full">
      {
        getHistory.payment_history.length ?
          <Histories historyData={getHistory.payment_history} />
          :
          <span>
            Список историй платежей пуст
          </span>  
      }
      
    </div>
  )
}
