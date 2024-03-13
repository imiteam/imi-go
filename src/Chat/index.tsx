import {getClient} from 'apollo-server-client'
import {getMyChats} from '../Chat/graphql/action'
import {
  GetChatByIdDocument,
  GetRolesWithTitleFilterDocument,
  GetRolesWithTitleFilterQuery,
  GetRolesWithTitleFilterQueryVariables,
} from 'generated'
import {useChatStore} from '../Chat/lib/useChatStore'
import {History} from './History'
import {LeftSideBar} from './LeftSideBar'
import { ChatSection } from './ChatSection'
import MobileSideBar from './MobileSideBar'

export const Chat = async function Chat(props: {
  // PARAMS.ID - АЙДИШКА ЧАТА
  params: {id: string}
  // SEARCHPARAMS.USERID - АЙДИШКА ЮЗЕРА
  searchParams: {[key: string]: string | string[] | undefined}
}) {

  const {data: getChat} = await getClient().query({
    query: GetChatByIdDocument,
    variables: {chatId: props.params.id, userId: props.searchParams.userId},
    fetchPolicy: 'no-cache',
    context: {
      fetchOptions: {
        next: {revalidate: 0},
      },
    },
  })
  const {data} = await getClient().query<GetRolesWithTitleFilterQuery, GetRolesWithTitleFilterQueryVariables>({
    query: GetRolesWithTitleFilterDocument,
    variables: {title: props.searchParams.role_search ? String(props.searchParams.role_search) : ''},
    fetchPolicy: 'no-cache',
    context: {
      fetchOptions: {
        next: {revalidate: 0},
      },
    },
  })
  if (getChat) {
    useChatStore.setState({
      chatId: props.params.id,
      description: getChat.chats[0]?.description ?? undefined,
      icon: getChat.chats[0]?.icon ?? undefined,
      model: getChat.chats[0]?.model ?? undefined,
      system_promt: getChat.chats[0]?.system_promt ?? undefined,
      title: getChat.chats[0]?.title ?? undefined,
    })
  }

  const historyData = await getMyChats({
    userId: props.searchParams.userId as string,
    value: props.searchParams.history_search ? String(props.searchParams.history_search) : '',
  })

  return (
    <main className="flex w-full flex-col items-center bg-bg-lite dark:bg-bg-dark " id="chatSection">
      <div className="flex size-full">
        <LeftSideBar
          id={props.params.id}
          searchParams={props.searchParams}
          roles={data.roles}
          userId={props.searchParams.userId as string}
        />

        <MobileSideBar
          chats={historyData.chats}
          id={props.params.id}
          roles={data.roles}
          searchParamsHistory={props.searchParams.history_search}
          searchParamsRoles={props.searchParams}
          userId={props.searchParams.userId as string}
        />

        <ChatSection
          id={props.params.id}
          userId={props.searchParams.userId as string}
          homePageMessage={props.searchParams.message ? (props.searchParams.message as string) : undefined}
          systemPromt={getChat.chats[0]?.system_promt}
        />
        <History
          searchParams={props.searchParams.history_search}
          id={props.params.id}
          className="flex h-full flex-col"
          chats={historyData.chats}
          userId={props.searchParams.userId as string}
        />
      </div>
    </main>
  )
}
