'use client'

import {Button} from '../../../../common/UIkit/button'
import { PlusIcon } from './PlusIcon';

export const ProfileSimpleButton = (props: {title: string; icon?: string; callBack?: () => void}) => {
  return (
    <Button variant="profilePlanButton" size="profilePlanButton" onClick={props.callBack}>
      {props.icon && <PlusIcon />}
      <span>{props.title}</span>
    </Button>
  )
}
