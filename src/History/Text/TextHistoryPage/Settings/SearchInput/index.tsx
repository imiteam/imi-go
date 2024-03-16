'use client'

import {ChangeEvent, useState} from 'react'
import { SwitchHistoryTextIcon } from '../../common/SwitchHistoryTextIcon'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'common/UIkit/tooltip'

export default function SearchInput() {
  const [value, setValue] = useState<string>('')

  const handlehange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  // const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") callback(value)
  // }
  return (
    <div
      className="relative mr-2 lg:w-[200px] xl:h-[36px]
                        xl:w-[320px]"
    >
      <SwitchHistoryTextIcon icon="search" />
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <input
                type="text"
                value={value}
                disabled
                // onKeyDown={(e) => search(e)}
                onChange={(e) => handlehange(e)}
                className="h-[36px] w-full rounded-[12px] bg-search-template-input-bg-lite px-[14px] py-[12px] pl-10 font-TTNormsRegular 
                                    focus:border-none dark:bg-search-template-input-bg-dark dark:text-[#85888E] md:text-[12px] lg:text-[14px] xl:text-[16px]"
                placeholder="Найти документ"
              />
            </TooltipTrigger>
            <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
              <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                В разработке
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      
    </div>
  )
}