'use client'

import {memo, useCallback, useState} from 'react'
import {ToggleButton} from './ToggleButton'

export const PayToggle = memo(function PayToggle(props: {
  callBack: (togglerNum : number) => void
}) {

  const [selectedToggle, setSelectedToggle] = useState<number>(1);

  const handleChangeToggle = useCallback(() => {
    
    setSelectedToggle(selectedToggle === 1 ? 2 : 1)
    props.callBack(selectedToggle === 1 ? 2 : 1)
  },[selectedToggle])

  // const selectedToggleButtonId = 1
  const toggleButtons = [{id: 1}, {id: 2}]
  return (
    <div
      className="flex w-[357px] items-center justify-between vsm:w-[305px] lg:mt-[12px]
                        lg:h-[23px] xl:mt-[0px]
                        xl:h-[44px]"
    >
      <span
        className="font-TTNormsMedium leading-[20px] text-[#2D384B] dark:text-[#94969C] md:text-[12px]
                            lg:text-[14px]"
      >
        Ежемесячно
      </span>
      <div
        className="flex h-[20px] w-[36px] items-center rounded-[1000px] bg-[#0B3BEC] p-[2px] dark:bg-[#155EEF]
            vsm:h-[14px] vsm:w-[26px] vsm:p-[1px]"
        onClick={() => handleChangeToggle()}
      >
        {toggleButtons.map((t) => {
          return <ToggleButton activeBtnId={selectedToggle} id={t.id} key={t.id} />
        })}
      </div>
      <span
        className="font-TTNormsMedium leading-[20px] text-[#2D384B] dark:text-[#94969C] md:text-[12px]
                            lg:text-[14px]"
      >
        Ежегодно
      </span>
      <span
        className="font-TTNormsBold leading-[9px] text-[#101828] dark:text-[#F5F5F6] md:text-[11px]
                            lg:text-[12px]"
      >
        СЭКОНОМЬТЕ ДО 33%
      </span>
    </div>
  )
})
