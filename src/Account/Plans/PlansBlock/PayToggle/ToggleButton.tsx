import { memo } from 'react'
import {Button} from '../../../../common/UIkit/button'

export const ToggleButton = memo(function ToggleButton({
  activeBtnId,
  id,
  callBack,
}: {
  activeBtnId: number
  id: number
  callBack?: (id: number) => void
}) {
  return (
    <Button
      variant={id === activeBtnId ? 'activePlanToggleButton' : 'defaultPlanToggleButton'}
      size="planToggleButton"
      onClick={() => (callBack ? callBack(id) : null)}
    ></Button>
  )
})