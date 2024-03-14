import {Button} from '../../../../common/UIkit/button'

export default function PageButton({
  isActive,
  number,
  callBack,
}: {
  isActive: boolean
  number: number
  callBack: (page: number) => void
}) {
  return (
    <Button
      size="pageButton"
      variant={isActive ? 'activePageButton' : 'defaultPageButton'}
      onClick={() => callBack(number)}
    >
      {number}
    </Button>
  )
}
