"use client"

import { Button } from "common/UIkit/button"
import { memo } from "react"
import { FreedomChatIcon } from "./icon_components/FreedomChatIcon"

export const NewFreedomChat = memo(function NewFreedomChat(props : {
    title: string
    callBack : () => void
}){
    return (
        <Button variant={'roleSideBarBtn'} size="roleSideBarBtn" onClick={() => props.callBack()}>
          <FreedomChatIcon/>
          <span className="">{props.title}</span>
        </Button>
      )
})