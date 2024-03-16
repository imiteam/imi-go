'use client'
import { HistoryCategorySelect, HistoryCategorySelectContent, HistoryCategorySelectGroup, HistoryCategorySelectItem, HistoryCategorySelectTrigger, HistoryCategorySelectValue } from 'common/UIkit/HistoryCategorySelect'
import {Button} from '../../common/UIkit/button'
import HistoryNavButton from './HistoryCategoryNavButtons'
import { SwitchHistoryCategoryIcon } from './SwitchHistoryCategoryIcon'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'common/UIkit/tooltip'

export default function HistoryCategories() {
  const historyCategories = [
    {
      id: 1,
      title: 'Мои тексты',
      icon: 'text',
    },
    {
      id: 2,
      title: 'Мои изображения',
      icon: 'pic',
    },
    {
      id: 3,
      title: 'Моя обработка',
      icon: 'magic',
    },
  ]
  return (
    <div
      className="flex h-[68px] w-full items-center
                        md:h-[56px]"
    >
      <span
        className="mr-[24px] h-full font-NeueMachinaBold text-[#101828] dark:text-[#F5F5F6] sm:mr-4
                            sm:vsm:mr-1.5 
                            md:h-[44px] md:text-[30px]
                            md:leading-[38px] md:vsm:text-[24px]
                            lg:text-[30px]
                            lg:leading-[60px]
                            xl:text-[36px]"
      >
        История
      </span>
      <div
        className="flex h-[44px] w-auto items-center rounded-[16px] border border-active-btn-white px-[2px] 
                        md:hidden"
      >
        {historyCategories.map((h) => {
          return <HistoryNavButton icon={h.icon} id={h.id} title={h.title} key={h.id} />
        })}
      </div>
      <div className="w-full md:block lg:hidden">
        <HistoryCategorySelect defaultValue="defaultOption" disabled> 
          <HistoryCategorySelectTrigger className="">
            <HistoryCategorySelectValue placeholder="Истории" />
          </HistoryCategorySelectTrigger>
          <HistoryCategorySelectContent className="">
            <HistoryCategorySelectGroup>
              <HistoryCategorySelectItem value="defaultOption">
                <div className="flex items-center">
                  <SwitchHistoryCategoryIcon icon="text" />
                  <span className="ml-1">Мои тексты</span>
                </div>
              </HistoryCategorySelectItem>
              <HistoryCategorySelectItem value="2">
                <div className="flex items-center">
                  <SwitchHistoryCategoryIcon icon="pic" />
                  <span className="ml-1">Мои изображения</span>
                </div>
              </HistoryCategorySelectItem>
              <HistoryCategorySelectItem value="3">
                <div className="flex items-center">
                  <SwitchHistoryCategoryIcon icon="magic" />
                  <span className="ml-1">Моя обработка</span>
                </div>
              </HistoryCategorySelectItem>
            </HistoryCategorySelectGroup>
          </HistoryCategorySelectContent>
        </HistoryCategorySelect>
      </div>
        <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="hostoryNewDoc" variant="hostoryNewDoc" className='cursor-not-allowed'>
              <SwitchHistoryCategoryIcon icon="newDoc" />
              <span>Новый документ</span>
            </Button>
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
}
