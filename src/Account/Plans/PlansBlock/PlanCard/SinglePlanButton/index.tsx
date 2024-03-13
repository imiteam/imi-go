'use client'
import {Button} from '../../../../../common/UIkit/button'

export const SinglePlanButton = ({title}: {title: string}) => {
  return (
    <Button variant={'singlePlanButton'} size="singlePlanButton">
      {title}
    </Button>
  )
}
