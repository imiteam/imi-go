'use client'
import { memo } from 'react'
import {Button} from '../../../../../common/UIkit/button'
import { SwitchGoToPlanIcon } from './icon_components/SwitchGoToPlanIcon'
import usePaymentRequest from 'Account/Plans/hooks/usePaymentRequest'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'common/UIkit/tooltip'
export type PlanPayDataType = {
  amount: number,
  description: string,
  metadata: {
    plan: string,
    tokens: number,
    yearly: boolean,
  },
  is_subscription: boolean,
} 
export const GoToPlanButton = memo(function GoToPlanButton({isActive, planPayDataType, userId, planName}: 
  {isActive: boolean, planPayDataType: PlanPayDataType, userId: string, planName: string}){
  
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
    <Button 
      variant={isActive ? 'activePlan' : 'goToPlan'} 
      size={isActive ? 'activePlan' : 'goToPlan'} 
      disabled={isActive || !userId}
      onClick={() => getPaymentUrl(planPayDataType.amount, 
                                  planPayDataType.description,
                                  userId,
                                  { plan: planPayDataType.metadata.plan, 
                                    tokens: planPayDataType.metadata.tokens, 
                                    yearly: planPayDataType.metadata.yearly
                                  }, 
                                    true)
                                    }>
      <SwitchGoToPlanIcon icon={isActive ? 'activePlan' : 'goToPlan'} />
      {isActive ? <span>Активирован</span> : <span>Перейти на этот тариф</span>}
    </Button>
  )
})
