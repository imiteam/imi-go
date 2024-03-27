"use client"

import { Button } from "common/UIkit/button"
import { memo } from "react"

export const Item = memo(function Item(props: {
    title: string
    callBack: () => void
    children: React.ReactNode
}){
    return (
        <Button variant={'answerDropdownItem'} size="answerDropdownItem" onClick={() => props.callBack()}>
            {props.children}
            <span>{props.title}</span>
        </Button>
    )
}
)