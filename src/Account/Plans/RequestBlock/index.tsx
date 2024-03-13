'use client'

import {RequestButton} from './RequestButton'

export const RequestBlock = () => {
  return (
    <div className=" planSm:h-[195px] planSm:w-full planSm:px-[80px] planSm:vsm:px-[0px] ">
      <div
        className="flex w-full items-center justify-between rounded-[20px] bg-[#FFFFFF] dark:bg-[#21242C] md:mb-[8px] md:h-[195px] md:flex-col
                        md:p-[24px] md:pt-[20px]
                        lg:mb-[12px] lg:h-[124px] lg:px-[24px] lg:py-[20px] xl:p-[32px]
                        "
      >
        <div
          className="flex w-auto flex-col justify-center md:h-[47px]
                            lg:h-full"
        >
          <span
            className="text-[#101828] dark:text-[#F5F5F6] md:font-TTNormsBold md:text-[18px] md:leading-[28px]
                                md:vsm:text-center md:vsm:text-[14px] md:vsm:leading-[18px]
                                lg:font-TTNormsBold lg:text-[20px] lg:leading-[30px]
                                xl:font-NeueMachinaBold xl:text-[24px] xl:leading-[32px]"
          >
            Хотите индивидуальный тариф?
          </span>
          <span
            className="text-[#667085] dark:text-[#85888E] md:text-center md:font-TTNormsRegular md:text-[16px]
                                md:leading-[28px] md:vsm:text-center md:vsm:text-[14px]
                                md:vsm:leading-[18px] lg:font-TTNormsRegular lg:text-[18px] lg:leading-[28px]
                                xl:font-NeueMachinaMedium xl:text-[19px] xl:leading-[18px]"
          >
            Начинаются от 25 000 ₽ / месяц
          </span>
        </div>
        <span
          className="block font-TTNormsRegular text-[#101828] dark:text-[#F5F5F6] md:w-[310px] md:text-center md:text-[14px]
                             md:leading-[20px] md:vsm:text-[13px] md:vsm:leading-[18px]
                             lg:w-[310px] lg:text-[16px] lg:leading-[19px] xl:w-[385px]
                             xl:text-[20px] xl:leading-[24px]"
        >
          Оставьте заявку и мы свяжемся с вами для составления индивидуального плана
        </span>
        <RequestButton />
      </div>
    </div>
  )
}
