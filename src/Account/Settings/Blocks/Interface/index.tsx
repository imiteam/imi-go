'use client'
import ru from '../../../../../public/assets/ru.svg'
import {
  TemplateSelect,
  TemplateSelectContent,
  TemplateSelectGroup,
  TemplateSelectItem,
  TemplateSelectTrigger,
  TemplateSelectValue,
} from '../../../../common/UIkit/templateSelect'
import {useTheme} from 'next-themes'
import Image from 'next/image'
import {useLayoutEffect, useState} from 'react'
import { ThemeLightIcon } from './icon_components/ThemeDarkIcon'
import { ThemeDarkIcon } from './icon_components/ThemeLightIcon'
import ProfileOkButton from '../buttons/ProfileOkButton'
import ProfileCancelButton from '../buttons/ProfileCancelButton'

export const Interface = function Interface() {
  const {theme, setTheme} = useTheme()

  const [selectedValue, setSelectedValue] = useState<string>('1')

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
    switch (value) {
      case '1':
        setTheme('light')
        break
      case '2':
        setTheme('dark')
        break
    }
  }

  useLayoutEffect(() => {
    theme === 'dark' ? setSelectedValue('2') : setSelectedValue('1')
  }, [theme])
  return (
    <div
      className=" mb-[20px] flex h-[271px] w-full flex-col rounded-[20px] bg-[#FFFFFF] dark:bg-[#21242C] md:mb-[12px] md:h-auto
                        md:px-[20px] md:py-[16px]
                        lg:px-[24px] lg:py-[20px] xl:px-[32px] xl:py-[24px]"
    >
      <span
        className="block w-full border-b border-[#DAE3E9] text-[#101828] dark:border-[#17181C] dark:text-[#F5F5F6] md:mb-[7px] md:h-[33px] md:font-TTNormsBold md:text-[18px] md:leading-[30px]
                            lg:mb-[20px] lg:h-[40px] lg:font-TTNormsBold lg:text-[20px] lg:leading-[30px]
                            xl:mb-[24px] xl:h-[45px] xl:font-NeueMachinaBold xl:text-[24px] xl:leading-[32px]"
      >
        Интерфейс
      </span>
      <div
        className="flex h-[69px] w-full justify-between 
                            md:h-auto md:flex-col
                            md:sm:flex-row
                            md:sm:vsm:flex-col"
      >
        <div
          className="flex h-full flex-col justify-between sm:mr-[12px] sm:h-[64px]
                                sm:w-1/2 sm:vsm:w-full
                                md:mb-[12px]
                                lg:mr-[12px] lg:w-1/2 xl:m-0
                                xl:w-[261px]"
        >
          <span
            className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                            dark:text-template-item-text-dark 
                              md:mb-[8px] md:text-[14px]"
          >
            Язык интерфейса
          </span>
          <TemplateSelect defaultValue="defaultOption" disabled>
            <TemplateSelectTrigger
              className="h-[44px] w-full rounded-[12px] font-TTNormsMedium text-[16px] leading-[19px] text-heading-text-lite
                                        dark:text-heading-text-dark
                                        md:text-[14px]"
            >
              <TemplateSelectValue placeholder="язык" />
            </TemplateSelectTrigger>
            <TemplateSelectContent className="">
              <TemplateSelectGroup>
                <TemplateSelectItem value="defaultOption" style={{display: 'flex'}}>
                  <div className="flex items-center  md:text-[14px]">
                    {/* <Image src={ru} width={20} height={20} alt="ru" className="mr-[8px]" /> */}
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-[8px]"
                    >
                      <g clip-path="url(#clip0_11746_23743)">
                        <path
                          d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z"
                          fill="white"
                        />
                        <path
                          d="M19.3783 13.978C19.7802 12.8946 20.0002 11.7229 20.0002 10.4997C20.0002 9.27652 19.7802 8.1048 19.3783 7.02148H0.622236C0.220283 8.1048 0.000244141 9.27652 0.000244141 10.4997C0.000244141 11.7229 0.220283 12.8946 0.622236 13.978L10.0002 14.8475L19.3783 13.978Z"
                          fill="#0052B4"
                        />
                        <path
                          d="M10.0003 20.4993C14.3 20.4993 17.9654 17.7856 19.3783 13.9775H0.622314C2.03524 17.7856 5.70067 20.4993 10.0003 20.4993Z"
                          fill="#D80027"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11746_23743">
                          <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Русский</span>
                  </div>
                </TemplateSelectItem>
                <TemplateSelectItem value="Английский" style={{display: 'flex'}}>
                  <div className="flex items-center  md:text-[14px]">
                    <Image src={ru} width={20} height={20} alt="ru" className="mr-[8px]" />
                    <span>Английский</span>
                  </div>
                </TemplateSelectItem>
              </TemplateSelectGroup>
            </TemplateSelectContent>
          </TemplateSelect>
        </div>
        <div
          className="flex h-full flex-col justify-between sm:h-[64px]
                                sm:w-1/2
                                sm:vsm:w-full lg:w-1/2
                                xl:w-[261px]"
        >
          <span
            className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                            dark:text-template-item-text-dark 
                            md:mb-[8px] md:text-[14px]"
          >
            Тема оформления
          </span>
          <TemplateSelect defaultValue="1" onValueChange={handleValueChange} value={selectedValue}>
            <TemplateSelectTrigger
              className="h-[44px] w-full rounded-[12px] font-TTNormsMedium text-[16px] leading-[19px] text-heading-text-lite
                                       dark:text-heading-text-dark
                                       md:text-[14px]"
            >
              <TemplateSelectValue placeholder="тема" />
            </TemplateSelectTrigger>
            <TemplateSelectContent className="">
              <TemplateSelectGroup>
                <TemplateSelectItem value="1" style={{display: 'flex'}}>
                  <div className="flex items-center  md:text-[14px]">
                    <ThemeLightIcon/>
                    <span>Светлая тема</span>
                  </div>
                </TemplateSelectItem>
                <TemplateSelectItem value="2" style={{display: 'flex'}}>
                  <div className="flex items-center  md:text-[14px]">
                    <ThemeDarkIcon/>
                    <span>Темная тема</span>
                  </div>
                </TemplateSelectItem>
              </TemplateSelectGroup>
            </TemplateSelectContent>
          </TemplateSelect>
        </div>
      </div>
      <div
        className="mt-[20px] flex h-[65px] w-full items-end justify-start border-t border-[#DAE3E9] dark:border-[#17181C]
                            md:mt-[15px] md:h-[57px]"
      >
        <ProfileOkButton icon="ok" title="Сохранить" />
        <ProfileCancelButton title="Отмена" />
      </div>
    </div>
  )
}
