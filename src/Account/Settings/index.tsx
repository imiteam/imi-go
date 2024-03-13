'use client'

import {useSession} from 'next-auth/react'
import {Fragment} from 'react'
import { Info } from './Blocks/Info'
import { Interface } from './Blocks/Interface'

export const SettingsPage = function SettingsPage() {

  const {data: session} = useSession()

  if (session) {
    return (
      <Fragment>
        <div className="flex size-full vsm:px-[16px] sm:flex-col">
          <div className="mr-[20px] flex w-1/2 flex-col sm:w-full md:mr-[12px] md:h-[618px] md:sm:mb-[12px] md:sm:mr-[0px] md:sm:h-auto lg:h-[518px] xl:h-[568px]">
            <Interface />
            {/* раскомментить когда будете вводить смену пароля */}
            {/* <Authorization /> */}
            <div
              className="h-[271px] w-full rounded-[20px] bg-[#FFFFFF] dark:bg-[#21242C] sm:hidden
                                  md:px-[20px] md:py-[16px]
                                  lg:px-[24px] lg:py-[20px] xl:px-[32px]
                                  xl:py-[24px]"
            ></div>
          </div>
          <Info
            firstName={session?.user?.name}
            email={session?.user?.email}
            src={session?.user?.image}
          />
        </div>
      </Fragment>
    )
  }
}