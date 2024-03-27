"use client"

import { memo } from "react"
import { EditTitle } from "./buttons/EditTitle"
import { GoBack } from "./buttons/GoBack"

export const Title = memo(function Title(props : {
    title: string
}) {
    return (
        <div className="flex items-center">
            <GoBack callBack={() => {}}/>
            <span className="mr-[4px] font-NeueMachinaBold text-[24px] leading-[32px] text-heading-text-lite dark:text-heading-text-dark">
                Новый документ
            </span>
            <EditTitle/>
        </div>
    )
})