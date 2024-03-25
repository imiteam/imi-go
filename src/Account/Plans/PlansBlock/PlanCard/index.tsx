'use client'
import {memo, useCallback, useEffect, useState} from 'react'
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
export const PlanCard = memo(function PlanCard({plan,planName,togglerNum}: {
  plan: PlansMockData,
  planName: string | undefined
  togglerNum: Number
}) {
  const [sliderStep, setSliderStep] = useState<number>(0)
  const sliderStepHandler = (step: number) => {
    setSliderStep(step)
  }

  const session = useSession()


  const calcSale = useCallback(() => {
    return (plan.sale as any)[togglerNum.toString()][sliderStep]
  }, [sliderStep,togglerNum])

  const isActivePlanCard = useCallback(() => {
    if(Array.isArray(plan.name)){
      if(plan.name.includes(planName!)){
        return true
      } 
    } else if(plan.name === planName) {
        return true 
    } 
      return false
    
  },[planName])
  return (
    <div
      style={{borderColor: isActivePlanCard() ? '#0B3BEC' : ''}}
      className={`rounded-[20px] border-[2px] border-[#D0D5DD] dark:border-[#333741] planSm:my-3 planSm:rounded-[16px] md:mx-[12px] md:w-1/3
                    md:min-w-[234px] md:p-[16px] md:pb-[20px]
                    md:planSm:mx-0 md:planSm:w-full lg:mx-[12px] lg:w-1/3 lg:p-[20px]
                    lg:pt-[24px] xl:mx-[20px] xl:p-[32px]
                    xl:pt-[24px]`}
    >
      {
        plan.name === "Base" || plan.name === "Free" ?
      <PlanCardHeader presentation={plan.presentation} title={plan.title} sale={plan.sale[togglerNum.toString()]} />
      :
      <PlanCardHeader presentation={plan.presentation} title={plan.title} sale={calcSale()} />
      }
      {plan.planButton.type === 'simple' ? (
        <SinglePlanButton title={plan.planButton.title as string} />
      ) : (
        <MultiplyPlanButton title={plan.planButton.title as any} />
      )}
      {
        plan.name === "Base" || plan.name === "Free" ?
        <PlanInfo
        sum={plan.sum[togglerNum.toString()]}
        wordsCount={plan.wordsCount}
        benefit={plan.benefit[togglerNum.toString()]}
        planType={plan.planButton.type}
        sliderStepHandler={sliderStepHandler}
        sliderValue={sliderStep}
        setSliderValue={setSliderStep}
      />
      :
      <PlanInfo
        sum={Array.isArray(plan.sum[togglerNum.toString()]) && (plan.sum as any)[togglerNum.toString()][sliderStep] }
        wordsCount={(plan.wordsCount as any)[sliderStep]}
        benefit={(plan.benefit as any)[togglerNum.toString()][sliderStep]}
        planType={plan.planButton.type}
        sliderStepHandler={sliderStepHandler}
        sliderValue={sliderStep}
        setSliderValue={setSliderStep}
      />
      }
      
      <GoToPlanButton 
      planName={plan.name} 
      isActive={isActivePlanCard()} 
      planPayDataType={plan.paymentFetchObj} 
      userId={session.data?.user.id!} 
      togglerNum={togglerNum} 
      sliderStep={sliderStep}/>
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