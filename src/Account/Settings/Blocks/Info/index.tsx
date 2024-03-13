'use client'
import { memo } from 'react'
import ProfileCancelButton from '../buttons/ProfileCancelButton'
import ProfileOkButton from '../buttons/ProfileOkButton'
import Input from './Input'
import { Email } from './Email'
import ProfileImage from './ProfileImage'

export const Info =  memo(function Info({
  firstName,
  // lastName,
  email,
  src,
}: {
  firstName: string | null | undefined
  // lastName: string
  email: string | null | undefined
  src: string | null | undefined
}) {
  const name = firstName?.split(' ')
  return (
    <div
      className=" flex w-1/2 flex-col rounded-[20px] bg-[#FFFFFF] dark:bg-[#21242C] sm:mb-[26px]  sm:w-full md:h-[536px]
                        md:px-[20px] md:py-[16px] md:sm:h-auto
                        lg:h-[499px] lg:px-[24px] lg:py-[20px]
                        xl:h-[521px] xl:px-[32px] xl:py-[24px]"
    >
      <span
        className="block w-full border-b border-[#DAE3E9] text-[#101828] dark:border-[#17181C] dark:text-[#F5F5F6] md:mb-[7px] md:h-[33px] md:font-TTNormsBold md:text-[18px] md:leading-[30px]
                            md:sm:mb-[16px] lg:mb-[20px] lg:h-[40px] lg:font-TTNormsBold lg:text-[20px]
                            lg:leading-[30px] xl:mb-[24px] xl:h-[45px] xl:font-NeueMachinaBold xl:text-[24px]
                            xl:leading-[32px]"
      >
        Личная информация
      </span>
      <div
        className="mb-[20px] flex h-[69px] w-full justify-between
                            md:h-[150px] md:flex-col
                            md:sm:h-[65px] md:sm:flex-row
                            md:sm:vsm:h-auto md:sm:vsm:flex-col"
      >
        <Input data={name ? name[0] : 'не указано'} title="Имя" marginR="12" />
        <Input data={name ? name[1] : 'не указана'} title="Фамилия" />
      </div>
      <Email data={email!} />
      <ProfileImage src={src!} />
      <div
        className="flex h-[65px] w-full items-end justify-start border-t border-[#DAE3E9] dark:border-[#17181C] 
                            sm:h-[57px]"
      >
        <ProfileOkButton icon="ok" title="Сохранить" />
        <ProfileCancelButton title="Отмена" />
      </div>
    </div>
  )
})
