
import {redirect} from 'next/navigation'
import {useChatStore} from '../lib/useChatStore'
import {ChatLayout} from './ChatLayout'
import { getAllChatMessages, getCurrentPromt } from 'Chat/graphql/action'
import { getUserInfo } from '../../Account/Plans/graphql/action'

export const ChatSection = async function ChatSection(props: {
  className?: string
  id: string
  userId: string
  homePageMessage?: string | undefined
  systemPromt: string
}) {
  // query messages from chat помоему забили на управление моделью через стор...а вот тайтл...не знаю 
  const {title, model} = useChatStore.getState()
 
  // const initiateMessage = 'Расскажи о себе'
  const userId = props.userId
  // const title = 'NewChat'
  // const model = 'gpt4'
  const currentPromt = await getCurrentPromt({
    name: props.systemPromt,
  })
  let initialMessage : string | null;
  if (props.id) {
    const messagesData = await getAllChatMessages({
      chatId: props.id,
      userId: userId,
    }).then((res) => {
      if(props.systemPromt === "absent"){
        return res.messages
      } else {
        return [{id : "13ca03ea-9d6c-4664-b458-8db864e3b508", content : currentPromt.roles[0].initial_message, role : "tool", ui : currentPromt.roles[0].directus_img?.filename_disk},...res.messages]
      }
    })

    const userInfo = await getUserInfo({userId: props.userId})
    
    const messages: Array<{id: string; content: string; role: string; ui : string}> =
      messagesData.map((message) => ({
        id: message.id,
        content: message.content ?? '',
        role: message.role ?? 'system',
        // @ts-ignore
        ui : message.role === "tool" ? message.ui : ""
      })) ?? []

    return (
      // title &&
      // model &&
      <ChatLayout
        id={props.id}
        initialMessages={messages}
        title={title!}
        // initiateChat={initiateMessage}
        userId={props.userId as string}
        homePageMessage={props.homePageMessage}
        systemPromt={currentPromt.roles.length > 0 ? currentPromt : 'absent'}
        userInfo={userInfo}
      />
    )
  } else {
    // redirect to new chat route
    redirect(`/chat`)
  }
}
