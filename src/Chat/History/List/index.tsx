'use client'
import {useVirtualizer} from '@tanstack/react-virtual'
import cn from 'classnames'
import {GetMyChatsQuery} from 'generated'
import {useTheme} from 'next-themes'
import {memo, useRef} from 'react'
import {Item} from './Item'

export const List = memo(function List(props: {
  className?: string
  id: string
  chats: GetMyChatsQuery['chats']
  userId: string
  firstChatId: string | null
  secondChatId: string | null
}) {
  const parentRef = useRef<HTMLDivElement>(null)
  const {theme} = useTheme()

  const currentDate = new Date()

  const getYesterday = () => {
    const yesterday = new Date(currentDate)
    yesterday.setDate(currentDate.getDate() - 1)
    return yesterday
  }

  const getSevenDaysAgo = () => {
    const sevenDaysAgo = new Date(currentDate)
    sevenDaysAgo.setDate(currentDate.getDate() - 7)
    return sevenDaysAgo
  }

  const getThirtyDaysAgo = () => {
    const thirtyDaysAgo = new Date(currentDate)
    thirtyDaysAgo.setDate(currentDate.getDate() - 30)
    return thirtyDaysAgo
  }

  const sortAndGroupChats = (chats: GetMyChatsQuery['chats'] | any) => {
    const todayChats: Array<GetMyChatsQuery['chats']> = []
    const yesterdayChats: Array<GetMyChatsQuery['chats']> = []
    const lastSevenDaysChats: Array<GetMyChatsQuery['chats']> = []
    const lastThirtyDaysChats: Array<GetMyChatsQuery['chats']> = []
    const result: Array<any> = []

    chats.forEach((chat: any) => {
      const chatDate = new Date(chat.createdAt)

      if (chatDate.toDateString() === currentDate.toDateString()) {
        todayChats.push(chat)
      } else if (chatDate.toDateString() === getYesterday().toDateString()) {
        yesterdayChats.push(chat)
      } else if (chatDate >= getSevenDaysAgo()) {
        lastSevenDaysChats.push(chat)
      } else if (chatDate >= getThirtyDaysAgo()) {
        lastThirtyDaysChats.push(chat)
      }
    })

    if (todayChats.length > 0) {
      result.push(
        {
          time: 'Сегодня',
          id: 1,
          slash: true,
        },
        ...todayChats,
      )
    }
    if (yesterdayChats.length > 0) {
      result.push(
        {
          time: 'Вчера',
          slash: true,
        },
        ...yesterdayChats,
      )
    }
    if (lastSevenDaysChats.length > 0) {
      result.push(
        {
          time: 'Последние 7 дней',
          slash: true,
        },
        ...lastSevenDaysChats,
      )
    }
    if (lastThirtyDaysChats.length > 0) {
      result.push(
        {
          time: 'Последние 30 дней',
          slash: true,
        },
        ...lastThirtyDaysChats,
      )
    }
    return result
  }

  const sortList = sortAndGroupChats(props.chats)

  const rowVirtualizer = useVirtualizer({
    count: sortList.length,
    getScrollElement: () => parentRef.current,
    estimateSize: (i) => (sortList[i]?.slash ? 28 : 60),
  })

  const mountedStyle = {animation: 'inAnimation 150ms ease-in'}

  return (
    <div
      style={{height: `calc(100% - 100px)`}}
      className={cn('h-full w-full md:max-h-[650px] lg:max-h-[90%]', props.className)}
    >
      <div
        ref={parentRef}
        className="List"
        style={{
          height: '100%',
          width: '100%',
          overflowY: 'auto',
          paddingRight: '8px',
        }}
        id={theme === 'light' ? 'historyWindowLight' : 'historyWindowDark'}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.key}
              style={{
                position: 'absolute',
                top: sortList[virtualRow.index]?.slash ? 6 : 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualRow.start}px`,
              }}
              className="flex"
            >
              {sortList[virtualRow.index]?.slash ? (
                <>
                  <span
                    className="mb-[8px] font-TTNormsMedium text-[12px] leading-[14px] text-[#98A2B3] dark:text-[#85888E] md:mb-[6px]
                          md:sm:mb-[8px]"
                  >
                    {sortList[virtualRow.index].time}
                  </span>
                </>
              ) : null}
              {sortList[virtualRow.index]?.title ? (
                <>
                  <Item
                    data={sortList[virtualRow.index]}
                    requestMessages={sortList[virtualRow.index]}
                    userId={props.userId}
                    firstChatId={props.firstChatId}
                    secondChatId={props.secondChatId}
                  />
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div
        className="pointer-events-none relative z-20 flex h-[120px] w-full select-none justify-center bg-gradient-to-t  from-[#EDF2F6] dark:from-[#17181C] md:bottom-[120px] lg:bottom-[120px]"
        style={mountedStyle}
      ></div>
    </div>
  )
})
