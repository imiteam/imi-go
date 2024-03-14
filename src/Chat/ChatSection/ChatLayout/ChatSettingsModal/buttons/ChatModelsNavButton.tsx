'use client'

import { Button } from "common/UIkit/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "common/UIkit/tooltip"
import { memo } from "react"

export const ChatModelsNavButton = memo(function ChatModelsNavButton(props: {
    activeBtn: string
    title: string
    btnID: string
    callBack: (value: string) => void
}) {
    let cursor2 = props.btnID === 'off' ? 'pointer' : 'not-allowed'
      return props.btnID === 'off' ? (
        <Button
          style={{cursor: cursor2}}
          variant={
            props.activeBtn === props.btnID ? 'activeChatModelsModalNavButton' : 'defaultChatModelsModalNavButton'
          }
          size="ChatModelsModalNavButton"
          // onClick={() => props.callBack(props.btnID ? props.btnID : "")}
          // onClick={disabled ? () => {} : () => SetButtonId(id)}
        >
          <span>{props.title}</span>
        </Button>
      ) : (
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                style={{cursor: cursor2}}
                variant={
                  props.activeBtn === props.btnID ? 'activeChatModelsModalNavButton' : 'defaultChatModelsModalNavButton'
                }
                size="ChatModelsModalNavButton"
                // onClick={() => props.callBack(props.btnID ? props.btnID : "")}
                // onClick={disabled ? () => {} : () => SetButtonId(id)}
              >
                <span>{props.title}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
              <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                В разработке
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
}
)