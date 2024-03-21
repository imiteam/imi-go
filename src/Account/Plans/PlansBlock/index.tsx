'use client'
import {GetPlanCategoriesQuery} from 'generated'
import {memo, useEffect, useRef, useState} from 'react'
import {PayToggle} from './PayToggle'
import {PlanCard} from './PlanCard'
import {PlanCategories} from './PlanCard/PlanCategories'
import { useProfileStore } from 'Account/lib/useProfileStore'
import { Dialog, DialogContent } from 'common/UIkit/additionalPlansModal'
import { useOnClickOutside } from 'usehooks-ts'
import { useClickAway } from 'react-use'
import { Key } from 'lucide-react'

export type PlansMockData = {
  title: string
  name: string
  presentation: string
  sale: {
    [Key : string] : number,
  },
  benefit: {
    [Key : string] : number,
  },
  sum: {
    [Key : string] : number,
  },
  wordsCount: number | string
  planButton: {
    type: string
    title:
      | Array<{
          title: string
          id: number
        }>
      | string
  }
  planFeautures: Array<{title: string; includes: boolean}>
  paymentFetchObj : {
    amount: {
      [Key : string] : number,
    },
    description: string,
    metadata: {
      plan: string,
      tokens: number,
      yearly: {
        [Key : string] : boolean,
      },
    },
    is_subscription: boolean,
 } 
}

export const PlansBlock = memo(function PlansBlock({planCategories, planName}: {planCategories: GetPlanCategoriesQuery,planName: string | undefined}) {
  
  const [togglerNum,setTogglerNum] = useState<Number>(1)

  const changePaymentPeriodToggler = (togglerNum : number) => {
    setTogglerNum(togglerNum)
  }
  // объекты с инфой о каточках с тарифами
  const data: Array<PlansMockData> = [
    {
      title: 'Бесплатный',
      name: "Free",
      presentation: 'Всем желающим использовать нейросети',
      sale: {
        "1" : 0,
        "2" : 0
      },
      benefit:  {
        "1" : 0,
        "2" : 0
      },
      sum: {
        "1" : 0,
        "2" : 0
      },
      wordsCount: 10000,
      planButton: {
        type: 'simple',
        title: 'GPT 3.5',
      },
      planFeautures: [
        {
          title: 'IMI чат: чат-бот c ИИ',
          includes: true,
        },
        {
          title: '30+ ролей в чате',
          includes: true,
        },
        {
          title: '100+ текстовых шаблонов',
          includes: true,
        },
        {
          title: 'Базовое обучение',
          includes: true,
        },
        {
          title: 'IMI Editor (как Notion AI, но лучше)',
          includes: true,
        },
        {
          title: 'Загрузка PDF-файлов в чат с ИИ',
          includes: false,
        },
      ],
      paymentFetchObj : {
        amount : {
          "1" : 0,
          "2" : 0
        },
        description : "Бесплатный тариф",
        metadata : {
          plan : "Free",
          tokens : 10000,
          yearly : {
            "1" : false,
            "2" : true
          },
        },
        is_subscription : true
      }
    },
    {
      title: 'Базовый',
      name: "Base",
      presentation: 'Раскройте свой творческий потенциал',
      sale: {
        "1" : 0,
        "2" : 20
      },
      benefit: {
        "1" : 0,
        "2" : 3250
      },
      sum: {
        "1" : 3250,
        "2" : 1990
      },
      wordsCount: 'безлимитно',
      planButton: {
        type: 'simple',
        title: 'GPT 3.5 TURBO',
      },
      planFeautures: [
        {
          title: 'IMI чат: чат-бот c ИИ',
          includes: true,
        },
        {
          title: '30+ ролей в чате',
          includes: true,
        },
        {
          title: '100+ текстовых шаблонов',
          includes: true,
        },
        {
          title: 'Продвинутое обучение',
          includes: true,
        },
        {
          title: 'IMI Editor (как Notion AI, но лучше)',
          includes: true,
        },
        {
          title: 'Загрузка PDF-файлов в чат с ИИ',
          includes: true,
        },
      ],
      paymentFetchObj : {
        amount :{
          "1" : 3250,
          "2" : 1990
        },
        description : "Базовый тариф",
        metadata : {
          plan : "Base",
          tokens : 1000000,
          yearly : {
            "1" : false,
            "2" : true
          },
        },
        is_subscription : true
      }
    },
    {
      title: 'PRO',
      name: "Pro",
      presentation: 'Используйте свой потенциал на максимум',
      sale: {
        "1" : 0,
        "2" : 33
      },
      benefit: {
        "1" : 0, 
        "2" : 17250
      },
      sum: {
        "1" : 17250,
        "2" : 13990
      },
      wordsCount: 4000000,
      planButton: {
        type: 'multiply',
        title: [
          {title: 'GPT 3.5 TURBO +', id: 1},
          {title: 'GPT 4', id: 2},
        ],
      },
      planFeautures: [
        {
          title: 'IMI чат: ИИ 4.0 и стандартной версией 3.5',
          includes: true,
        },
        {
          title: '30+ ролей в чате',
          includes: true,
        },
        {
          title: '100+ текстовых шаблонов',
          includes: true,
        },
        {
          title: 'Продвинутое обучение',
          includes: true,
        },
        {
          title: 'IMI Editor (как Notion AI, но лучше)',
          includes: true,
        },
        {
          title: 'Загрузка PDF-файлов в чат с ИИ',
          includes: true,
        },
      ],
      paymentFetchObj : {
        amount :  {
          "1" : 17250,
          "2" : 13990
        },
        description : "PRO тариф",
        metadata : {
          plan : "Pro",
          tokens : 750000,
          yearly : {
            "1" : false,
            "2" : true
          },
        },
        is_subscription : true
      }
    },
  ] 

  //Работа с модалкой для отображения окна оплаты тарифа
  const {SetPaymentUrl,paymentUrl} = useProfileStore()
  const iframeeRef = useRef<HTMLIFrameElement | null>(null);
 
  useClickAway(iframeeRef, (e) => {
      if(iframeeRef.current){
        SetPaymentUrl("")
        window.location.reload(); // обновляем экран чтобы пользователь увидел обновленный активный план в карточке плана, в названии плана, дате след оплаты и т д
      }
  })
  return (
    <div
      className="flex w-full flex-col items-center justify-between rounded-[20px] md:mb-[8px] md:bg-[none] md:py-[12px] md:planSm:mb-0 md:planSm:py-0
                        md:planSm:pt-[12px] lg:mb-[12px]
                        lg:h-[760px] lg:bg-[#FFFFFF] lg:p-[24px]
                        lg:dark:bg-[#21242C] xl:h-[769px] xl:p-[32px] relative"
    >
      {paymentUrl && (
          <Dialog open={paymentUrl !== ""}>
            <DialogContent>
              <iframe 
                      ref={iframeeRef}
                      src={paymentUrl}
                      title="Payment"
                      style={{ width: '100%', height: '100%', border: 'none', borderRadius : "20px" }}
                    />
            </DialogContent>
          </Dialog>
      )}
      
      
      <div
        className="flex w-full items-center justify-between md:mb-[16px] md:h-[79px] md:flex-col
                            md:vsm:h-[86px] lg:mb-[24px]
                            lg:h-[83px] lg:flex-col xl:h-[44px]
                            xl:flex-row"
      >
        <div className="flex items-center ">
          <span
            className="mr-[12px] font-TTNormsMedium text-[20px] leading-[30px] text-[#101828] dark:text-[#F5F5F6] md:hidden 
                                    lg:hidden
                                    xl:inline"
          >
            Выберите:
          </span>
          <PlanCategories planCategories={planCategories.plan_categories} />
        </div>
        <PayToggle callBack={changePaymentPeriodToggler}/>
      </div>
      <div
        id="plansContainer"
        className="flex size-full planSm:flex-col
                        planSm:items-center planSm:px-[80px] planSm:pb-[20px] planSm:pt-3 planSm:vsm:px-[0px]
                        planSm:vsm:pt-0"
      >
        {data.map((p, index) => {
          return <PlanCard plan={p} key={index} planName={planName} togglerNum={togglerNum}/>
        })}
      </div>
    </div>
  )
})
