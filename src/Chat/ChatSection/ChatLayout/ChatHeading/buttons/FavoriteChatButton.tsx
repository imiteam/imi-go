"use client"

import { Button } from "common/UIkit/button"
import { memo } from "react"
import { FullWidthIcon } from "../icon_components/FullWidthIcon"
import { FavoriteChatIcon } from "../icon_components/FavoriteChatIcon"

export const FavoriteChatButton = memo(function FavoriteChatButton(props : {
    callBack : () => void
    isActive : boolean
}){
    return (
        <Button variant={'chatHeadingBtn'} size="defaultChatHeadingBtn" onClick={() => props.callBack()}>
          <FavoriteChatIcon isActive={props.isActive}/>
        </Button>
      )
})

