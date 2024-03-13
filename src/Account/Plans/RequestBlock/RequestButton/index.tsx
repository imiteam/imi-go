'use client'

import {Button} from '../../../../common/UIkit/button'
import { RequestButtonIcon } from './RequestButtonIcon'

export const RequestButton = () => {
  return (
    <Button variant="requestButton" size="requestButton">
      <RequestButtonIcon/>
      <span>Оставить заявку</span>
    </Button>
  )
}
