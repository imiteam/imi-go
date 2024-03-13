'use client'
import { memo } from 'react'
import {Button} from '../../../common/UIkit/button'
import { CloseChatSheetIcon } from '../icon_components/CloseChatSheetIcon'

export const CloseChatSheetButton = memo(function CloseChatSheetButton(props: {
    callBack: (isOpen: boolean) => void
}) {
    return (
        <Button
          variant={'closeAsideChatBtn'}
          size="closeAsideChatBtn"
          onClick={() => props.callBack(false)}
        >
          <CloseChatSheetIcon />
        </Button>
      )
})