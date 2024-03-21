'use client'

import {createChatAction, deleteChatAction} from '../../../graphql/action'
import {motion} from 'framer-motion'
import {GetMyChatsQuery} from 'generated'
import {useSession} from 'next-auth/react'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import {memo, useCallback} from 'react'
import {useWindowSize} from 'react-use'
import { DeleteChatIcon } from './icon_components/DeleteChatIcon'

export const Item = memo(function Item(props: {
  className?: string
  data: any
  requestMessages: NonNullable<GetMyChatsQuery['chats']>
  userId: string
  firstChatId: string | null
  secondChatId: string | null
}) {
  const {width} = useWindowSize()
  const router = useRouter()
  const session = useSession()
  // @ts-ignore
  const userId = session.data?.user.id
  const truncateText = useCallback(
    (text: string) => {
      let maxLength = 29
      if (width < 1280) {
        maxLength = 20
      }
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
    },
    [width],
  )

  const handleOpenChat = (id: string) => {
    router.push(`/chat/${id}?userId=${userId}`)
  }

  const handleDeleteChat = useCallback(async (event: React.MouseEvent, chatId: string) => {
    event.stopPropagation()
    await deleteChatAction(chatId)
      .then(() => {
        if (props.firstChatId === chatId && props.secondChatId !== null) {
          router.push(`/chat/${props.secondChatId}?userId=${props.userId}`)
        } else if (props.firstChatId === chatId && props.secondChatId === null) {
          createChatAction({model: 'gpt-3.5', title: 'Новый чат', userId: userId!, systemPromt: 'absent'})
        } else {
          router.push(`/chat/${props.firstChatId}?userId=${props.userId}`)
        }
      })
      .then(() => router.refresh())
  }, [])

  const pathName = usePathname()
  let chatId = pathName.split('/')[2] ? pathName.split('/')[2] : '/'
  return (
    <Link href="#" onClick={(e) => e.preventDefault()} className="mb-[16px] flex h-auto flex-col md:mb-[12px] md:w-[179px] md:sm:mb-[16px] md:sm:w-full lg:w-[199px] xl:w-[234px]">
      {/* <div
        className={cn(
          'mb-[16px] flex h-auto flex-col md:mb-[12px] md:w-[179px] md:sm:mb-[16px] md:sm:w-full lg:w-[199px] xl:w-[234px]',
          props.className,
        )}
      > */}
        <motion.div key={props.data.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
          <button
            id="historyBtn"
            onClick={() => handleOpenChat(props.data.id)}
            className={`whitespace-no-wrap relative mb-[8px] flex items-center justify-between overflow-hidden truncate rounded-[16px] 
            border border-items-border-lite hover:bg-[#F9FAFB] dark:border-items-border-dark dark:hover:bg-items-border-dark md:mb-[6px] md:h-[52px] md:w-[185px] md:pl-[16px] md:sm:w-full
            lg:h-[52px] lg:w-full lg:px-[16px] xl:w-full ${chatId === props.data.id ? 'bg-[#F9FAFB]' : ''} ${
              chatId === props.data.id ? 'dark:bg-[#2A2F3A]' : ''
            }`}
          >
            <div className="flex h-full flex-col items-start justify-center">
              <span
                className="font-TTNormsMedium text-heading-text-lite dark:text-heading-text-dark md:text-[12px] md:leading-[14px] md:sm:text-[14px]
                lg:text-[12px] lg:leading-[14px] xl:text-[14px] "
              >
                {truncateText(props.data.title ?? '')}
              </span>
              <span
                className=" font-TTNormsRegular text-[12px] leading-[18px] text-template-card-item-text-lite 
                dark:text-template-card-item-text-dark "
              >
                {truncateText(props.data.description ?? '')}
              </span>
            </div>
            <button id="chatHistoryIcon" onClick={(e) => handleDeleteChat(e, props.data.id)} className="md:hidden ">
              <DeleteChatIcon />
            </button>
            <button onClick={(e) => handleDeleteChat(e, props.data.id)} className="w-7 md:block lg:hidden ">
              <DeleteChatIcon/>
            </button>
          </button>
        </motion.div>
      {/* </div> */}
    </Link>
  )
})
