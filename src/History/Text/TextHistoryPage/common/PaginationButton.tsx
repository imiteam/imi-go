import {Button} from '../../../../common/UIkit/button'
import {Fragment} from 'react'
import { SwitchHistoryTextIcon } from './SwitchHistoryTextIcon'

export default function GoBackPagination({
  icon,
  isActive,
  title,
  callBack,
}: {
  icon: string
  isActive: boolean
  title: string
  callBack: () => void
}) {
  return (
    <Button
      size="historyPagintainBtn"
      variant={isActive ? 'activePaginationButton' : 'defaultPaginationButton'}
      onClick={callBack}
    >
      {icon === 'goBack' ? (
        <Fragment>
          <SwitchHistoryTextIcon icon={icon} />
          <span>{title}</span>
        </Fragment>
      ) : (
        <Fragment>
          <span>{title}</span>
          <SwitchHistoryTextIcon icon={icon} />
        </Fragment>
      )}
    </Button>
  )
}
