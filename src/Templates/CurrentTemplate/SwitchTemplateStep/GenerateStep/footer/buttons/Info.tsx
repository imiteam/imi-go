"use client"

import { useTheme } from "next-themes"
import { Button } from "../../../../../../common/UIkit/button"
import { memo } from "react"

export const Info = memo(function Info(){

    const {theme} = useTheme()

    return (
        <Button
            variant={'tempSidebarInfo'}
            size="tempSidebarInfo"
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.99992 16.6667V7.5M9.99992 16.6667H8.33325M9.99992 16.6667H11.6666"
                    stroke={theme === 'light' ? '#2D384B' : '#CECFD2'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 4.16699C10 4.16699 10.0051 4.16699 10.0083 4.16699"
                    stroke={theme === 'light' ? '#2D384B' : '#CECFD2'}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Button>
    )
})