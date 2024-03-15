'use client'
import question from '../../../../../../public/assets/questionMark.png'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../../../common/UIkit/tooltip'
import Image from 'next/image'
import { PlanFeatureIcon } from './icon_components/PlanFeatureIcon'

export const PlanFeatureItem = (props: {title: string; active: boolean}) => {
  return (
    <div
      className="flex h-[24px] w-full items-center planSm:mt-[6px]
                        md:mb-[8px]
                        md:planSm:mb-[6px] lg:mb-[20px]"
    >
      <div className="mr-[10px] size-[22px]">
        <PlanFeatureIcon isActive={props.active} />
      </div>

      <span
        className="font-TTNormsRegular leading-[19px] text-[#475467] dark:text-[#98A2B3] md:text-[12px]
                            md:leading-[13px] lg:text-[14px]
                            lg:leading-[17px] xl:text-[16px]"
      >
        {props.title}
      </span>
      {/* вопросик рядом с каждой фичей ? не красиво */}
      {/* {props.active && (
        <span className="ml-[6px] w-[16px]">
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="size-[20px]">
                  <Image src={question} alt="question" width={16} height={16} />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Подсказка</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
      )} */}
    </div>
  )
}
