"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const OkIcon = memo(function OkIcon() {

    return (
        <svg
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[6px]"
        >
          <path
            d="M14.6666 1L5.49992 10.1667L1.33325 6"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
    )
})