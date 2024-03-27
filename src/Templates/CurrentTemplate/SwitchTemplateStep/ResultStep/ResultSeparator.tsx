"use client"

import { memo } from "react"

export const ResultSeparator = memo(function ResultSeparator() {
    return (
      <div className="w-fill my-[8px] flex h-[24px] items-center">
        <div className="bg:text-[#155EEF] h-[1px] w-auto grow bg-[#0B3BEC] align-middle"></div>
        <span className="mx-[8px] font-TTNormsMedium text-[14px] leading-[14px] text-[#0B3BEC] dark:text-[#155EEF]">
          Предыдущие генерации
        </span>
        <div className="bg:text-[#155EEF] h-[1px] w-auto grow bg-[#0B3BEC] align-middle"></div>
      </div>
    )
  }
)
  