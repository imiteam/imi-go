"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const ChatMenuIcon = memo(function ChatMenuIcon(){

    const {theme} = useTheme()

    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.3335 7.08301H16.6668M3.3335 12.9163H13.3335"
            stroke={theme === 'light' ? '#2D384B' : '#CECFD2'}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
})