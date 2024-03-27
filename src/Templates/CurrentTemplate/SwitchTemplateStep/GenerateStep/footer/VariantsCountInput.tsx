'use client'
import arrow from '../../../../../../public/assets/arrow.svg'
import Image from 'next/image'
import { memo } from 'react'
type VariantsCountInputPropsType = {
  variantsCount: number
  incrementCount: () => void
  decrementCount: () => void
}

export const VariantsCountInput = memo(function VariantsCountInput(props: VariantsCountInputPropsType) {
  return (
    <div className="mx-[16px] flex h-[44px] w-[173px] items-center justify-between rounded-[12px] bg-bg-lite px-[16px] py-[12px] dark:bg-bg-dark">
      <div className="flex h-[44px]  w-[60px] items-center">
        <span className="mr-[4px] h-[19px] w-[22px] font-TTNormsRegular text-[16px] leading-[19px] text-[#2D384B] dark:text-[#94969C]">
          {props.variantsCount}
        </span>
        <div className="mr-[12px] flex size-[20px] flex-col items-center justify-between p-[2px]">
          <Image
            src={arrow}
            alt="arrowTop"
            width={10}
            height={10}
            className="rotate-180 cursor-pointer"
            onClick={props.incrementCount}
          />
          <Image
            src={arrow}
            alt="arrowTop"
            width={10}
            height={10}
            className="cursor-pointer"
            onClick={props.decrementCount}
          />
        </div>
      </div>
      <span className="text-right font-TTNormsRegular text-[16px] leading-[19px] text-[#2D384B] dark:text-[#94969C]">
        Вариантов
      </span>
    </div>
  )
}
)