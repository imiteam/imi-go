'use client'

import {Button} from '../../../../common/UIkit/button'
import {signOut} from 'next-auth/react'
import ProfileOkButton from '../buttons/ProfileOkButton'
import ProfileCancelButton from '../buttons/ProfileCancelButton'
import { PasswordInput } from './PasswordInput'


export default function Authorization() {
  return (
    <div
      className="h-[271px] w-full rounded-[20px] bg-[#FFFFFF] dark:bg-[#21242C] md:h-auto md:px-[20px]
                        md:py-[16px] lg:px-[24px]
                        lg:py-[20px] xl:px-[32px] xl:py-[24px]
                        "
    >
      <span
        className="block w-full border-b border-[#DAE3E9] text-[#101828] dark:border-[#17181C] dark:text-[#F5F5F6] md:mb-[16px] md:h-[33px] md:font-TTNormsBold md:text-[18px] md:leading-[30px]
                            lg:mb-[20px] lg:h-[40px] lg:font-TTNormsBold lg:text-[20px] lg:leading-[30px]
                            xl:mb-[24px] xl:h-[45px] xl:font-NeueMachinaBold xl:text-[24px] xl:leading-[32px]"
      >
        Авторизация
      </span>
      <div
        className="flex h-[69px] w-full justify-between
                            md:h-[142px] md:flex-col
                            md:sm:h-[65px] md:sm:flex-row
                            md:sm:vsm:h-auto md:sm:vsm:flex-col"
      >
        <PasswordInput password="Новый пароль" title="Новый пароль" marginR="12" />
        <PasswordInput password="Текущий пароль" title="Текущий пароль" marginR="0" />
      </div>
      <div
        className="mt-[20px] flex h-[65px] w-full items-end justify-start border-t border-[#DAE3E9] dark:border-[#17181C]
                            md:mt-[28px] md:h-[57px] 
                            md:sm:mt-[17px]"
      >
        <ProfileOkButton icon="ok" title="Обновить пароль" />
        <ProfileCancelButton title="Отмена" />
        <Button
          className="ml-2 w-auto px-4 py-5 "
          onClick={() => signOut({callbackUrl: '/auth/sign-in', redirect: true})}
        >
          Выход
        </Button>
      </div>
    </div>
  )
}
