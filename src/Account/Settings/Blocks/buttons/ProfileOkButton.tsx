"use client"
import {Button} from '../../../../common/UIkit/button' 
import { OkIcon } from './icon_components/OkIcon';

export default function ProfileOkButton({title, icon}: {title: string; icon: string}) {
  return (
    <Button size="profileButton" variant="profileOkButton" className="cursor-not-allowed">
      <OkIcon/>
      {title}
    </Button>
  )
}
