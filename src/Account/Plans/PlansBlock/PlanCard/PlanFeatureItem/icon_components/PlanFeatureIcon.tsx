"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const PlanFeatureIcon = memo(function PlanFeatureIcon(props : {
    isActive : boolean
}){

    const {theme} = useTheme()

    return (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[22px] md:mr-[8px] lg:mr-[10px]"
        >
          <path
            d="M6.5 11L9.5 14L15.5 8M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
            stroke={!props.isActive ? '#98A2B3' : theme === 'light' ? '#0B3BEC' : '#155EEF'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
})