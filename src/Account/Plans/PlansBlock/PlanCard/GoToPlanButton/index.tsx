'use client'

import {Button} from '../../../../../common/UIkit/button'
import { SwitchGoToPlanIcon } from './icon_components/SwitchGoToPlanIcon'

export const GoToPlanButton = ({isActive}: {isActive: boolean}) => {
  return (
    <Button variant={isActive ? 'activePlan' : 'goToPlan'} size={isActive ? 'activePlan' : 'goToPlan'}>
      <SwitchGoToPlanIcon icon={isActive ? 'activePlan' : 'goToPlan'} />
      {isActive ? <span>Активирован</span> : <span>Перейти на это тариф</span>}
    </Button>
  )
}
