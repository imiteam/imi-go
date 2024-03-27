"use client"
import { Item } from './Item'
import { TemplateIcon } from './Icon_components/TemplateIcon'
import { GetTemplateCategoriesQuery } from 'generated'

export default function QuestionDropDownItem({
  heading,
  data,
  callBack,
  icon,
}: {
  heading: string
  data: GetTemplateCategoriesQuery | null
  callBack: (id: number) => void
  icon: string
}) {
  return (
    <div className="h-auto w-full p-[8px]">
      <span className="px-[10px] font-TTNormsRegular text-[14px] leading-[20px] text-[#667085] dark:text-[#98A2B3]">
        {heading}
      </span>
      <ul>
        {data?.template_categories.map((c) => {
          return c.templates.map((n) => {
            return (
                <Item 
                key={n.id}
                callBack={() => callBack}
                title={`спросить ${n.title!}`}>
                  <TemplateIcon/>
                </Item>
            )
          })
          })}
      </ul>
    </div>
  )
}
