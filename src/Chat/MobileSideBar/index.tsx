'use client'
import {List} from 'Chat/History/List'
import {Section} from '../History/Section'
import {Buttons} from '../LeftSideBar/Buttons'
import {RolesList} from '../LeftSideBar/RolesList'
import {Search} from '../LeftSideBar/Search'
import {WordsWidget} from '../LeftSideBar//WordsWidget'
import {SheetChat, SheetContentChat} from '../../common/UIkit/sheetChat'
import {GetMyChatsQuery} from 'generated'
import {useEffect, useRef} from 'react'
import {useWindowSize} from 'usehooks-ts'
import {useChatStore} from '../lib/useChatStore'
import { CloseChatSheetButton } from './buttons/CloseChatSheetButton'
import { SublineChatSheetButton } from './buttons/SublineChatSheetButton'

export default function MobileSideBar(props: {
  id: string
  searchParamsRoles: {[key: string]: string | string[] | undefined}
  roles: any
  searchParamsHistory: string | string[] | undefined
  chats: GetMyChatsQuery['chats']
  userId: string
}) {
  const isActiveSubPage = useChatStore((state) => state.isActiveSubPage)
  const setIsActiveSubPage = useChatStore((state) => state.setIsActiveSubPage)

  const hideAside = useChatStore((state) => state.hideAside)
  const {isSheetOpen, setSheetOpen} = useChatStore()
  const {width} = useWindowSize()
  useEffect(() => {
    if (width > 980) {
      setIsActiveSubPage('chats')
    }
  }, [setIsActiveSubPage, width])
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
        setSheetOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setSheetOpen])

  return !hideAside && width > 679 ? (
    <div
      className="flex h-full flex-col  
                        md:flex 
                        md:w-[200px] md:px-[7px] md:pb-[12px] md:pr-0 lg:hidden 
                        "
    >
      <div
        className="flex items-end justify-between  
                md:h-[35px] md:w-[102px]  
                md:sm:h-[31px] md:sm:w-[133px]"
      >
        <SublineChatSheetButton
          title="Чаты"
          activeBtn={isActiveSubPage}
          callBack={() => setIsActiveSubPage('chats')}
          btnID="chats"
        />
        <SublineChatSheetButton
          title="История"
          activeBtn={isActiveSubPage}
          callBack={() => setIsActiveSubPage('history')}
          btnID="history"
        />
      </div>
      {isActiveSubPage === 'chats' ? (
        <>
          <Search searchParams={props.searchParamsRoles} id={props.id} userId={props.userId as string} />
          <Buttons userId={props.userId} />
          <RolesList
            searchParams={props.searchParamsRoles}
            id={props.id}
            roles={props.roles}
            userId={props.userId as string}
          />
          <WordsWidget id={props.id} userId={props.userId as string} />
        </>
      ) : (
        <Section
          searchParams={props.searchParamsHistory}
          className="flex h-full flex-col"
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
      )}
    </div>
  ) : (
    <SheetChat open={isSheetOpen}>
      <SheetContentChat side={'left'} ref={sheetRef} className="">
        <span className="absolute left-[290px] top-[10px] rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary vsm:left-[281px]">
          <CloseChatSheetButton
            callBack={setSheetOpen}
          />
        </span>
        <div
          className="flex h-full flex-col  
                            md:flex 
                            md:w-[286px] md:px-[12px] md:pb-[12px] md:pr-[7px] lg:hidden
                            "
        >
          <div
            className="flex items-end justify-between  md:h-[44px] md:w-[102px] 
                                md:sm:h-[43px] md:sm:w-[133px]"
          >
            <SublineChatSheetButton
                title="Чаты"
                activeBtn={isActiveSubPage}
                callBack={() => setIsActiveSubPage('chats')}
                btnID="chats"
            />
            <SublineChatSheetButton
                title="История"
                activeBtn={isActiveSubPage}
                callBack={() => setIsActiveSubPage('history')}
                btnID="history"
            />
          </div>
          {isActiveSubPage === 'chats' ? (
            <>
              <Search searchParams={props.searchParamsRoles} id={props.id} userId={props.userId as string} />
              <Buttons userId={props.userId} />
              <RolesList
                searchParams={props.searchParamsRoles}
                id={props.id}
                roles={props.roles}
                userId={props.userId as string}
              />
              <WordsWidget id={props.id} userId={props.userId as string} />
            </>
          ) : (
            <Section
              searchParams={props.searchParamsHistory}
              className="flex h-full flex-col "
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
          )}
        </div>
      </SheetContentChat>
    </SheetChat>
  )
}
