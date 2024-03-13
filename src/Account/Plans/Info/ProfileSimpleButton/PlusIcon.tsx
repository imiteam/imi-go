"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const PlusIcon = memo(function PlusIcon(){

    const {theme} = useTheme()

    return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[6px]"
        >
          <path
            d="M6.99984 1.16602V12.8327M1.1665 6.99935H12.8332"
            stroke={theme === 'light' ? '#0B3BEC' : '#155EEF'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
})