"use client"

import { useTheme } from "next-themes"
import { memo } from "react"


export const ThemeLightIcon = memo(function ThemeLightIcon(){

    const {theme} = useTheme()

    return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[8px]"
        >
          <path
            d="M10.0001 1.66602V3.33268M10.0001 16.666V18.3327M3.33341 9.99935H1.66675M5.26184 5.26111L4.08333 4.0826M14.7383 5.26111L15.9168 4.0826M5.26184 14.741L4.08333 15.9195M14.7383 14.741L15.9168 15.9195M18.3334 9.99935H16.6667M14.1667 9.99935C14.1667 12.3005 12.3013 14.166 10.0001 14.166C7.6989 14.166 5.83341 12.3005 5.83341 9.99935C5.83341 7.69816 7.6989 5.83268 10.0001 5.83268C12.3013 5.83268 14.1667 7.69816 14.1667 9.99935Z"
            stroke={theme === 'light' ? '#2D384B' : '#CECFD2'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
})