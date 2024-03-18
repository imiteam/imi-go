'use client'
import { memo } from 'react'
import {Button} from '../../../../../common/UIkit/button'
import { SwitchGoToPlanIcon } from './icon_components/SwitchGoToPlanIcon'
import usePaymentRequest from 'Account/Plans/hooks/usePaymentRequest'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'common/UIkit/tooltip'
export type PlanPayDataType = {
  amount:{
    [Key : string] : number,
  },
  description: string,
  metadata: {
    plan: string,
    tokens: number,
    yearly: {
        [Key : string] : boolean,
      },
  },
  is_subscription: boolean, 
} 
export const GoToPlanButton = memo(function GoToPlanButton({isActive, planPayDataType, userId, planName,togglerNum,sliderStep}: 
  {isActive: boolean, planPayDataType: PlanPayDataType, userId: string, planName: string,togglerNum: Number, sliderStep: number}){
  
  const getPaymentUrl = usePaymentRequest();

  return (
    planName === "Free" ?
    <TooltipProvider delayDuration={150}>
    <Tooltip>
      <TooltipTrigger asChild>
        <span>
          <Button 
            variant={isActive ? 'activePlan' : 'goToPlan'} 
            size={isActive ? 'activePlan' : 'goToPlan'} 
            disabled
            >
            <SwitchGoToPlanIcon icon={isActive ? 'activePlan' : 'goToPlan'} />
            {isActive ? <span>Активирован</span> : <span>Недоступно</span>}
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
        <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
          Тариф подключается автоматически
        </span>
      </TooltipContent>
    </Tooltip>
    </TooltipProvider>
    :
    planName === "Base" ?
    <Button 
      variant={isActive ? 'activePlan' : 'goToPlan'} 
      size={isActive ? 'activePlan' : 'goToPlan'} 
      disabled={isActive || !userId}
      onClick={() => getPaymentUrl(togglerNum === 1 ? planPayDataType.amount[togglerNum.toString()] : planPayDataType.amount[togglerNum.toString()] * 12, 
                                  planPayDataType.description,
                                  userId,
                                  { plan: planPayDataType.metadata.plan, 
                                    tokens: togglerNum === 1 ? planPayDataType.metadata.tokens : planPayDataType.metadata.tokens * 12, 
                                    yearly: planPayDataType.metadata.yearly[togglerNum.toString()]
                                  }, 
                                    true)
                                    }>
      <SwitchGoToPlanIcon icon={isActive ? 'activePlan' : 'goToPlan'} />
      {isActive ? <span>Активирован</span> : <span>Перейти на этот тариф</span>}
    </Button>
    :
    <Button  
      variant={isActive ? 'activePlan' : 'goToPlan'} 
      size={isActive ? 'activePlan' : 'goToPlan'} 
      disabled={isActive || !userId}
      onClick={() => getPaymentUrl(togglerNum === 1 ? planPayDataType.amount[togglerNum.toString()] * sliderStep : (planPayDataType.amount[togglerNum.toString()] * sliderStep) * 12, 
                                  planPayDataType.description,
                                  userId,
                                  { plan: planPayDataType.metadata.plan, 
                                    tokens: togglerNum === 1 ? planPayDataType.metadata.tokens * sliderStep : (planPayDataType.metadata.tokens * sliderStep) * 12, 
                                    yearly: planPayDataType.metadata.yearly[togglerNum.toString()]
                                  }, 
                                    true)
                                    }>
      <SwitchGoToPlanIcon icon={isActive ? 'activePlan' : 'goToPlan'} />
      {isActive ? <span>Активирован</span> : <span>Перейти на этот тариф</span>}
    </Button>
  )
})
