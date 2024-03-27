"use client"

import { memo } from "react"
import ResultItem from "./ResultItem"

export const ResultStep = memo(function ResultStep({resultArray}: {resultArray: Array<string>}) {
    const isSolidResult = resultArray.length > 1
    const lastIndex = resultArray.length - 1
    return (
        <div className="flex w-full grow flex-col justify-start px-[24px] py-[20px]">
        {resultArray.map((r, index) => {
            return <ResultItem key={index} title={r} index={index} isSolidResult={isSolidResult} lastIndex={lastIndex} />
        })}
        </div>
    )
}
)