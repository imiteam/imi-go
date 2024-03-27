"use client"

import {ChangeEvent, memo, useState} from 'react'

export const LengthField = memo(function LengthField() {
    const [value, setValue] = useState<string>('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div className="mb-[24px] flex h-[68px] w-full flex-col justify-between">
        <span
            className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                            dark:text-template-item-text-dark"
        >
            Длина статьи
        </span>

        <input
            placeholder="Введите длину статьи"
            value={value}
            onChange={(e) => handleChange(e)}
            type="text"
            className="focus:shadow-tempGenerateInput h-[43px] w-full rounded-[12px] bg-bg-lite px-[14px] py-[12px] 
                    font-InterMedium text-[16px] leading-[19px] text-[#101828] outline-none focus:border-[2px]
                                            focus:border-template-item-text-active-lite placeholder:font-TTNormsRegular dark:bg-bg-dark 
                                            dark:text-[#F5F5F6]"
        />
        </div>
    )
}
)