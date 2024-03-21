'use client'

import {DynamicChat} from './DynamicChat'
import {FixedInputChat} from 'Chat/ChatSection/ChatLayout/FixedInputChat'
import {useChat} from 'ai/react'
import {createNewUserMessage, deleteMessage, getAllChatMessages, updateChatAction} from '../../graphql/action'
import ChatHeading from './ChatHeading'
import {usePathname, useRouter} from 'next/navigation'
import {FormEvent, memo, useEffect} from 'react'
import {useWindowSize} from 'react-use'
import {useToast} from '../../../common/UIkit/Toast/useToast'
import {useChatStore} from '../../lib/useChatStore'
import { GetCurrentPromtQuery, GetUserInfoQuery } from 'generated'
import { DeleteEmptyChatHelper } from './DeleteEmptyChatHepler'

export const ChatLayout = memo(function ChatLayout(props: {
  id: string
  initialMessages: {role: string; id: any; content: string}[]
  title: string
  // initiateChat: string
  userId: string
  homePageMessage?: string | undefined
  systemPromt: GetCurrentPromtQuery | 'absent'
  userInfo: GetUserInfoQuery
}) {
  const {toast} = useToast()
  const {width} = useWindowSize()
  const router = useRouter()
  const path = usePathname()

  const {messages, input, setInput, handleInputChange, handleSubmit, isLoading, stop, reload} = useChat({
    // @ts-ignore
    initialMessages: props.initialMessages,
    id: props.id,
    body: {
      // ОТСЮДА ДАННЫЕ ПЕРЕДАЮТСЯ В API/CHAT/ROUTE.TS
      id: props.id,
      userId: props.userId,
      model: props.userInfo.users[0].ai_text_model,
      systemPromt: props.systemPromt !== 'absent' ? props.systemPromt.roles[0].promt : 'absent',
      currentAiTextModel: props.userInfo.users[0].ai_text_model,
      is_client: props.userInfo.users[0].is_client,
    },
    onError(_error) {
      toast({
        title: 'Ошибка',
        description: 'Возникла ошибка при запросе к модели',
      })
    },
    onFinish() {
      if (!path.includes('chat')) {
        router.push(`/chat/${props.id}`, {scroll: false})
        router.refresh()
      }
    },
  })

  useEffect(() => {
    // Устанавливаем input только если homePageMessage есть и отличается от текущего значения input
    if (props.homePageMessage && props.homePageMessage !== input && messages.length === 0) {
      setInput(props.homePageMessage)
    }
  }, [props.homePageMessage])

  const onReload = async() => {
    // Get last assistant message and delete from database
    const allMessages = await getAllChatMessages({
      chatId: props.id,
      userId: props.userId,
    })
    const lastMessage = allMessages.messages[allMessages.messages.length -1]
    if (lastMessage?.role === 'assistant') {
      deleteMessage({messageId: lastMessage.id})
        .then(() => {
          reload()
        })
        .catch((reason: any) => {
          if (String(reason).includes('invalid input syntax for type uuid')) {
            // reload() пока не понятно зачем при ошибке делать релоад
          }
        })
    }
  }

  const handleSubmitFromInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // send message to backend
    // First, get succes from user message created
    createNewUserMessage({
      chatId: props.id,
      content: props.homePageMessage ? props.homePageMessage : input,
    }).then((message_id: any) => {
      if (message_id) {
        if(messages.length < 2){
          updateChatAction({chatId: props.id, title: props.title, description: input})
        }
        handleSubmit(e)
      }
    })
  }

  // useEffect(() => {
  //   router.refresh()
  // },[])

  const hideAside = useChatStore((state) => state.hideAside)
  const margingX =
    hideAside && width > 1280
      ? 'mx-[220px]'
      : hideAside && width <= 1280
        ? 'mx-[8px]'
        : !hideAside && width <= 1280 && width > 550
          ? 'mx-[8px] '
          : !hideAside && width <= 550
            ? 'mx-[0px]'
            : hideAside && width <= 550
              ? 'mx-[0px]'
              : 'mx-[0px]'
  hideAside && width <= 980 && width > 680 ? 'mx-[82px]' : width <= 680 ? 'mr-[0px]' : 'mr-[12px]'

  // let marginRight = hideAside ? "md:pr-[0px]" : "md:pr-[12px]"
  // TODO: Add mutation for add user input to database
  // TODO: Add empty screen if no messages for prevent virtual scroll render

  // useEffect(() => {
  //   if (props.initiateChat) {
  //     createNewUserMessage({
  //       chatId: props.id,
  //       content: props.initiateChat,
  //     }) 
  //   }
  // }, [props.id, props.initiateChat])

  return (
    <div
      className={`z-[20] mb-[12px] flex h-[99%] w-full grow flex-col items-center justify-between bg-[#fff] dark:bg-[#21242C] sm:h-[99.5%] md:rounded-[16px] lg:rounded-[16px] ${margingX}`}
    >
      <div className="flex size-full flex-col">
        <ChatHeading title={props.title} userInfo={props.userInfo} userId={props.userId} systemPromt={props.systemPromt}/>
        <div className="flex w-full grow px-[24px] py-[2px] md:pl-[16px] md:pr-[8px] md:sm:pl-[7px] md:sm:pr-[4px] lg:pr-[7px] lg:pl-[17px] xl:pr-[8px] ">
          <DynamicChat
            stop={() => stop()}
            reload={() => onReload()}
            isLoading={isLoading}
            messages={messages}
            userId={props.userId}
          />
          <DeleteEmptyChatHelper chatId={props.id} messages={messages} />
        </div>
      </div>
      <FixedInputChat
        isLoading={isLoading}
        input={input}
        // initiateChat={props.initiateChat}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmitFromInput}
        userId={props.userId}
      />
    </div>
  )
})
