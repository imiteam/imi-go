'use client'

import usePaymentPackegeRequest from 'Account/Plans/hooks/usePayPackegeRequest'
import {Button} from '../../../../../common/UIkit/button'
import { BuyPackageIcon } from './BuyPackageIcon'

export const BuyPackageButton = (props : {
  packagePayDataType : {
    amount : number,
    description : string,
    metadata : {
      plan : string,
      tokens : number,
    }
  },
  userId: string
}) => {
  const getPaymentPackegeUrl = usePaymentPackegeRequest();
  return (
    <Button 
    size="buyPackage" 
    variant="buyPackage"
    onClick={() => getPaymentPackegeUrl(props.packagePayDataType.amount, 
      props.packagePayDataType.description,
      props.userId,
      { plan: props.packagePayDataType.metadata.plan, 
        tokens: props.packagePayDataType.metadata.tokens, 
      })
        }>
      <BuyPackageIcon/>
      <span>Выбрать пакет</span>
    </Button>
  )
}
