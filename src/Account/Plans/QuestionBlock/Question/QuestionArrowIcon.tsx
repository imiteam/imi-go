"use client"
import { memo } from "react"

export const QuestionArrowIcon = memo(function QuestionArrowIcon(props : {
    isActive: boolean,
    callBack: () => void
}){
    const translate = props.isActive ? '180' : '0'
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`rotate-${translate} cursor-pointer`}
          onClick={() => props.callBack()}
        >
          <path
            d="M8 1V15M8 15L15 8M8 15L1 8"
            stroke={props.isActive ? '#0B3BEC' : '#98A2B3'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
})

