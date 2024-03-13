import {Button} from '../../../../../common/UIkit/button'

export default function InstructionsToggle({
  activeBtnId,
  id,
  callBack,
}: {
  activeBtnId: boolean
  id: boolean
  callBack: (id: boolean) => void
}) {
  return (
    <Button
      variant={id === activeBtnId ? 'activeInsructionsToggleButton' : 'defaultInsructionsToggleButton'}
      size="InsructionsToggleButton"
      // onClick={() => callBack(id)}
      onClick={() => {}}
      className="cursor-not-allowed"
    ></Button>
  )
}
