'use client'
import cn from 'classnames'
import {GetMyChatsQuery} from 'generated'
import {memo} from 'react'
import {useChatStore} from '../lib/useChatStore'
import {List} from './List'
import {Section} from './Section'

export const History = memo(function History(props: {
  className?: string
  id: string
  searchParams: string | string[] | undefined
  chats: GetMyChatsQuery['chats']
  userId: string
}) {
  // const historyData = await getMyChats({
  //   userId: 'e8e0a634-dae1-49b2-bb4a-9f3b1a37a4b4',
  //   value: props.searchParams ? String(props.searchParams) : '',
  // })
  const {hideAside} = useChatStore()
  return (
    !hideAside && (
      <div
        className="z-50 flex h-full flex-col
            md:hidden md:w-[200px] md:px-[12px] md:pb-[12px]
            md:pr-[7px] md:sm:absolute md:sm:left-0
            md:sm:top-0 md:sm:w-[280px] md:sm:bg-bg-lite md:sm:px-0 md:sm:dark:bg-bg-dark
            lg:w-[220px] lg:p-[8px] lg:pl-0 lg:pr-[4px] xl:w-[280px] xl:p-[16px] xl:pl-3 xl:pr-2 xl:pt-2
          "
      >
        <Section
          searchParams={props.searchParams}
          className={cn(props.className)}
          id={props.id}
          userId={props.userId as string}
        >
          <List
            chats={props.chats}
            id={props.id}
            userId={props.userId as string}
            firstChatId={props.chats[0] ? (props.chats[0].id as string) : null}
            secondChatId={props.chats[1] ? (props.chats[1].id as string) : null}
          />
        </Section>
      </div>
    )
  )
})
