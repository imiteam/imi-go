'use client'
import {useQuery, useSubscription} from '@apollo/client'
import {ProgressCircleBar} from './ProcessCircle'
import ProfileDropDownChat from './ProfileDropDownChat/index'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../common/UIkit/tooltip'
import {
  GetPlanUserDocument,
  GetUserInfoDocument,
  UserWalletDocument,
  UserWalletSubscription,
  UserWalletSubscriptionVariables,
} from 'generated'
import {memo, useCallback, useMemo} from 'react'
import Image from "next/image"
import betterYourPlan from "../../../../public/assets/betterYourPlan.png"
export const WordsWidget = memo(function WordsWidget(props: {className?: string; id: string; userId: string}) {
  const {data: userWalletData} = useSubscription<UserWalletSubscription, UserWalletSubscriptionVariables>(
    UserWalletDocument,
    {
      variables: {
        userId: props.userId,
      },
    },
  )

  const {data} = useQuery(GetPlanUserDocument, {
    variables: {id: props.userId},
  })

  const { data: GetUserInfoData  } = useQuery(GetUserInfoDocument, {
    variables: { userId: props.userId },
  });

  const planName = useCallback(
    (data: any | undefined) => {
      if (data) {
        switch (data.users_by_pk?.plan_id) {
          case "8d035581-2209-4212-a4f2-6938bd0bf32a":
            return "Бесплатный";
          case "6a7c060b-1d7c-414a-88a5-f43edc9b6aee":
            return "Базовый"
          case "07428e4f-6d8f-41ee-95fb-1a11180f5877" :
            return "PRO"
          default:
            return <div className="flex justify-center items-center">
            <div
              className="animate-spin rounded-full h-4.5 w-4.5 border-b-2 border-gray-900"
              style={{ width: "15px", height: "15px" }}
            ></div>
          </div>;
        }
      }
    },
    [data],
  )
  const progress = useMemo(() => {
   let maxTokens;
   if(data?.users_by_pk?.plan_id === "8d035581-2209-4212-a4f2-6938bd0bf32a"){
    maxTokens = 10000
   } else if(data?.users_by_pk?.plan_id === "6a7c060b-1d7c-414a-88a5-f43edc9b6aee"){
    maxTokens = 100000
   } else {
    maxTokens = 10000000
   }
   return ((userWalletData?.wallets[0]?.tokens! + userWalletData?.wallets[0].additional_tokens!) / maxTokens) * 100
  }, [userWalletData?.wallets,data])
  return (
    <div
      className="
        z-30 flex flex-col items-center rounded-[16px] bg-[#DAE3E9] dark:bg-search-template-input-bg-dark 
        md:mr-[8px] md:h-[144px]
        md:w-[192px] md:p-[12px] md:sm:m-0 md:sm:ml-[7px] 
        md:sm:h-[162px] md:sm:w-[240px] md:sm:p-[16px] lg:mr-[5px]
        lg:h-[144px] lg:w-[99.5%] lg:p-[12px] 
        xl:mr-0 xl:h-[168px] xl:w-[248px] xl:p-[16px]"
    >
      {userWalletData && (
        <div className="relative right-[4px] flex h-[38px] w-[92%]">
          <ProgressCircleBar percentage={progress} />
          <ProfileDropDownChat userWalletData={userWalletData} planName={planName(data)} ai_text_model={GetUserInfoData?.users[0].ai_text_model}/>
        </div>
      )}
      <div className="my-[16px] flex w-[92%] cursor-not-allowed items-center">
        <span
          className="mr-[6px] font-TTNormsMedium text-template-item-text-active-lite dark:text-[#fff] md:text-[12px] md:leading-[14px] lg:text-[12px]
                lg:leading-[14px] xl:text-[14px]"
        >
          Улучшить план
        </span>
        <Image src={betterYourPlan} alt="improvePlan" width={14} height={16} />
      </div>
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="flex cursor-not-allowed items-center justify-center bg-white dark:bg-black 
              md:h-[36px] md:w-[152px] md:rounded-[10px] md:px-[12px]
              md:py-[8px] md:sm:h-[44px] md:sm:w-[208px] md:sm:px-[16px] md:sm:py-[12px]    
              lg:h-[40px] lg:w-[162px] lg:rounded-[10px] lg:px-[12px] lg:py-[10px]
              xl:h-[44px] xl:w-[208px] xl:px-[16px] xl:py-[12px]"
            >
              {/* <Image src={makeWords} alt="makeWords" width={width <= 680 ? 20 : 16} height={width <= 680 ? 20 : 16} /> */}

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-[20px] md:w-[20px] lg:h-[16px] lg:w-[16px]"
              >
                <path
                  d="M10.0001 5.83366H6.25008C5.69755 5.83366 5.16764 5.61417 4.77694 5.22346C4.38624 4.83276 4.16675 4.30286 4.16675 3.75033C4.16675 3.19779 4.38624 2.66789 4.77694 2.27719C5.16764 1.88649 5.69755 1.66699 6.25008 1.66699C9.16675 1.66699 10.0001 5.83366 10.0001 5.83366ZM10.0001 5.83366H13.7501C14.3026 5.83366 14.8325 5.61417 15.2232 5.22346C15.6139 4.83276 15.8334 4.30286 15.8334 3.75033C15.8334 3.19779 15.6139 2.66789 15.2232 2.27719C14.8325 1.88649 14.3026 1.66699 13.7501 1.66699C10.8334 1.66699 10.0001 5.83366 10.0001 5.83366ZM10.0001 5.83366L10.0001 18.3337M1.66675 11.667H18.3334M1.66675 8.50033L1.66675 15.667C1.66675 16.6004 1.66675 17.0671 1.8484 17.4236C2.00819 17.7372 2.26316 17.9922 2.57676 18.152C2.93328 18.3337 3.39999 18.3337 4.33341 18.3337L15.6667 18.3337C16.6002 18.3337 17.0669 18.3337 17.4234 18.152C17.737 17.9922 17.992 17.7372 18.1518 17.4236C18.3334 17.0671 18.3334 16.6004 18.3334 15.667V8.50033C18.3334 7.56691 18.3334 7.1002 18.1518 6.74368C17.992 6.43007 17.737 6.17511 17.4234 6.01532C17.0669 5.83366 16.6002 5.83366 15.6667 5.83366L4.33342 5.83366C3.39999 5.83366 2.93328 5.83366 2.57676 6.01531C2.26316 6.1751 2.00819 6.43007 1.8484 6.74367C1.66675 7.10019 1.66675 7.5669 1.66675 8.50033Z"
                  stroke="#0B3BEC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span
                className="ml-[8px] whitespace-nowrap font-TTNormsMedium text-template-item-text-active-lite dark:text-[#fff]
                md:text-[12px] md:leading-[14px] md:sm:text-[16px] md:sm:leading-[19px] lg:text-[14px] lg:leading-[14px] xl:text-[16px] xl:leading-[19px]"
              >
                Заработать слова
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
            <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
              В разработке
            </span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
})
