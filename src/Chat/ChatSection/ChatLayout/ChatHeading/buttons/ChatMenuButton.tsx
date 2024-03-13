"use client"

import { Button } from "common/UIkit/button"
import { memo } from "react"
import { ChatMenuIcon } from "../icon_components/ChatMenuIcon"

export const ChatMenuButton = memo(function ChatMenuButton(props : {
    callBack : (isOpen: boolean) => void
}){
    return (
        <Button variant={'chatMenuBtn'} size="defaultChatMenuBtn" onClick={() => props.callBack(true)}>
          <ChatMenuIcon />
        </Button>
      )
}
)
