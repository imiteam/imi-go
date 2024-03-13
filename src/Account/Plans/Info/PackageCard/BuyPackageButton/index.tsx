'use client'

import {Button} from '../../../../../common/UIkit/button'
import { BuyPackageIcon } from './BuyPackageIcon'

export const BuyPackageButton = () => {
  return (
    <Button size="buyPackage" variant="buyPackage">
      <BuyPackageIcon/>
      <span>Выбрать пакет</span>
    </Button>
  )
}
