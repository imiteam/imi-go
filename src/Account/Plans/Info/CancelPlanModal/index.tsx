"use client"

import { RefObject, SetStateAction, memo } from "react"
import { PlanModalIcon } from "../icon_components/PlanModalIcon"
import { CancelPlanDialog, CancelPlanDialogContent, CancelPlanDialogTrigger} from "common/UIkit/cancelPlanModal"
import { ProfileSimpleButton } from "../ProfileSimpleButton"
import { Button } from "common/UIkit/button"
import { OkIcon } from "Account/Settings/Blocks/buttons/icon_components/OkIcon"

export const CancelPlanModal = memo(function CancelPlanModal(props: {
    showCancelPlanModal : boolean
    changeShowCancelPlanModal: (value:true) => void
    cancelModalRef: RefObject<any>
    nextPayDate: string|undefined
    formatDate:(inputDate: string) => string
    cancelPlan: (id: string) => void
    subscription_id: string
    setShowCancelPlanModal: (value: false) => void
}){
    return (
        <CancelPlanDialog open={props.showCancelPlanModal} >
            <CancelPlanDialogTrigger>
              <ProfileSimpleButton title="Отменить автоплатеж" callBack={() => props.changeShowCancelPlanModal(true)} />
            </CancelPlanDialogTrigger>
            <CancelPlanDialogContent ref={props.cancelModalRef}>
              <div className='w-full h-full rounded-[20px] bg-[#EDF2F6] dark:bg-[rgb(23,24,28)] flex flex-col'>

                <div className="flex h-[97px] w-full items-center border-b-[1px] border-b-[#D0D5DD] p-[24px] dark:border-b-[#333741]">
                  <div className="mr-[16px] flex size-[48px] items-center justify-center rounded-[10px] bg-[#FFFFFF] dark:bg-[#000000] vsm:hidden">
                    <PlanModalIcon />
                  </div>
                    <span
                      className="font-NeueMachinaBold text-[24px] leading-[32px] text-[#101828] dark:text-[#F5F5F6]
                                      planSm:text-[20px] planSm:leading-[30px]"
                    >
                      Отмена рекурентного платежа
                    </span>
                </div>

                <div className='w-full h-[130px] p-[24px] flex flex-col planSm:vsm:h-auto'>
                  <div className='w-full h-auto flex flex-col'>
                    <span
                        className="font-TTNormsRegular text-[14px] leading-[20px] text-[#475467] dark:text-[#98A2B3]
                                                    planSm:text-[12px] planSm:leading-[18px] text-center mb-3"
                    >
                      Внимание, отмена рекурентного платежа приведет к автоматическому переходу на бесплатный тариф с {props.nextPayDate ? props.formatDate(props.nextPayDate) : null}
                    </span>
                    <span
                      className="font-NeueMachinaBold text-[24px] leading-[32px] text-[#101828] dark:text-[#F5F5F6]
                                      planSm:text-[20px] planSm:leading-[30px] text-center"
                    >
                      Подтвердить отмену платежа ?
                    </span>
                  </div>
                </div>

                <div className='w-full h-auto flex justify-between py-[24px] px-[80px] vsm:px-[24px]'>
                  <Button size="profileCancelPlanButton" variant="profileCancelButton" onClick={() => props.cancelPlan(props.subscription_id)}>
                    Да
                  </Button>
                  <Button size="profileCancelPlanButton" variant="profileOkButton" onClick={() => props.setShowCancelPlanModal(false)}>
                    <OkIcon/>
                    Нет
                  </Button>
                </div>

              </div>
            </CancelPlanDialogContent>
          </CancelPlanDialog>
    )
})