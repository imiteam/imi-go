'use client'

import {memo} from 'react'

export const PlanCardHeader = memo(function PlanCardHeader(props: {
  title: string
  sale?: number
  presentation: string
}) {
  return (
    <div
      className="flex w-full flex-col md:mb-[8px] md:h-[65px] md:justify-start
                          md:planSm:h-[45px]
                          lg:mb-[16px] lg:h-[52px] lg:justify-between
                          xl:mb-[20px]"
    >
      <div className="flex w-full items-center">
        <span
          className="text-[#101828] dark:text-[#F5F5F6] md:font-TTNormsMedium md:text-[20px] md:leading-[30px]
                                  md:planSm:text-[18px] md:planSm:leading-[28px] lg:font-TTNormsMedium
                                  lg:text-[20px] lg:leading-[30px] xl:font-NeueMachinaMedium
                                  xl:text-[24px] xl:leading-[32px]"
        >
          {props.title}
        </span>
        {props.sale === 0 ? (
          ''
        ) : (
          <div
            className="ml-[8px] flex items-center justify-center rounded-[10px] bg-[#101828] dark:bg-[#FFFFFF] md:h-[22px] md:w-[45px]
                                      lg:h-[22px] lg:w-[45px]
                                      xl:h-[26px] xl:w-[54px]"
          >
            <span
              className="font-TTNormsMedium leading-[14px] text-[#FFFFFF] dark:text-[#000000] md:text-[12px]
                                          lg:text-[12px]
                                          xl:text-[14px]"
            >
              -{props.sale}%
            </span>
          </div>
        )}
      </div>

      <span
        className="font-TTNormsRegular text-[#2D384B]  dark:text-[#94969C] md:text-[12px] md:leading-[18px]
                              lg:text-[12px]  lg:leading-[18px]
                              xl:text-[14px]  xl:leading-[20px]"
      >
        {props.presentation}
      </span>
    </div>
  )
})
