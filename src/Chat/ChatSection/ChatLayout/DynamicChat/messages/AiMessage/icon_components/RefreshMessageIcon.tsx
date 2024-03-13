"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const RefreshMessageIcon = memo(function RefreshMessageIcon(props : {
    callBack?: () => void
}){

    const {theme} = useTheme()

    return (
        <svg
          width="12.5"
          height="12.5"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="aiMessageIcon"
        >
          <path
            d="M15.0443 8.7439C14.8128 10.9188 13.5805 12.9569 11.5413 14.1342C8.15342 16.0902 3.82132 14.9295 1.86531 11.5415L1.65698 11.1807M0.95527 7.25553C1.18677 5.08062 2.4191 3.04252 4.45825 1.86521C7.84616 -0.0907998 12.1783 1.06998 14.1343 4.45789L14.3426 4.81873M0.911133 13.0547L1.52118 10.778L3.79788 11.3881M12.2022 4.61137L14.4789 5.22141L15.0889 2.9447"
            stroke={theme === 'light' ? '#0B3BEC' : '#155EEF'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
})