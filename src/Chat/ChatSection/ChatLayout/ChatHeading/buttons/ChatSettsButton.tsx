"use client"

import { Button } from "common/UIkit/button"
import { memo } from "react"
import { OpenChatSettsIcon } from "../icon_components/OpenChatSettsIcon"

export const ChatSettsButton = memo(function ChatSettsButton(props : {
    callBack : () => void
}){
    return (
        <Button variant={'chatHeadingBtn'} size="defaultChatHeadingBtn" onClick={() => props.callBack()}>
          <OpenChatSettsIcon callBack={() => {}}/>
        </Button>
      )
})


      