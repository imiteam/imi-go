import {createChatAction} from '../../graphql/action'
import Link from 'next/link';
import {memo, useCallback} from 'react'
import { NewFreedomChat } from './NewFreedomChat';

export const Buttons = memo(function Buttons(props: {className?: string; userId: string}) {
  const handleCreateNewChat = useCallback(async () => {
    try {
      await createChatAction({
        model: 'gpt-3.5',
        title: 'Новый чат',
        userId: props.userId,
        systemPromt: 'absent',
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div
      className="flex h-auto flex-col 
      gap-2 md:mb-1.5 md:mt-2
      md:w-full md:sm:mt-4 md:sm:w-full md:sm:px-[0px]
      lg:mb-2
      lg:mt-3 lg:w-full xl:mb-2.5
      xl:mt-4 xl:w-[280px]"
    >
      {/* <Button variant={'roleSideBarBtn'} size="roleSideBarBtn" onClick={handleCreateNewChat}> */}
      {/* <Icon icon="newFreeChat" /> */}
      {/* <span className="">Новый свободный чат</span> */}
      {/* </Button> */}
      {/* <NavButton title="Избранные чаты" icon="favoriteChatSideBar" callBack={() => {}} component="roleSideBarBtn" /> */}
      <Link href="#" onClick={(e) => e.preventDefault()}>
      <NewFreedomChat
        title="Новый свободный чат"
        callBack={handleCreateNewChat}
      />
      </Link>
      {/* <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild className='cursor-not-allowed'>
              <NavButton title="Избранные чаты" icon="favoriteChatSideBar" callBack={() => {}} component="roleSideBarBtn" />
            </TooltipTrigger>
            <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
              <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                В разработке
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}
    </div>
  )
})
