"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'common/UIkit/tooltip'
import question from '../../../../../public/assets/questionMark.png'
import Image from 'next/image'
import {ChangeEvent, memo, useState} from 'react'

export const KeyWordsField = memo(function KeyWordsField() {
    const [value, setValue] = useState<string>('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 200) {
        return
        }
        setValue(e.target.value)
    }
    return (
        <div className="mb-[24px] flex h-[69px] w-full flex-col justify-between">
        <div className="flex w-full justify-between">
            <span
            className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                                dark:text-template-item-text-dark"
            >
            Ключевые слова
            </span>
            <span className="font-InterRegular text-[12px] leading-[19px] text-[#98A2B3] dark:text-[#667085]">
            {value.length}/200
            </span>
        </div>
        <div className="relative h-[44px] w-full">
            <input
            placeholder="Введите ключевые слова статьи"
            value={value}
            onChange={(e) => handleChange(e)}
            type="text"
            className="focus:shadow-tempGenerateInput h-[44px] w-full rounded-[12px] bg-bg-lite px-[14px] py-[12px] pr-[30px] 
                                                font-InterMedium text-[16px] leading-[19px] text-[#101828] outline-none focus:border-[2px]
                                                focus:border-template-item-text-active-lite placeholder:font-TTNormsRegular dark:bg-bg-dark 
                                                dark:text-[#F5F5F6]"
            />
            <div className="absolute right-[12px] top-[14px] w-[16px]">
            <TooltipProvider>
                <Tooltip>
                <TooltipTrigger asChild>
                    <span className="absolute left-0 block w-[20px]">
                    <Image src={question} alt="question" width={16} height={16} />
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Подсказка</p>
                </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
        </div>
        </div>
    )
}
)