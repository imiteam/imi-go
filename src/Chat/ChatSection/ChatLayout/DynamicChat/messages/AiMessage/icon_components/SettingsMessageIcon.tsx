"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const SettingsMessageIcon = memo(function SettingsMessageIcon(props : {
    callBack?: () => void
}){

    const {theme} = useTheme()

    return (
        <svg width="4" height="13" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="aiMessageIcon">
          <path
            d="M1.99984 8.83301C2.46007 8.83301 2.83317 8.45991 2.83317 7.99967C2.83317 7.53944 2.46007 7.16634 1.99984 7.16634C1.5396 7.16634 1.1665 7.53944 1.1665 7.99967C1.1665 8.45991 1.5396 8.83301 1.99984 8.83301Z"
            stroke={theme === 'light' ? '#0B3BEC' : '#155EEF'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.99984 2.99967C2.46007 2.99967 2.83317 2.62658 2.83317 2.16634C2.83317 1.7061 2.46007 1.33301 1.99984 1.33301C1.5396 1.33301 1.1665 1.7061 1.1665 2.16634C1.1665 2.62658 1.5396 2.99967 1.99984 2.99967Z"
            stroke={theme === 'light' ? '#0B3BEC' : '#155EEF'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.99984 14.6663C2.46007 14.6663 2.83317 14.2932 2.83317 13.833C2.83317 13.3728 2.46007 12.9997 1.99984 12.9997C1.5396 12.9997 1.1665 13.3728 1.1665 13.833C1.1665 14.2932 1.5396 14.6663 1.99984 14.6663Z"
            stroke={theme === 'light' ? '#0B3BEC' : '#155EEF'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
})