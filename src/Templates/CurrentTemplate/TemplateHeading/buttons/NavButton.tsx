"use client"

import { Button } from "../../../../common/UIkit/button"
import { memo } from "react"

export const NavButton = memo(function NavButton(props: {
    callBack: (pageName: string) => void
    activeBtn: string
    btnID: string
    title: string
}){

    let isActive = props.activeBtn === props.btnID


        return (
            <Button
                variant={isActive ? 'activeTempSubPageBtn' : 'defaultTempSubPageBtn'}
                size="tempSubPageBtn"
                onClick={() => props.callBack(props.btnID)}
                >
                <span>{props.title}</span>
            </Button>
        )
})
