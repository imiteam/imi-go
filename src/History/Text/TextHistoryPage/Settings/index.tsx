import {Button} from '../../../../common/UIkit/button'
import SearchInput from './SearchInput'
import {
  HistoryTypeSelect,
  HistoryTypeSelectContent,
  HistoryTypeSelectGroup,
  HistoryTypeSelectItem,
  HistoryTypeSelectTrigger,
  HistoryTypeSelectValue,
} from '../../../../common/UIkit/HistoryTypeSelect'
import { SwitchHistoryTextIcon } from '../common/SwitchHistoryTextIcon'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'common/UIkit/tooltip'

export default function Settings({handleChange}: {handleChange: (value: string) => void}) {
  return (
    <div className="mt-3 flex size-full flex-col">
      <div className="flex h-[36px] w-full items-center">
        <SearchInput />
        <div className="vsm:hidden">
          <HistoryTypeSelect onValueChange={(e) => handleChange(e)} disabled>
            <HistoryTypeSelectTrigger className="">
              <TooltipProvider delayDuration={150}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center">
                      <SwitchHistoryTextIcon icon="typeSelect" />
                      <HistoryTypeSelectValue placeholder="Типы" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
                    <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                      В разработке
                    </span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </HistoryTypeSelectTrigger>
            <HistoryTypeSelectContent className="">
              <HistoryTypeSelectGroup>
                <HistoryTypeSelectItem value="all">
                  <div className="flex items-center">
                    <span className="ml-1">Все</span>
                  </div>
                </HistoryTypeSelectItem>
                <HistoryTypeSelectItem value="template">
                  <div className="flex items-center">
                    <span className="ml-1">Шаблоны</span>
                  </div>
                </HistoryTypeSelectItem>
                <HistoryTypeSelectItem value="chat">
                  <div className="flex items-center">
                    <span className="ml-1">Чаты</span>
                  </div>
                </HistoryTypeSelectItem>
                <HistoryTypeSelectItem value="doc">
                  <div className="flex items-center">
                    <span className="ml-1">Документы</span>
                  </div>
                </HistoryTypeSelectItem>
              </HistoryTypeSelectGroup>
            </HistoryTypeSelectContent>
          </HistoryTypeSelect>
        </div>
        <Button size="hostoryNewDocMob" variant="hostoryNewDocMob">
          <SwitchHistoryTextIcon icon="newDoc" />
          <span>Документ</span>
        </Button>
      </div>
      <div className="mt-4 md:hidden md:vsm:block lg:hidden">
        <HistoryTypeSelect onValueChange={(e) => handleChange(e)}>
          <HistoryTypeSelectTrigger className="">
            <div className="flex items-center">
              <SwitchHistoryTextIcon icon="typeSelect" />
              <HistoryTypeSelectValue placeholder="Типы" />
            </div>
          </HistoryTypeSelectTrigger>
          <HistoryTypeSelectContent className="">
            <HistoryTypeSelectGroup>
              <HistoryTypeSelectItem value="all">
                <div className="flex items-center">
                  <span className="ml-1">Все</span>
                </div>
              </HistoryTypeSelectItem>
              <HistoryTypeSelectItem value="template">
                <div className="flex items-center">
                  <span className="ml-1">Шаблоны</span>
                </div>
              </HistoryTypeSelectItem>
              <HistoryTypeSelectItem value="chat">
                <div className="flex items-center">
                  <span className="ml-1">Чаты</span>
                </div>
              </HistoryTypeSelectItem>
              <HistoryTypeSelectItem value="doc">
                <div className="flex items-center">
                  <span className="ml-1">Документы</span>
                </div>
              </HistoryTypeSelectItem>
            </HistoryTypeSelectGroup>
          </HistoryTypeSelectContent>
        </HistoryTypeSelect>
      </div>
    </div>
  )
}
