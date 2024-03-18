'use client'

import {memo} from 'react'
import {BuyPackageButton} from './BuyPackageButton'

export const PackageCard = memo(function PackageCard(props: {
  userId: string
  wordsCount: number
  sum: number
  benefit: number
  symbol: number
  pic: number
  partSum: number
  isSubscriber: boolean | null
  paymentFetchObj : {
    amount : number,
    description : string,
    metadata : {
      plan : string,
      tokens : number,
      yearly: boolean
    }
  }
}) {
  return (
    <div
      className="flex h-[265px] w-[251px] flex-col rounded-[16px] border border-[#D0D5DD] p-[20px] pb-[24px] dark:border-[#333741]
        planSm:h-[258px] planSm:w-[229px]
        planSm:vsm:w-full"
    >
      <span
        className="whitespace-pre-wrap font-TTNormsMedium text-[20px] leading-[30px] text-[#0B3BEC] dark:text-[#155EEF]
            planSm:text-[18px] planSm:leading-[28px]"
      >
        {props.wordsCount.toLocaleString() + ' слов'}
      </span>
      <span
        className="my-[8px] whitespace-pre-wrap font-NeueMachinaBold text-[30px] leading-[38px] text-[#101828] dark:text-[#F5F5F6]
            planSm:text-[24px] planSm:leading-[32px]"
      >
        {props.sum} &#x20BD;
        <span className="ml-[15px] h-full font-NeueMachinaMedium text-[15px] leading-[42px] text-[#667085] line-through dark:text-[#85888E]">
          {props.benefit.toLocaleString()} &#x20BD;
        </span>
      </span>
      <span className="whitespace-pre-wrap font-TTNormsRegular text-[14px] leading-[20px] text-[#0B3BEC] dark:text-[#155EEF]">
        {props.symbol.toLocaleString() + '  '}
        <span className="text-[#475467] dark:text-[#98A2B3]">символов</span>
      </span>
      <span className="whitespace-pre-wrap font-TTNormsRegular text-[14px] leading-[20px] text-[#0B3BEC] dark:text-[#155EEF]">
        {props.pic.toLocaleString() + '  '}
        <span className="text-[#475467] dark:text-[#98A2B3]">изображений</span>
      </span>
      <BuyPackageButton packagePayDataType={props.paymentFetchObj} userId={props.userId} isSubscriber={props.isSubscriber}/>
      <span
        className="font-TTNormsMedium text-[16px] leading-[19px] text-[#101828] dark:text-[#F5F5F6]
            planSm:text-[14px] planSm:leading-[14px]"
      >
        {props.partSum} ₽ за тысячу слов
      </span>
    </div>
  )
})
