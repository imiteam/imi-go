'use client'
import { Button } from 'common/UIkit/button';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../common/UIkit/tooltip'
import {SwitchHistoryCategoryIcon} from './SwitchHistoryCategoryIcon';
// import {useHistoryStore} from 'lib/store/historyStore'

export default function HistoryNavButton({id, title, icon}: {id: number; title: string; icon: string}) {
  // const {buttonId} = useHistoryStore()

  let cursor = id === 1 ? 'pointer' : 'not-allowed'
  return id === 1 ? 
    <Button
      variant={id === 1 ? 'activePlanCategoriesBtn' : 'defaultPlanCategoriesBtn'}
      size="planCategoriesButton"
      style={{cursor: cursor}}
      // onClick={() => SetButtonId(id)}
    >
      <SwitchHistoryCategoryIcon icon={icon} isActive={id === 1} />
      <span
        className="relative left-[4px] dark:text-[#F5F5F6] vsm:relative vsm:bottom-[3px] vsm:left-[1px] vsm:leading-[9px]
                    md:text-[12px]
                    md:vsm:text-[11px]
                    lg:text-[14px]"
      >
        {title}
      </span>
    </Button>
    :
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={id === 1 ? 'activePlanCategoriesBtn' : 'defaultPlanCategoriesBtn'}
            size="planCategoriesButton"
            style={{cursor: cursor}}
            // onClick={() => SetButtonId(id)}
          >
            <SwitchHistoryCategoryIcon icon={icon} isActive={id === 1} />
            <span
              className="relative left-[4px] dark:text-[#F5F5F6] vsm:relative vsm:bottom-[3px] vsm:left-[1px] vsm:leading-[9px] 
                              md:text-[12px]
                              md:vsm:text-[11px]
                              lg:text-[14px]"
            >
              {title}
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
  
}
