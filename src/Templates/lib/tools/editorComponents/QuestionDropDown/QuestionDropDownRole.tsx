"use client"
import { GetRolesQuery } from 'generated'
import { Item } from './Item'
import { RoleIcon } from './Icon_components/RoleIcon'

export default function AnswerDropDownItem({
  heading,
  roles,
  callBack,
  icon,
}: {
  heading: string
  roles: GetRolesQuery['roles'] | null
  callBack: (id: number) => void
  icon: string
}) {
  return (
    <div className="h-auto w-full border-b-[1px] border-b-[#DAE3E9] p-[8px] dark:border-b-[#21242C]">
      <span className="px-[10px] font-TTNormsRegular text-[14px] leading-[20px] text-[#667085] dark:text-[#98A2B3]">
        {heading}
      </span>
      <ul>
        {roles!.map((r) => {
          return (
            <Item 
            key={r.id}
            callBack={() => callBack}
            title={`спросить ${r.title!}`}>
              <RoleIcon/>
            </Item>
          )
        })}
      </ul>
    </div>
  )
}
