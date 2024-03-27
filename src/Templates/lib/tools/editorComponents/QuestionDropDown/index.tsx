'use client'
import {useTheme} from 'next-themes'
import QuestionDropDownRole from './QuestionDropDownRole'
import QuestionDropDownTemplate from './QuestionDropDownTemplate'
import { useTemplateStore } from 'Templates/lib/useTemplateStore'
import { memo } from 'react'

export const QuestionDropDown = memo(function QuestionDropDown({questionBlockHeight}: {questionBlockHeight: number}) {
  const {templates, roles} = useTemplateStore()
  const {theme} = useTheme()
  return (
    <div
      id={theme === 'light' ? 'answerDropdownScrollLight' : 'answerDropdownScrollDark'}
      style={{
        position: 'absolute',
        zIndex: 100,
        width: '372px',
        height: '408px',
        top: `${questionBlockHeight + 20}px`,
      }}
      className=" overflow-auto rounded-[16px] bg-[#EDF2F6] p-[6px] dark:bg-[#17181C]"
    >
      <QuestionDropDownRole callBack={() => {}} heading="Роли" roles={roles} icon="answerDropdownRole" />

      <QuestionDropDownTemplate callBack={() => {}} heading="Шаблоны" data={templates} icon="answerDropdownTemplate" />

      {/* <button className="h-[40px] w-[100px] border bg-[red]" onClick={() =>{}}>
            add
            </button> */}
    </div>
  )
}
)