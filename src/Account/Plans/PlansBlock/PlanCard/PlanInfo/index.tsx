'use client'
import {useEffect, useState} from 'react'
import {PlanCardSlider} from './PlanCardSlider'
import { useProfileStore } from 'Account/lib/useProfileStore'

export const PlanInfo = (props: {
  wordsCount: number | string
  sum: number
  benefit: number
  planType: string
  sliderStepHandler : (step: number) => void
}) => {
  const [changedWordsCount, setChangedWordsCount] = useState<number>(1000000)
  const [sliderValue, setSliderValue] = useState<number>(2)
  const handleSliderChange = (value: number[]) => {
    props.sliderStepHandler(value[0]! + 1)
    setSliderValue(value[0]! + 1)
  }
  const {selectedMultiplyPlanButtonId} = useProfileStore()
  useEffect(() => {
    setChangedWordsCount(1000000 * sliderValue)
  }, [sliderValue])
  return (
    <div className="flex w-full flex-col lg:h-[125px] xl:h-auto">
      {props.planType === 'simple' ? (
        <div
          className="mb-[20px] flex h-[50px] w-full flex-col pt-[12px]
                                planSm:mb-0"
        >
          {props.wordsCount === 'безлимитно' ? (
            <span
              className="mb-[4px] font-TTNormsMedium leading-[14px] text-[#475467] dark:text-[#98A2B3] md:text-[12px]
                                    lg:text-[12px]
                                    xl:text-[14px]"
            >
              Без ограничений слов *
            </span>
          ) : (
            <span
              className="mb-[4px] font-TTNormsMedium leading-[14px] text-[#475467] dark:text-[#98A2B3] md:text-[12px]
                                    lg:text-[12px]
                                    xl:text-[14px]"
            >
              {props.wordsCount.toLocaleString()} слов / месяц
            </span>
          )}
        </div>
      ) : (
        <div
          className="flex h-[50px] w-full flex-col justify-between planSm:w-[85%] lg:mb-[25px]
                                lg:pt-[14px]
                                xl:pt-[18px]"
        >
          <PlanCardSlider defaultValue={[2]} max={5} step={1} onValueChange={handleSliderChange} />
          <div
            className="mb-[20px] flex h-[14px] w-full justify-between
                                    planSm:mb-0 planSm:h-[24px]
                                    md:flex-col md:items-center
                                    md:planSm:flex-row"
          >
            {props.wordsCount === 'безлимитно' ? (
              <span
                className="mb-[4px] font-TTNormsMedium leading-[14px] text-[#475467] dark:text-[#98A2B3] md:text-[12px]
                                        lg:text-[12px]
                                        xl:text-[14px]"
              >
                Без ограничений слов *
              </span>
            ) 
            : 
            props.planType === 'multiply' ?
            (
              <span
                className="mb-[4px] font-TTNormsMedium leading-[14px] text-[#475467] dark:text-[#98A2B3] md:text-[12px]
                                        lg:text-[12px]
                                        xl:text-[14px]"
              >
                {selectedMultiplyPlanButtonId === 1 ? changedWordsCount.toLocaleString() : (changedWordsCount/8).toLocaleString()} слов / месяц 
              </span>
            )
            :
            (
              <span
                className="mb-[4px] font-TTNormsMedium leading-[14px] text-[#475467] dark:text-[#98A2B3] md:text-[12px]
                                        lg:text-[12px]
                                        xl:text-[14px]"
              >
                {changedWordsCount.toLocaleString()} слов / месяц
              </span>
            )
          }
          </div>
        </div>
      )}

      <div
        className="flex w-full justify-between whitespace-pre-wrap md:mb-[8px] md:h-[55px] md:flex-col md:items-start
                            md:justify-start
                            md:planSm:mb-[8px] md:planSm:h-[40px] md:planSm:flex-row md:planSm:items-start md:planSm:justify-start
                            lg:mb-[16px] lg:h-[34px] lg:flex-row lg:items-center xl:mb-[20px]"
      >
        {props.sum === 0 ? (
          <span
            className="h-full font-NeueMachinaBold leading-[38px] text-[#101828] dark:text-[#F5F5F6] md:text-[20px]
                lg:text-[24px]
                xl:text-[30px]"
          >
            {props.sum.toLocaleString() + ' '}
            <span
              className="h-full font-NeueMachinaBold text-[30px] leading-[38px] text-[#101828]  dark:text-[#F5F5F6]
                                md:text-[20px]
                                lg:text-[24px]"
            >
              &#x20BD;
            </span>
          </span>
        ) : 
        props.planType === 'multiply' ?
        (
          <span
            className="h-full font-NeueMachinaBold leading-[38px] text-[#101828] dark:text-[#F5F5F6] md:text-[20px]
                                lg:text-[24px]
                                xl:text-[30px]"
          >
            {' ' + `${(props.sum * sliderValue).toLocaleString()}` + ' '}
            <span
              className="h-full font-NeueMachinaBold leading-[38px] text-[#101828] dark:text-[#F5F5F6]  md:text-[20px]
                                    lg:text-[24px]
                                    xl:text-[30px] "
            >
              &#x20BD;
              <span
                className="relative ml-[5px] h-full font-TTNormsMedium text-[#475467] dark:text-[#98A2B3] md:bottom-0.5 md:text-[14px] md:leading-[20px]
                                        lg:bottom-[5px] lg:text-[14px] lg:leading-[20px]"
              >
                {` /  месяц`}
              </span>
            </span>
          </span>
        )
          :
          (
            <span
            className="h-full font-NeueMachinaBold leading-[38px] text-[#101828] dark:text-[#F5F5F6] md:text-[20px]
                                lg:text-[24px]
                                xl:text-[30px]"
          >
            {' ' + props.sum.toLocaleString() + ' '}
            <span
              className="h-full font-NeueMachinaBold leading-[38px] text-[#101828] dark:text-[#F5F5F6]  md:text-[20px]
                                    lg:text-[24px]
                                    xl:text-[30px] "
            >
              &#x20BD;
              <span
                className="relative ml-[5px] h-full font-TTNormsMedium text-[#475467] dark:text-[#98A2B3] md:bottom-0.5 md:text-[14px] md:leading-[20px]
                                        lg:bottom-[5px] lg:text-[14px] lg:leading-[20px]"
              >
                {` /  месяц`}
              </span>
            </span>
          </span>
          )
        }

        {props.benefit > 0  && props.planType === 'simple' ? (
          <span
            className="h-full font-NeueMachinaMedium text-[15px] text-[#667085] line-through dark:text-[#85888E] md:ml-[6px]
                                    md:leading-[11px] md:planSm:leading-[40px] 
                                    lg:leading-[42px]"
          >
            {props.benefit}
          </span>
        ) 
        : 
        props.benefit > 0  && props.planType === 'multiply' ?
        (
          <span
            className="h-full font-NeueMachinaMedium text-[15px] text-[#667085] line-through dark:text-[#85888E] md:ml-[6px]
                                    md:leading-[11px] md:planSm:leading-[40px] 
                                    lg:leading-[42px]"
          >
            {`${(props.benefit * sliderValue).toLocaleString()}`}
          </span>
        )
        :
        (
          ''
        )}
      </div>
    </div>
  )
}
