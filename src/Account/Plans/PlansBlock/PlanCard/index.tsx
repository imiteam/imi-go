'use client'
import {memo} from 'react'
import {PlansMockData} from '../index'
import {GoToPlanButton} from './GoToPlanButton'
import {MultiplyPlanButton} from './MultiplyPlanButton'
import {PlanCardHeader} from './PlanCardHeader'
import {PlanFeatureItem} from './PlanFeatureItem'
import {PlanInfo} from './PlanInfo'
import {SinglePlanButton} from './SinglePlanButton'
import { useSession } from 'next-auth/react'

export type MetaDataType = {
  plan : string
  tokens : number
  yearly : boolean
}
export const PlanCard = memo(function PlanCard({plan,planName}: {plan: PlansMockData,planName: string | undefined}) {
  const session = useSession()
  return (
    <div
      style={{borderColor: plan.name === planName ? '#0B3BEC' : ''}}
      className={`rounded-[20px] border-[2px] border-[#D0D5DD] dark:border-[#333741] planSm:my-3 planSm:rounded-[16px] md:mx-[12px] md:w-1/3
                    md:min-w-[234px] md:p-[16px] md:pb-[20px]
                    md:planSm:mx-0 md:planSm:w-full lg:mx-[12px] lg:w-1/3 lg:p-[20px]
                    lg:pt-[24px] xl:mx-[20px] xl:p-[32px]
                    xl:pt-[24px]`}
    >
      <PlanCardHeader presentation={plan.presentation} title={plan.title} sale={plan.sale} />
      {plan.planButton.type === 'simple' ? (
        <SinglePlanButton title={plan.planButton.title as string} />
      ) : (
        <MultiplyPlanButton title={plan.planButton.title as any} />
      )}

      <PlanInfo
        sum={plan.sum}
        usersCount={plan.usersCount}
        wordsCount={plan.wordsCount}
        benefit={plan.benefit}
        planType={plan.planButton.type}
      />
      <GoToPlanButton planName={plan.name} isActive={plan.name === planName} planPayDataType={plan.paymentFetchObj} userId={session.data?.user.id!}/>
      <div
        id="planFeature"
        className="flex h-[250px] w-full flex-col
                            md:h-[214px]"
      >
        {plan.planFeautures.map((f, index) => {
          return <PlanFeatureItem title={f.title} active={f.includes} key={index} />
        })}
      </div>
    </div>
  )
})