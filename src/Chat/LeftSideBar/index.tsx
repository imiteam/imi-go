'use client'

import {useChatStore} from '../lib/useChatStore'
import {Buttons} from './Buttons'
import {RolesList} from './RolesList'
import {Search} from './Search'
import {WordsWidget} from './WordsWidget'

import {memo} from 'react'

export const LeftSideBar = memo(function LeftSideBar(props: {
  className?: string
  id: string
  searchParams: {[key: string]: string | string[] | undefined}
  roles: any
  userId: string
}) {
  const {hideAside} = useChatStore()

  return (
    !hideAside && (
      <div
        className="z-50 flex h-full flex-col  
        md:hidden md:w-[200px] md:px-[12px] md:pb-[12px]
        md:pr-[7px] md:sm:absolute md:sm:left-0
        md:sm:top-0 md:sm:w-[280px] md:sm:bg-bg-lite md:sm:px-0 md:sm:dark:bg-bg-dark
        lg:w-[220px] lg:p-[8px] lg:pr-[0px] xl:w-[280px] xl:p-[16px] xl:pr-2 xl:pt-2
        "
      >
        <Search searchParams={props.searchParams} id={props.id} userId={props.userId as string} />
        <Buttons userId={props.userId as string} />
        <RolesList
          searchParams={props.searchParams}
          id={props.id}
          roles={props.roles}
          userId={props.userId as string}
        />
        <WordsWidget id={props.id} userId={props.userId as string} />
      </div>
    )
  )
})
