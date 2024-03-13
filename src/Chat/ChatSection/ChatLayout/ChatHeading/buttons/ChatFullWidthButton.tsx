"use client"

import { Button } from "common/UIkit/button"
import { memo } from "react"
import { FullWidthIcon } from "../icon_components/FullWidthIcon"

export const ChatFullWidthButton = memo(function ChatFullWidthButton(props : {
    callBack : () => void
}){
    return (
        <Button variant={'chatHeadingBtn'} size="defaultChatHeadingBtn" onClick={() => props.callBack()}>
          <FullWidthIcon callBack={() => {}}/>
        </Button>
      )
})

