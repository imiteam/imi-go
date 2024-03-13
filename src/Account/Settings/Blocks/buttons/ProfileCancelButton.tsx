import {Button} from '../../../../common/UIkit/button'

export default function ProfileCancelButton({title, callBack}: {title: string; callBack?: () => void}) {
  return (
    <Button
      size="profileButton"
      variant="profileCancelButton"
      className="cursor-not-allowed"
      onClick={callBack ? () => callBack() : () => {}}
    >
      {title}
    </Button>
  )
}
