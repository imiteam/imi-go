import {Button} from '../../../../../common/UIkit/button'
import { DeleteProfileIcon } from '../icon_components/DeleteProfileIcon'

export default function ProfileDeleteButton({title}: {title: string}) {
  return (
    <Button size="profileDeleteButton" variant="profileDeleteButton" className="cursor-not-allowed">
      <DeleteProfileIcon />
      {title}
    </Button>
  )
}