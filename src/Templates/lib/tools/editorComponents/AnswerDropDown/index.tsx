'use client'

import {useAddParagraph} from '../../../customHooks/index'
import {useTheme} from 'next-themes'
import {memo, useLayoutEffect} from 'react'
import { Item } from './Item'
import { InsertDocIcon } from './icon_components/InsertDocIcon'
import { BeginIcon } from './icon_components/BeginIcon'
import { LongAnswerIcon } from './icon_components/LongAnswerIcon'
import { ReloadIcon } from './icon_components/ReloadIcon'
import { DeleteDocIcon } from './icon_components/DeleteDocIcon'
import { useTemplateStore } from 'Templates/lib/useTemplateStore'

export const AnswerDropDown = memo(function QuestionDropDown({questionBlockHeight}: {questionBlockHeight: number}) {
  const {answer, setCanIgnoreHelpers} = useTemplateStore()
  const addParagraph = useAddParagraph(answer)
  const {theme} = useTheme()
  useLayoutEffect(() => {
    setCanIgnoreHelpers(true)
  }, [setCanIgnoreHelpers])
  return (
    <div
      id={theme === 'light' ? 'answerDropdownScrollLight' : 'answerDropdownScrollDark'}
      style={{
        position: 'absolute',
        zIndex: 999,
        width: '372px',
        height: '194px',
        top: `${questionBlockHeight + 60}px`,
      }}
      className=" overflow-auto rounded-[16px] bg-[#EDF2F6] p-[6px] dark:bg-[#17181C]"
    >
      <Item 
        title="Добавить в документ"
        callBack={addParagraph}
      >
        <InsertDocIcon/>
      </Item>

      <Item 
        title="Продолжить генерацию"
        callBack={() => {}}
      >
        <BeginIcon/>
      </Item>

      <Item 
        title="Получить длинный ответ" 
        callBack={() => {}}
      >
        <LongAnswerIcon/>
      </Item>

      <Item 
        title="Повторная генерация" 
        callBack={() => {}}
      >
        <ReloadIcon/>
      </Item>

      <Item 
        title="Очистить" 
        callBack={() => {}}
      >
        <DeleteDocIcon/>
      </Item>
    </div>
  )
}
)