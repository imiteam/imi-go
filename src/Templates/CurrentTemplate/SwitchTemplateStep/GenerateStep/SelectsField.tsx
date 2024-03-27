"use client"

import Image from 'next/image'
// import { ChangeEvent, useState } from "react"
import ru from '../../../../../public/assets/ru.svg'
import {
  TemplateSelect,
  TemplateSelectContent,
  TemplateSelectGroup,
  TemplateSelectItem,
  TemplateSelectTrigger,
  TemplateSelectValue,
} from '../../../../common/UIkit/templateSelect'
import { memo } from 'react'
// type SelectsFieldPropsType = {}

export const SelectsField = memo(function SelectsField() {
  // const [value, setValue] = useState<string>("")
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value)
  // }
  return (
    <div className="flex h-[69px] w-full justify-between">
      <div className="flex h-[69px] w-[312px] flex-col justify-between">
        <span
          className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                            dark:text-template-item-text-dark "
        >
          Выбор тона
        </span>
        <TemplateSelect>
          <TemplateSelectTrigger
            className="h-[44px] w-[312px] rounded-[12px] font-TTNormsMedium text-[16px] leading-[19px] text-heading-text-lite
                                 dark:text-heading-text-dark"
          >
            <TemplateSelectValue placeholder="без тона" />
          </TemplateSelectTrigger>
          <TemplateSelectContent className="">
            <TemplateSelectGroup>
              <TemplateSelectItem value="1">1</TemplateSelectItem>
              <TemplateSelectItem value="2">2</TemplateSelectItem>
              <TemplateSelectItem value="3">3</TemplateSelectItem>
              <TemplateSelectItem value="4">4</TemplateSelectItem>
              <TemplateSelectItem value="5">5</TemplateSelectItem>
              <TemplateSelectItem value="6">6</TemplateSelectItem>
              <TemplateSelectItem value="7">7</TemplateSelectItem>
              <TemplateSelectItem value="8">8</TemplateSelectItem>
              <TemplateSelectItem value="9">9</TemplateSelectItem>
              <TemplateSelectItem value="10">10</TemplateSelectItem>
            </TemplateSelectGroup>
          </TemplateSelectContent>
        </TemplateSelect>
      </div>
      <div className="flex h-[69px] w-[120px] flex-col justify-between">
        <span
          className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                            dark:text-template-item-text-dark "
        >
          Язык
        </span>
        <TemplateSelect defaultValue="RU">
          <TemplateSelectTrigger
            className="h-[44px] w-[120px] rounded-[12px] font-TTNormsMedium text-[16px] leading-[19px] 
                                            text-heading-text-lite dark:text-heading-text-dark"
          >
            <TemplateSelectValue />
          </TemplateSelectTrigger>
          <TemplateSelectContent>
            <TemplateSelectGroup>
              <TemplateSelectItem value="RU" style={{display: 'flex'}}>
                <div className="flex items-center">
                  <Image src={ru} width={20} height={20} alt="ru" className="mr-[8px]" /> <span>RU</span>
                </div>
              </TemplateSelectItem>
              <TemplateSelectItem value="EN" style={{display: 'flex'}}>
                <div className="flex items-center">
                  <Image src={ru} width={20} height={20} alt="en" className="mr-[8px]" /> <span>EN</span>
                </div>
              </TemplateSelectItem>
            </TemplateSelectGroup>
          </TemplateSelectContent>
        </TemplateSelect>
      </div>
    </div>
  )
}
)