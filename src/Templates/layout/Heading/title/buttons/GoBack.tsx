"use client"
import { Button } from "common/UIkit/button"
import { useTheme } from "next-themes"
import { memo } from "react"

export const GoBack = memo(function GoBack(props: {
    callBack: () => void
}){

    const {theme} = useTheme()

    return (
        <Button variant={'back'} size="back" onClick={() => props.callBack()}>
            {
            theme === 'light' ? (
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.6666 6H1.33325M1.33325 6L6.33325 11M1.33325 6L6.33325 1"
                    stroke="#2D384B"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            ) : theme === 'dark' ? (
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.6666 6H1.33325M1.33325 6L6.33325 11M1.33325 6L6.33325 1"
                    stroke="#CECFD2"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            ) : (
                ''
            )
            }
        </Button>
    )})

