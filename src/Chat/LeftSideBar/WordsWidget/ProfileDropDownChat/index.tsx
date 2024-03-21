import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger} from '../../../../common/UIkit/select'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../../common/UIkit/tooltip'
import { useMemo } from 'react';
import { UserWalletSubscription } from 'generated';

export default function ProfileDropDown(props: {userWalletData: UserWalletSubscription | undefined; planName: any, ai_text_model : string | undefined}) {
  const progress = useMemo(
    () => {
      if(props.ai_text_model !== "gpt-4"){
        return ((props.userWalletData?.wallets[0]?.tokens! + props.userWalletData?.wallets[0]?.additional_tokens!) * 3) / 4
      } else {
        return (((props.userWalletData?.wallets[0]?.tokens! + props.userWalletData?.wallets[0]?.additional_tokens!) * 3) / 4) / 8
      }
    },
    [props.userWalletData?.wallets, props.ai_text_model],
  );
  return (
    <Select disabled>
      <div className="flex flex-col">
        {props.userWalletData?.wallets[0]?.tokens && (
          <span
            className="relative right-[1px] top-[4px] font-TTNormsMedium font-medium text-header-bg-lite dark:text-[#fff] 
            md:right-[7px] md:top-[6px] md:font-InterMedium md:text-[12px]
            md:sm:font-TTNormsMedium md:sm:text-[14px] lg:text-[14px] "
          >
          {isNaN(progress) ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-4.5 w-4.5 border-b-2 border-gray-900" style={{width: '15px', height: '15px'}}></div>
            </div>
          ) : (
            `${Math.round(progress)} слов`
          )}
          </span>
        )}
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <SelectTrigger
                className="relative right-[4px] flex  h-[20px] w-[85px] rounded-[20px] p-[0px] pb-[3px] text-text-color-white 
                                        hover:bg-[#fff] hover:text-black"
              >
                <span
                  className=" font-regular relative right-[2px] top-[2px] px-[4px] font-TTNormsMedium text-[#475467] dark:text-[#98A2B3] md:right-[6px]
                                    md:top-[2px] md:font-TTNormsRegular md:text-[12px] md:sm:text-[14px] lg:text-[12px] xl:text-[14px]"
                >
                  {props.planName}
                </span>
              </SelectTrigger>
            </TooltipTrigger>
            <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
              <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                В разработке
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <SelectContent className="">
        <SelectGroup className="">
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
