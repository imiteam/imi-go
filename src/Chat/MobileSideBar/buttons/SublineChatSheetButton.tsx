'use client'
import { memo } from 'react'
import {Button} from '../../../common/UIkit/button'

export const SublineChatSheetButton = memo(function NavButton(props: {
    callBack: (value?: string) => void
    title: string
    btnID: string
    activeBtn: string
}) {
    let isActive = props.activeBtn === props.btnID
    return (
        <Button
          variant={isActive ? 'activeSublineChatBtn' : 'defaultSublineChatBtn'}
          size="sublineChatBtn"
          onClick={() => props.callBack(props.btnID)}
        >
          <span>{props.title}</span>
        </Button>
      )
})