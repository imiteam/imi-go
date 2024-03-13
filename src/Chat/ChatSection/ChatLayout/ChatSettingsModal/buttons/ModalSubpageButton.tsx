'use client'

import { Button } from "common/UIkit/button"
import { memo } from "react"

export const ModalSubpageButton = memo(function ModalSubpageButton(props: {
    activeBtn: string
    title: string
    callBack : (value: string) => void
    btnID: string
}) {
    let isActive = props.activeBtn === props.btnID
    return (
        <Button
          variant={isActive ? 'activeChatSettsSubpageButton' : 'defaultChatSettsSubpageButton'}
          size="chatSettsSubpageButton"
          onClick={() => props.callBack(props.btnID)}
        >
          <span>{props.title}</span>
        </Button>
    )
}
)