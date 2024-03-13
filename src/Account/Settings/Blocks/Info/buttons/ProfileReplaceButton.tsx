import {Button} from '../../../../../common/UIkit/button'
import { ReplaceProfileIcon } from '../icon_components/ReplaceProfileIcon';

export default function ProfileChangelButton({title}: {title: string}) {
  return (
    <Button size="profileReplaceButton" variant="profileReplaceButton" className="cursor-not-allowed">
      <ReplaceProfileIcon/>
      {title}
    </Button>
  )
}
