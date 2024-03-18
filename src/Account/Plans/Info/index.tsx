'use client'
import question from '../../../../public/assets/questionMark.png'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../common/UIkit/tooltip'
import Image from 'next/image'
import {PackageCard} from './PackageCard'
import {ProfileSimpleButton} from './ProfileSimpleButton'
import { PlanModalIcon } from './icon_components/PlanModalIcon'
import { useCallback, useMemo, useRef, useState } from 'react'
import { useQuery, useSubscription } from '@apollo/client'
import { GetUserInfoDocument, GetUserSubscriptionIdDocument, UserWalletDocument, UserWalletSubscription, UserWalletSubscriptionVariables } from 'generated'
import { useSession } from 'next-auth/react'

import { useClickAway } from 'react-use'
import { Dialog, DialogContent, DialogTrigger } from 'common/UIkit/additionalPlansModal'
import { useProfileStore } from 'Account/lib/useProfileStore'
import { CancelPlanModal } from './CancelPlanModal'

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
  //работа с модалкой отмены подписки
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
    }).then(() => setShowCancelPlanModal(false)).then(() => window.location.reload());
 }, [GetUserSubscriptionIdData?.users[0].subscription_id]);

    //работа с модалкой отмены подписки
    
    const { data: GetUserInfoData  } = useQuery(GetUserInfoDocument, {
    variables: { userId: session.data?.user.id },
  });

  const planPackage = [
    {
      id: 1, 
      wordsCount: 750, 
      sum: 199, 
      benefit: 400, 
      symbol: 10000, 
      pic: 30, 
      partSum: 19,
      paymentFetchObj : {
        amount : 199,
        description : "Дополнительный пакет",
        metadata : {
          plan : "",
          tokens : 1000,
          yearly: false
        }
      }
    },
    {
      id: 2,
      wordsCount: 7500,
      sum: 299,
      benefit: 650,
      symbol: 10000,
      pic: 85,
      partSum: 19,
      paymentFetchObj : {
        amount : 299,
        description : "Дополнительный пакет",
        metadata : {
          plan : "",
          tokens : 10000,
          yearly: false
        }
      }
    },
    {
      id: 3,
      wordsCount: 75000,
      sum: 399,
      benefit: 1300,
      symbol: 10000,
      pic: 170,
      partSum: 19,
      paymentFetchObj : {
        amount : 399,
        description : "Дополнительный пакет",
        metadata : {
          plan : "",
          tokens : 100000,
          yearly: false
        }
      }
    },
    {
      id: 4,
      wordsCount: 150000,
      sum: 499,
      benefit: 3000,
      symbol: 10000,
      pic: 350,
      partSum: 19,
      paymentFetchObj : {
        amount : 499,
        description : "Дополнительный пакет",
        metadata : {
          plan : "",
          tokens : 200000,
          yearly: false
        }
      }
    },
  ]
  const processWordsCount = useMemo(
    () =>  {
      if(!userWalletData?.wallets[0]?.tokens! ){
        return NaN
      } else {
        return ((userWalletData?.wallets[0]?.tokens! + userWalletData?.wallets[0].additional_tokens!) * 3) / 4
      
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

  const {paymentPackegeUrl, SetPaymentPackegeUrl} = useProfileStore()
  const iframeePackegeRef = useRef<HTMLIFrameElement | null>(null);
  useClickAway(iframeePackegeRef, (e) => {
    if(iframeePackegeRef.current){
      SetPaymentPackegeUrl("")
      window.location.reload(); // обновляем экран чтобы пользователь увидел обновленный активный план в карточке плана, в названии плана, дате след оплаты и т д
    }
})
  return (
    <div
      className="flex h-[94px] w-full items-center justify-between rounded-[20px] bg-[#FFFFFF] dark:bg-[#21242C] vsm:h-[134px] vsm:flex-col vsm:rounded-[16px]
                        md:mb-[8px] md:px-[20px] md:py-[8px]
                        md:planSm:py-[6px] lg:mb-[8px] lg:px-[24px]
                        lg:py-[16px]
                        xl:mb-[12px] xl:px-[32px] xl:py-[20px]"
    >
      {paymentPackegeUrl && (
          <Dialog open={paymentPackegeUrl !== ""}>
            <DialogContent>
              <iframe 
                      ref={iframeePackegeRef}
                      src={paymentPackegeUrl}
                      title="Payment"
                      style={{ width: '100%', height: '100%', border: 'none', borderRadius : "20px" }}
                    />
            </DialogContent>
          </Dialog>
      )}
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
          <CancelPlanModal
          cancelModalRef={cancelModalRef}
          cancelPlan={cancelPlan}
          changeShowCancelPlanModal={changeShowCancelPlanModal}
          formatDate={formatDate}
          nextPayDate={props.nextPayDate}
          setShowCancelPlanModal={setShowCancelPlanModal}
          showCancelPlanModal={showCancelPlanModal}
          subscription_id={GetUserSubscriptionIdData?.users[0].subscription_id}
          />
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
                      paymentFetchObj={p.paymentFetchObj}
                      userId={session.data?.user.id!}
                      isSubscriber={GetUserInfoData ? GetUserInfoData.users[0].is_subscriber : null}
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
