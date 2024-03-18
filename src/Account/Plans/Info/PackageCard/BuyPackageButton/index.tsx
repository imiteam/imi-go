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
      yearly: boolean
    }
  },
  userId: string
  isSubscriber: boolean | null
}) => {
  const getPaymentPackegeUrl = usePaymentPackegeRequest();
  return (
    <Button 
    size="buyPackage" 
    variant="buyPackage"
    onClick={() => getPaymentPackegeUrl(props.isSubscriber,props.packagePayDataType.amount, 
      props.packagePayDataType.description,
      props.userId,
      { plan: props.packagePayDataType.metadata.plan, 
        tokens: props.packagePayDataType.metadata.tokens, 
        yearly: props.packagePayDataType.metadata.yearly
      })
        }>
      <BuyPackageIcon/>
      <span>Выбрать пакет</span>
    </Button>
  )
}
