"use client"

import { Button } from "common/UIkit/button"
import { memo } from "react"
import { ScrollToEndIcon } from "../icon_components/ScrollToEndIcon"

export const ScrollToEndButton = memo(function ScrollToEndButton(props : {
    callBack : () => void
}){
    return (
        <Button variant={'scrollToEnd'} size="scrollToEnd" onClick={() => props.callBack()}>
          <ScrollToEndIcon />
        </Button>
      )
})


