'use client'
import {ChangeEvent, useState} from 'react'

export default function Input({data, title, marginR}: {data: string; title: string; marginR?: string}) {
  const [value, setData] = useState<string>(data)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }
  return (
    <div
      className={`flex h-full flex-col justify-between lg:w-1/2 xl:m-0
                        xl:w-[261px] lg:mr-[${marginR ? marginR : '0'}px]
                        md:mb-[7px] md:h-1/2
                        md:sm:w-full sm:mr-[${marginR ? marginR : '0'}px] md:sm:h-[67px]`}
    >
      <span
        className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                        dark:text-template-item-text-dark
                        md:text-[14px] "
      >
        {title}
      </span>
      <div className="relative flex h-[90px] w-full flex-col justify-end">
        <input
          disabled
          placeholder={value}
          value={value}
          onChange={(e) => handleChange(e)}
          type="text"
          className="focus:shadow-tempGenerateInput h-[44px] w-full rounded-[12px] bg-bg-lite px-[14px] py-[12px] 
                            font-InterRegular text-[16px] leading-[19px] text-[#101828] outline-none focus:border-[2px]
                            focus:border-template-item-text-active-lite placeholder:font-TTNormsRegular dark:bg-bg-dark 
                            dark:text-[#F5F5F6]
                            md:text-[14px]"
        />
      </div>
    </div>
  )
}
