"use client"

import { useTheme } from "next-themes"


export const ReplaceProfileIcon = function ReplaceProfileIcon(){

  const {theme} = useTheme()

  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-[6px]"
    >
      <path
        d="M7.99984 17.084C11.9119 17.084 15.0832 13.9127 15.0832 10.0007C15.0832 7.64604 13.9343 5.55976 12.1665 4.27182M8.83317 18.6673L7.1665 17.0007L8.83317 15.334M7.99984 2.91732C4.08782 2.91732 0.916504 6.08863 0.916504 10.0007C0.916504 12.3553 2.06539 14.4415 3.83317 15.7295M7.1665 4.66732L8.83317 3.00065L7.1665 1.33398"
        stroke={theme === 'light' ? '#2D384B' : '#CECFD2'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}