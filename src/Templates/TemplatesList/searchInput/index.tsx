'use client'

import {ChangeEvent, memo, useState} from 'react'
import { SearchIcon } from './icon_components/SearchIcon'

type InputPropsType = {
  placeholder: string
  isHomePage: boolean
}

export const SearchInput = memo(function SearchInput(props: InputPropsType) {
    const style = props.isHomePage
        ? 'relative md:w-full lg:w-[252px] xl:h-[44px] xl:w-[320px]'
        : 'xl:w-full xl:h-[44px] relative flex'

    const [value, setValue] = useState<string>('')

    const handlehange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
        // props.callBack(value)
        }
    }

    return (
        <div className={`${style}`}>
        <input
            type="text"
            value={value}
            onKeyDown={(e) => search(e)}
            onChange={(e) => handlehange(e)}
            className="h-[44px] w-full rounded-[16px] bg-search-template-input-bg-lite px-[14px] py-[12px] font-InterRegular 
                        focus:border-none dark:bg-search-template-input-bg-dark dark:text-[#85888E] md:text-[12px] lg:text-[14px] xl:text-[16px]"
            placeholder={props.placeholder}
        />
        <SearchIcon/>
        </div>
    )
}
)