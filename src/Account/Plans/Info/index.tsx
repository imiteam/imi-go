'use client'
import question from '../../../../public/assets/questionMark.png'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../common/UIkit/tooltip'
import Image from 'next/image'
import {PackageCard} from './PackageCard'
import {ProfileSimpleButton} from './ProfileSimpleButton'
import { PlanModalIcon } from './icon_components/PlanModalIcon'
import { useCallback, useMemo, useRef, useState } from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import { GetPlanUserDocument, GetUserSubscriptionIdDocument, GetUserSubscriptionIdQueryVariables, UserWalletDocument, UserWalletSubscription, UserWalletSubscriptionVariables } from 'generated'
import { useSession } from 'next-auth/react'
import { CancelPlanDialog, CancelPlanDialogContent, CancelPlanDialogTrigger } from 'common/UIkit/cancelPlanModal'
import { Button } from 'common/UIkit/button'
import { OkIcon } from 'Account/Settings/Blocks/buttons/icon_components/OkIcon'
import { useClickAway } from 'react-use'
import { Dialog, DialogContent, DialogTrigger } from 'common/UIkit/additionalPlansModal'

export const Info = (props: {
  plan: string | undefined
  wordsCount: number | undefined
  nextPaySum: number | undefined
  nextPayDate: string | undefined
}) => {
  function formatDate(inputDate: string): string {
    const date = new Date(inputDate)
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
    return date.toLocaleDateString('ru-RU', options)
  }
  const session = useSession()
  const { data: userWalletData } = useSubscription<
    UserWalletSubscription,
    UserWalletSubscriptionVariables
  >(UserWalletDocument, {
    variables: {
      userId: session.data?.user.id,
    },
  });
  //работа с модалкой
  const [showCancelPlanModal, setShowCancelPlanModal] = useState<boolean>(false)

  const changeShowCancelPlanModal = (isShow : boolean) => {
    if(!GetUserSubscriptionIdData?.users[0].subscription_id){
      return
    }
    setShowCancelPlanModal(isShow)
  } 
  const cancelModalRef = useRef<any>(null);
  useClickAway(cancelModalRef, () => {
      if(cancelModalRef.current){
        setShowCancelPlanModal(false)
      }
  })
  const { data : GetUserSubscriptionIdData} = useQuery(GetUserSubscriptionIdDocument, {
    variables: { userId: session.data?.user.id },
   });

   const cancelPlan = useCallback((id : string) => {
    if(!id){
      return
    }
    fetch('https://api.imigo.ai/subscription/close', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subscription_id: id }),
    }).then(() => setShowCancelPlanModal(false));
 }, [GetUserSubscriptionIdData?.users[0].subscription_id]);

    //работа с модалкой
  const planPackage = [
    {id: 1, wordsCount: 10000, sum: 199, benefit: 400, symbol: 10000, pic: 30, partSum: 19},
    {
      id: 2,
      wordsCount: 30000,
      sum: 199,
      benefit: 650,
      symbol: 10000,
      pic: 85,
      partSum: 19,
    },
    {
      id: 3,
      wordsCount: 60000,
      sum: 199,
      benefit: 1300,
      symbol: 10000,
      pic: 170,
      partSum: 19,
    },
    {
      id: 4,
      wordsCount: 120000,
      sum: 199,
      benefit: 3000,
      symbol: 10000,
      pic: 350,
      partSum: 19,
    },
  ]
  const processWordsCount = useMemo(
    () =>  {
      if(!userWalletData?.wallets[0]?.tokens!){
        return NaN
      } else {
        return (userWalletData?.wallets[0]?.tokens! * 3) / 4
      
      }
    },
    [userWalletData?.wallets[0]?.tokens!],
  );
  
  const currentPlan = useMemo(
    () =>  {
      if(props.plan === "Free"){
        return "Бесплатный"
      } else if (props.plan === "Pro") {
        return "Продвинутый"
      } else {
        return "Базовый"
      }
    },
    [props.plan],
  );

  return (
    <div
      className="flex h-[94px] w-full items-center justify-between rounded-[20px] bg-[#FFFFFF] dark:bg-[#21242C] vsm:h-[134px] vsm:flex-col vsm:rounded-[16px]
                        md:mb-[8px] md:px-[20px] md:py-[8px]
                        md:planSm:py-[6px] lg:mb-[8px] lg:px-[24px]
                        lg:py-[16px]
                        xl:mb-[12px] xl:px-[32px] xl:py-[20px]"
    >
      <span
        className="w-1/3 text-[#101828] dark:text-[#F5F5F6] md:hidden lg:font-TTNormsBold lg:text-[20px]
                            lg:leading-[30px] xl:font-NeueMachinaBold xl:text-[24px]
                            xl:leading-[32px]"
      >
        Тарифы и оплата
      </span>
      <div
        className="flex h-full w-1/3 flex-col items-center
                            md:w-auto md:items-start md:justify-center
                            md:vsm:items-center"
      >
        <div
          className="flex items-center
                                md:h-[29px] md:items-start"
        >
          <span
            className="text-[#101828] dark:text-[#F5F5F6] md:font-TTNormsRegular md:text-[20px] md:leading-[19px]
                                    md:vsm:text-[14px] md:vsm:leading-[19px]
                                    md:planSm:font-TTNormsMedium lg:font-TTNormsRegular lg:text-[18px]
                                    lg:leading-[28px] 
                                    xl:text-[20px] xl:leading-[30px]"
          >
            Текущий план:
          </span>
          <span
            className="whitespace-pre-wrap text-[#101828] dark:text-[#F5F5F6] md:font-TTNormsMedium md:text-[20px] md:leading-[19px]
                                    md:vsm:text-[14px] md:vsm:leading-[19px]
                                    md:planSm:font-TTNormsBold lg:font-TTNormsMedium lg:text-[18px]
                                    lg:leading-[28px]
                                    xl:text-[20px] xl:leading-[30px]"
          >
            {' ' + currentPlan}
          </span>
          <span className="ml-[6px] w-[16px]">
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className=" w-[20px]">
                    <Image src={question} alt="question" width={16} height={16} />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Подсказка</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
        </div>
        <div
          className="flex items-center
                                vsm:justify-end md:flex-col
                                md:items-start md:vsm:items-center"
        >
          <span
            className="mr-[8px] whitespace-nowrap font-TTNormsRegular text-[12px] leading-[18px] text-[#101828] dark:text-[#F5F5F6]
                                    vsm:mr-0"
          >
            Следующий платеж {props.nextPaySum} &#x20BD; - {props.nextPayDate ? formatDate(props.nextPayDate) : null}
          </span>
          <CancelPlanDialog open={showCancelPlanModal} >
            <CancelPlanDialogTrigger>
              <ProfileSimpleButton title="Отменить автоплатеж" callBack={() => changeShowCancelPlanModal(true)} />
            </CancelPlanDialogTrigger>
            <CancelPlanDialogContent ref={cancelModalRef}>
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
                      Внимание, отмена рекурентного платежа приведет к автоматическому переходу на бесплатный тариф с {props.nextPayDate ? formatDate(props.nextPayDate) : null}
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
                  <Button size="profileCancelPlanButton" variant="profileCancelButton" onClick={() => cancelPlan(GetUserSubscriptionIdData?.users[0].subscription_id)}>
                    Да
                  </Button>
                  <Button size="profileCancelPlanButton" variant="profileOkButton" onClick={() => setShowCancelPlanModal(false)}>
                    <OkIcon/>
                    Нет
                  </Button>
                </div>

              </div>
            </CancelPlanDialogContent>
          </CancelPlanDialog>
        </div>
      </div>
      <div
        className="flex h-full w-1/3 flex-col items-end
                            md:w-auto md:justify-center"
      >
        <div className="flex items-center">
          <span
            className="font-TTNormsRegular text-[#101828] dark:text-[#F5F5F6] md:text-[18px] md:leading-[28px]
                                    md:planSm:text-[16px] md:planSm:leading-[28px]
                                    md:planSm:vsm:text-[14px] md:planSm:vsm:leading-[28px]
                                    lg:text-[20px] lg:leading-[30px]
                                    xl:text-[20px] xl:leading-[30px]"
          >
            Осталось:
          </span>
          <span
            className="whitespace-pre-wrap font-TTNormsMedium text-[#101828] dark:text-[#F5F5F6] md:text-[16px] md:leading-[28px]
                                    md:vsm:text-[14px] md:vsm:leading-[28px]
                                    lg:text-[20px] lg:leading-[30px]
                                    xl:text-[20px] xl:leading-[30px]"
          >
            {isNaN(processWordsCount) ? (
            <div className="flex justify-center items-center">
              <div
                className="animate-spin rounded-full h-4.5 w-4.5 border-b-2 border-gray-900"
                style={{ width: "15px", height: "15px" }}
              ></div>
            </div>
          ) : (
            ` ${Math.round(processWordsCount)} слов`
          )}
          </span>
        </div>
        <Dialog>
          <DialogTrigger>
            <ProfileSimpleButton title="Купить доп пакет" icon="plus" callBack={() => {}} />
          </DialogTrigger>
          <DialogContent>
            <div className="flex size-full flex-col rounded-[20px] bg-[#EDF2F6] dark:bg-[rgb(23,24,28)] ">
              <div className="flex h-[97px] w-full items-center border-b-[1px] border-b-[#D0D5DD] p-[24px] dark:border-b-[#333741]">
                <div className="mr-[16px] flex size-[48px] items-center justify-center rounded-[10px] bg-[#FFFFFF] dark:bg-[#000000] vsm:hidden">
                  <PlanModalIcon />
                </div>
                <div className="flex flex-col">
                  <span
                    className="font-NeueMachinaBold text-[24px] leading-[32px] text-[#101828] dark:text-[#F5F5F6]
                                    planSm:text-[20px] planSm:leading-[30px]"
                  >
                    Выберите пакет
                  </span>
                  <span
                    className="font-TTNormsRegular text-[14px] leading-[20px] text-[#475467] dark:text-[#98A2B3]
                                                planSm:text-[12px] planSm:leading-[18px]"
                  >
                    При необходимости покупайте доп. слова и генерации изображений
                  </span>
                </div>
              </div>
              <div
                className="grid size-full grid-cols-2 grid-rows-2 gap-5 p-[24px] vsm:grid-cols-1 vsm:grid-rows-4 planSm:gap-3 planSm:px-[20px]
                                        planSm:py-[24px] "
              >
                {planPackage.map((p) => {
                  return (
                    <PackageCard
                      benefit={p.benefit}
                      partSum={p.partSum}
                      pic={p.pic}
                      sum={p.sum}
                      symbol={p.symbol}
                      wordsCount={p.wordsCount}
                      key={p.id}
                    />
                  )
                })}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
