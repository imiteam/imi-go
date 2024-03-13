'use client'
import {ChangeEvent, memo, useState} from 'react'
import { ProfileChangelButton } from './buttons/ProfileChangelButton'
import { ChangeProfileIcon } from './icon_components/ChangeProfileIcon'

export const Email = memo(function Email({data}: {data: string}) {
  const [value, setData] = useState<string>(data)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }
  return (
    <div className="flex h-[110px] w-full flex-col justify-between border-y border-[#DAE3E9] py-[20px] dark:border-[#17181C]">
      <span
        className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                        dark:text-template-item-text-dark 
                        md:text-[14px]"
      >
        Адрес электронной почты
      </span>
      <div
        className="relative flex w-full justify-between
                            md:items-center"
      >
        <input
          disabled
          placeholder={value}
          value={value}
          onChange={(e) => handleChange(e)}
          type="text"
          className="focus:shadow-tempGenerateInput h-[44px] rounded-[12px] bg-bg-lite px-[14px] py-[12px] font-InterRegular text-[16px] 
                            leading-[19px] text-[#101828] outline-none focus:border-[2px] focus:border-template-item-text-active-lite placeholder:font-TTNormsRegular
                            dark:bg-bg-dark dark:text-[#F5F5F6] md:mr-[10px] 
                            md:w-full
                            md:text-[14px] lg:mr-[12px]
                            lg:w-2/3 xl:m-0 xl:w-[388px]"
        />

        <ProfileChangelButton title="Изменить"/>
        <div className="flex size-[44px] items-center justify-center md:visible md:sm:hidden lg:hidden">
          <ChangeProfileIcon/>
        </div>
      </div>
    </div>
  )
})
