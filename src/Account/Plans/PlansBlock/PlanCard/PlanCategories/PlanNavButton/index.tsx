'use client'
import {Button} from '../../../../../../common/UIkit/button'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../../../../common/UIkit/tooltip'
import { SwitchPlanNavIcon } from './icon_components/SwitchPlanNavIcon';

export const PlanNavButton = (props: {id: number; title: string; icon: string}) => {
  const selectedPlanCategoriesId = 1
  let cursor = props.id === 1 ? 'pointer' : 'not-allowed'
  return props.id === 1 ? (
    <Button
      variant={props.id === selectedPlanCategoriesId ? 'activePlanCategoriesBtn' : 'defaultPlanCategoriesBtn'}
      size="planCategoriesButton"
      style={{cursor: cursor}}
    >
      <SwitchPlanNavIcon icon={props.icon} isActive={props.id === selectedPlanCategoriesId} />
      <span
        className="relative left-[4px] dark:text-[#F5F5F6] vsm:relative vsm:bottom-[3px] vsm:left-[1px] vsm:leading-[9px]
                                        md:text-[12px] md:vsm:text-[11px] lg:text-[12px]
                                        xl:text-[14px]"
      >
        {props.title}
      </span>
    </Button>
  ) : (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={props.id === selectedPlanCategoriesId ? 'activePlanCategoriesBtn' : 'defaultPlanCategoriesBtn'}
            size="planCategoriesButton"
            style={{cursor: cursor}}
          >
            <SwitchPlanNavIcon icon={props.icon} isActive={props.id === selectedPlanCategoriesId} />
            <span
              className="relative left-[4px] dark:text-[#F5F5F6] vsm:relative vsm:bottom-[3px] vsm:left-[1px] vsm:leading-[9px]
                                                  md:text-[12px] md:vsm:text-[11px] lg:text-[12px]
                                                  xl:text-[14px]"
            >
              {props.title}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
          <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
            В разработке
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
