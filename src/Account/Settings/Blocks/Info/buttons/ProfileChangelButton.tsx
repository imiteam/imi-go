import { memo } from 'react';
import {Button} from '../../../../../common/UIkit/button'
import { ChangeProfileIcon } from '../icon_components/ChangeProfileIcon';

export const ProfileChangelButton = memo(function ProfileChangelButton({title}: {title: string; }) {
  return (
    <Button size="profileChangeButton" variant="profileChangeButton" className="cursor-not-allowed">
      <ChangeProfileIcon />
      {title}
    </Button>
  )
})
