"use client"
import {ChangeEvent, memo, useState} from 'react'

export const ThemeField = memo(function ThemeField({title}: {title: string}) {
    const [value, setValue] = useState<string>('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 200) {
        return
        }
        setValue(e.target.value)
    }
    return (
        <div className="mb-[24px] flex h-[90px] w-full flex-col justify-between">
        <div className="flex w-full justify-between">
            <span
            className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                                dark:text-template-item-text-dark"
            >
            На какую тему {title}?*
            </span>
            <span className="font-InterRegular text-[12px] leading-[19px] text-[#98A2B3] dark:text-[#667085]">
            {value.length}/200
            </span>
        </div>
        <input
            placeholder="Напишите название темы"
            value={value}
            onChange={(e) => handleChange(e)}
            type="text"
            className="focus:shadow-tempGenerateInput h-[65px] w-full rounded-[12px] bg-bg-lite px-[14px] py-[12px] 
                    font-InterMedium text-[16px] leading-[19px] text-[#101828] outline-none focus:border-[2px]
                                            focus:border-template-item-text-active-lite placeholder:font-TTNormsRegular dark:bg-bg-dark 
                                            dark:text-[#F5F5F6]"
        />
        </div>
    )
}
)