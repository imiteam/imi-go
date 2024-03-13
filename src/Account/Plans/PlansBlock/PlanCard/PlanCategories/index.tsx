'use client'
import {GetPlanCategoriesQuery} from 'generated'
import {memo} from 'react'
import {PlanNavButton} from './PlanNavButton'

export const PlanCategories = memo(function PlanCategories(props: {
  planCategories: GetPlanCategoriesQuery['plan_categories']
}) {
  return (
    <div
      className="flex h-[44px] w-auto items-center rounded-[16px] border border-active-btn-white px-[2px] 
                        vsm:h-[53px] vsm:justify-between"
    >
      {props.planCategories.map((item : any) => {
        return <PlanNavButton icon={item.icon!} id={item.id} title={item.title!} key={item.id} />
      })}
    </div>
  )
})
