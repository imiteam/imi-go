"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const ScrollToEndIcon = memo(function ScrollToEndIcon(){

    const {theme} = useTheme()

    return (
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.833496 6.83333L5.00016 11L9.16683 6.83333M0.833496 1L5.00016 5.16667L9.16683 1"
            stroke={theme === 'light' ? '#2D384B' : '#CECFD2'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
})