'use client'
import {Button} from "../../../../common/UIkit/button"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../../common/UIkit/tooltip'
import {usePathname} from 'next/navigation'
import {useEffect} from 'react'
import {useProfileStore} from '../../../lib/useProfileStore'

export const ProfileNavButton = ({id, title, name}: {id: number; title: string; name: string}) => {
  const {buttonId, SetButtonId} = useProfileStore()
  const pathName = usePathname()
  let currentPath = pathName.split('/')[2] ? pathName.split('/')[2] : '/'

  useEffect(() => {
    if (currentPath === name) {
      SetButtonId(id)
    }
  }, [currentPath, id, name])

  let cursor = name === 'team' || name === 'partners' ? 'not-allowed' : 'pointer'
  return name === 'team' || name === 'partners' ? (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            style={{cursor: cursor}}
            variant={buttonId === id ? 'activeProfileNavButton' : 'defaultProfileNavBtn'}
            size="profileNavButton"
          >
            <span>{title}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
          <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
            В разработке
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <Button
      style={{cursor: cursor}}
      variant={id === buttonId ? 'activeProfileNavButton' : 'defaultProfileNavBtn'}
      size="profileNavButton"
      // onClick={disabled ? () => {} : () => SetButtonId(id)}
    >
      <span>{title}</span>
    </Button>
  )
}