'use client'
import Link from 'next/link'
import {SupportIcon} from '../SupportIcon'
type mockSupportDataType = {
    id: number
    icon: string
    title: string
    description: string
    event: {
      title: string
      icon: string
    }
  }
  
export default function SupportCard({data}: {data: mockSupportDataType}) {
  return (
    <div
      key={data.id}
      className="flex flex-col items-start rounded-[20px]  bg-[#FFFFFF] dark:bg-[#21242C] md:h-[183px]
                            md:w-1/3 md:p-[16px] md:px-3.5
                            md:vsm:h-[163px] md:vsm:w-full md:vsm:px-5 md:planSm:min-w-[200px]
                            md:planSm:grow lg:h-[222px]
                            lg:w-1/3 lg:p-[24px] xl:h-[236px]"
    >
      <div className="h-auto w-full md:mb-[28px] md:vsm:mb-[12px] lg:mb-[40px] xl:mb-[48px]">
        <SupportIcon icon={data.icon} />
      </div>
      <span
        className="font-TTNormsMedium text-[#101828] dark:text-[#F5F5F6] md:pb-[15px] md:text-[16px] md:leading-[19px]
                                lg:pb-[10px] lg:text-[18px] lg:leading-[28px]
                                xl:pb-[5px] xl:text-[20px] xl:leading-[30px]"
      >
        {data.title}
      </span>
      <span
        className="mb-[24px] font-TTNormsRegular text-[#475467] dark:text-[#98A2B3] md:text-[12px] md:leading-[14px]
                                lg:text-[14px] lg:leading-[16px]
                                xl:text-[16px] xl:leading-[19px]"
      >
        {data.description}
      </span>
      <Link href={'www.youtube.com'} className="flex w-full items-center gap-3">
        <span
          className="font-TTNormsMedium text-[#0B3BEC] dark:text-[#155EEF] md:text-[14px] md:leading-[14px]
                                  lg:text-[14px] lg:leading-[14px]
                                  xl:text-[16px] xl:leading-[19px]
                                  "
        >
          {data.event.title}
        </span>
        <SupportIcon icon="arrow" />
      </Link>
    </div>
  )
}
