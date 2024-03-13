import {getClient} from 'apollo-server-client'
import {CreateChatDocument} from 'generated'
import {redirect} from 'next/navigation'
import {useChatStore} from '../../Chat/lib/useChatStore'

export default async function Page({searchParams}: {searchParams: {[key: string]: string | string[] | undefined}}) {
  const userId = searchParams.userId
  const message = searchParams.message
  const model = useChatStore.getState().model
  const {data} = await getClient().mutate({
    mutation: CreateChatDocument,
    variables: {
      model: "gpt-3.5",
      title: 'Новый чат',
      userId: userId,
      system_promt: 'absent',
    },
    fetchPolicy: 'no-cache',
    context: {
      fetchOptions: {
        next: {revalidate: 0},
      },
    },
  })
  // Перенаправление с userId и сёрч парамсом который является текстом вбитым в инпут на главной
  if (data?.insert_chats_one?.id && searchParams.message) {
    // Перенаправление с userId и message
    redirect(`/chat/${data?.insert_chats_one?.id}?userId=${userId}&message=${message}`)
  } else {
    // Перенаправление только с userId
    redirect(`/chat/${data?.insert_chats_one?.id}?userId=${userId}`)
  }
}
