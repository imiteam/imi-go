"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const PlayMessageIcon = memo(function PlayMessageIcon(props : {
    callBack?: () => void
}){

    const {theme} = useTheme()

    return (
        <svg
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // id="aiMessageIcon" TODO: turn on in second iteration
        >
          <path
            d="M9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337Z"
            stroke={theme === 'light' ? '#0B3BEC' : '#155EEF'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.9165 7.47144C7.9165 7.0737 7.9165 6.87483 7.99962 6.76381C8.07206 6.66705 8.18293 6.60652 8.30349 6.59791C8.44182 6.58803 8.60911 6.69557 8.94368 6.91065L12.8775 9.43954C13.1678 9.62618 13.313 9.71949 13.3631 9.83815C13.4069 9.94183 13.4069 10.0588 13.3631 10.1625C13.313 10.2812 13.1678 10.3745 12.8775 10.5611L8.94368 13.09C8.60911 13.3051 8.44182 13.4126 8.30349 13.4027C8.18293 13.3941 8.07206 13.3336 7.99962 13.2368C7.9165 13.1258 7.9165 12.927 7.9165 12.5292V7.47144Z"
            stroke={theme === 'light' ? '#0B3BEC' : '#155EEF'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
})