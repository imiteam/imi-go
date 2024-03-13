"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const OpenChatSettsIcon = memo(function OpenChatSettsIcon(props : {
    callBack : () => void
}){

    const {theme} = useTheme()

    return (
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => props.callBack()}
        >
          <path
            d="M1.5 3.66699L11.5 3.66699M11.5 3.66699C11.5 5.0477 12.6193 6.16699 14 6.16699C15.3807 6.16699 16.5 5.0477 16.5 3.66699C16.5 2.28628 15.3807 1.16699 14 1.16699C12.6193 1.16699 11.5 2.28628 11.5 3.66699ZM6.5 10.3337L16.5 10.3337M6.5 10.3337C6.5 11.7144 5.38071 12.8337 4 12.8337C2.61929 12.8337 1.5 11.7144 1.5 10.3337C1.5 8.95295 2.61929 7.83366 4 7.83366C5.38071 7.83366 6.5 8.95295 6.5 10.3337Z"
            stroke={theme === 'light' ? '#2D384B' : '#CECFD2'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
})