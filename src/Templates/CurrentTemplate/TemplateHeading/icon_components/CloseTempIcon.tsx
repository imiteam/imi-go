"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const CloseTempIcon = memo(function CloseTempIcon(props: {
    callBack: () => void
}){
    const {theme} = useTheme()
        return (
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => props.callBack()}
                >
                <path
                    d="M11 1L1 11M1 1L11 11"
                    stroke={theme === 'light' ? '#98A2B3' : '#667085'}
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        )
})