"use client"

import { Button } from "common/UIkit/button"
import { memo } from "react"
import { FullWidthIcon } from "../icon_components/FullWidthIcon"
import { DownloadChatIcon } from "../icon_components/DownloadChatIcon"

export const DownloadChatButton = memo(function DownloadChatButton(props : {
    callBack : () => void
}){
    return (
        <Button variant={'chatHeadingBtn'} size="defaultChatHeadingBtn" onClick={() => props.callBack()}>
          <DownloadChatIcon />
        </Button>
      )
})

