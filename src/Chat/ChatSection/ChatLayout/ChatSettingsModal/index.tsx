import {Slider} from './slider'
import {
  ChatModalSelect,
  ChatModalSelectContent,
  ChatModalSelectGroup,
  ChatModalSelectItem,
  ChatModalSelectTrigger,
  ChatModalSelectValue,
} from '../../../../common/UIkit/chatModalSelect'
import {Dialog, DialogContent} from '../../../../common/UIkit/modal'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../../common/UIkit/tooltip'
import Image from 'next/image'
import {memo, useEffect, useState} from 'react'
import ruLang from '../../../../../public/assets/ru.svg'
import {useChatStore} from '../../../lib/useChatStore'
import InstructionsToggle from './instructionsToggle'
import { HideChatSettingsIcon } from './icon_components/HideChatSettingsIcon'
import { ModalSubpageButton } from './buttons/ModalSubpageButton'
import { ChatModelsNavButton } from './buttons/ChatModelsNavButton'
import { OkButton } from './buttons/OkButton'
import { CancelButton } from './buttons/CancelButton'

export const ChatSettingsModal = memo(function ChatSettingsModal() {
  const {
    // @ts-ignore
    isShowChatSettings,
    setHideChatSettings,
    activeModalSubPage,
    setActiveModalSubPage,
    activeModel,
    setActiveModel,
    getInstructions,
    setGetInstructions,
  } = useChatStore()

  // slider sets

  const [changedWordsCount, setChangedWordsCount] = useState<number>(0.75)
  const [sliderValue, setSliderValue] = useState<number>(2)
  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]! + 1)
  }
  useEffect(() => {
    setChangedWordsCount(0.25 * sliderValue)
  }, [sliderValue])
  const mockAiModelsData = [
    {
      id: 'off',
      title: 'Отключено',
    },
    {
      id: 'IMI',
      title: 'IMI',
    },
    {
      id: 'DALL',
      title: 'DALL•E v3',
    },
    {
      id: 'Midj',
      title: 'Midjourney',
    },
  ]
  return (
    <Dialog open={isShowChatSettings}>
      <DialogContent className="flex items-center justify-center">
        {activeModalSubPage === 'basic' ? (
          <div
            className="relative flex h-[437px] w-[400px] flex-col rounded-[20px] bg-[#EDF2F6] 
              dark:bg-[#21242C] vsm:h-[390px] vsm:w-full"
            style={{justifyContent: 'space-around'}}
          >
            <div
              className="flex h-[46px] w-full items-center justify-between px-6 pt-4
                              vsm:px-3 vsm:py-2"
            >
              <span
                className="font-TTNormsBold text-[20px] leading-[30px] text-[#101828] dark:text-[#F5F5F6] 
                vsm:text-[16px]"
              >
                Настройки чата
              </span>
              <HideChatSettingsIcon callBack={() => setHideChatSettings()} />
            </div>
            <div
              className="flex h-[43px] w-full items-end justify-start gap-3 border-b border-b-[#DAE3E9] pl-5 pt-4 dark:border-b-[#17181C]
              vsm:h-[25px] vsm:px-2.5 vsm:pt-2"
            >
              
              <ModalSubpageButton
                title="Основные"
                activeBtn={activeModalSubPage}
                callBack={setActiveModalSubPage}
                btnID="basic"
              />
              <ModalSubpageButton
                title="Пользовательская инструкция"
                activeBtn={activeModalSubPage}
                callBack={setActiveModalSubPage}
                btnID="userInstructions"
              />
            </div>
            <div
              className="flex h-[263px] w-full flex-col gap-6 px-6 py-5
                               vsm:h-[213px] vsm:px-3 vsm:py-2.5"
            >
              <div className="flex h-[64px] w-full flex-col items-start justify-center">
                <span
                  className="mb-1.5 font-TTNormsMedium text-[14px] leading-[14px] text-[#2D384B] dark:text-[#F5F5F6]
                  vsm:text-[12px]"
                >
                  Язык чата
                </span>
                <ChatModalSelect defaultValue="defaultOption" disabled>
                  <ChatModalSelectTrigger
                    className="h-[44px] w-full rounded-[12px] font-TTNormsMedium text-[16px] leading-[19px] text-heading-text-lite
                                                  dark:text-heading-text-dark
                                                  md:text-[14px]
                                                  md:vsm:text-[12px]"
                  >
                    <ChatModalSelectValue placeholder="язык" />
                  </ChatModalSelectTrigger>
                  <ChatModalSelectContent className="">
                    <ChatModalSelectGroup>
                      <ChatModalSelectItem value="defaultOption" style={{display: 'flex'}}>
                        <div className="flex items-center  md:text-[14px] md:vsm:text-[12px]">
                          {/* <Image src={ruLang} width={20} height={20} alt="ru" className="mr-[8px]" /> */}
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-[8px]"
                          >
                            <g clip-path="url(#clip0_11746_23743)">
                              <path
                                d="M10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5Z"
                                fill="white"
                              />
                              <path
                                d="M19.3783 13.978C19.7802 12.8946 20.0002 11.7229 20.0002 10.4997C20.0002 9.27652 19.7802 8.1048 19.3783 7.02148H0.622236C0.220283 8.1048 0.000244141 9.27652 0.000244141 10.4997C0.000244141 11.7229 0.220283 12.8946 0.622236 13.978L10.0002 14.8475L19.3783 13.978Z"
                                fill="#0052B4"
                              />
                              <path
                                d="M10.0003 20.4993C14.3 20.4993 17.9654 17.7856 19.3783 13.9775H0.622314C2.03524 17.7856 5.70067 20.4993 10.0003 20.4993Z"
                                fill="#D80027"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_11746_23743">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>Русский</span>
                        </div>
                      </ChatModalSelectItem>
                      <ChatModalSelectItem value="Английский" style={{display: 'flex'}}>
                        <div className="flex items-center  md:text-[14px] md:vsm:text-[12px]">
                          <Image src={ruLang} width={20} height={20} alt="ru" className="mr-[8px]" />
                          <span>Английский</span>
                        </div>
                      </ChatModalSelectItem>
                    </ChatModalSelectGroup>
                  </ChatModalSelectContent>
                </ChatModalSelect>
              </div>
              <div className="flex h-[62px] w-full flex-col items-start justify-center">
                <span
                  className="mb-1.5 font-TTNormsMedium text-[14px] leading-[14px] text-[#2D384B] dark:text-[#F5F5F6] 
                  vsm:text-[12px]"
                >
                  Генерация изображений
                </span>
                <div className="flex h-10 w-full items-center rounded-[12px] bg-[#DAE3E9] p-[3px] dark:bg-[#000000]">
                  {mockAiModelsData.map((m) => {
                    return (
                      <ChatModelsNavButton
                        activeBtn={activeModel}
                        title={m.title}
                        key={m.id}
                        btnID={m.id}
                        // @ts-ignore
                        callBack={setActiveModel}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="flex h-[49px] w-full cursor-not-allowed flex-col items-start justify-center">
                <span className="mb-4 font-TTNormsMedium text-[14px] leading-[14px] text-[#2D384B] dark:text-[#F5F5F6]">
                  Креатив: {changedWordsCount}
                </span>
                <Slider defaultValue={[2]} max={5} step={1} onValueChange={handleSliderChange} disabled />
              </div>
            </div>
            <div
              className="flex h-[84px] w-full items-center border-t border-t-[#DAE3E9] px-6 py-5 dark:border-t-[#17181C]
                            vsm:border-b-0 vsm:px-3 vsm:py-2.5"
            >
              <OkButton/>
              <CancelButton title="Отмена" callBack={setHideChatSettings} />
            </div>
          </div>
        ) : (
          <div
            className="flex h-[470px] w-[400px] flex-col rounded-[20px] bg-[#EDF2F6] dark:bg-[#21242C] 
              vsm:h-[470px] vsm:w-full"
            style={{justifyContent: 'space-around'}}
          >
            <div
              className="flex h-[46px] w-full items-center justify-between px-6 pt-4
                              vsm:px-4 vsm:py-3"
            >
              <span
                className="font-TTNormsBold text-[20px] leading-[30px] text-[#101828] dark:text-[#F5F5F6]
                vsm:text-[16px]"
              >
                Настройки чата
              </span>
              <HideChatSettingsIcon callBack={() => setHideChatSettings()} />
            </div>
            <div
              className="flex h-[43px] w-full items-end justify-start gap-3 border-b border-b-[#DAE3E9] pl-5 pt-4 dark:border-b-[#17181C]
                              vsm:h-[25px] vsm:px-2.5 vsm:pt-2"
            >
              <ModalSubpageButton
                title="Основные"
                activeBtn={activeModalSubPage}
                // @ts-ignore
                callBack={setActiveModalSubPage}
                btnID="basic"
              />
              <ModalSubpageButton
                title="Пользовательская инструкция"
                activeBtn={activeModalSubPage}
                // @ts-ignore
                callBack={setActiveModalSubPage}
                btnID="userInstructions"
              />
            </div>
            <div
              className="flex h-[296px] w-full flex-col gap-6 px-6 py-5 
                            vsm:h-[275px] vsm:px-3 vsm:py-2.5"
            >
              <div className="flex h-[28px] w-full items-start justify-between">
                <span
                  className="mb-1.5 font-TTNormsMedium text-[14px] leading-[14px] text-[#000000] dark:text-[#F5F5F6] 
                                  vsm:text-[12px]"
                >
                  Включить индивидуальную инструкцию для всех новых пользовательских чатов
                </span>
                <div className="flex h-5 w-9 items-center rounded-full bg-[#DAE3E9] p-0.5 dark:bg-[#155EEF] ">
                  <InstructionsToggle activeBtnId={getInstructions} id={false} callBack={setGetInstructions} />
                  <InstructionsToggle activeBtnId={getInstructions} id={true} callBack={setGetInstructions} />
                </div>
              </div>
              <div className="flex h-[90px] w-full flex-col items-start justify-center">
                <div className="mb-1.5 flex h-4 w-full items-end justify-start">
                  <span
                    className="font-TTNormsMedium text-[14px] leading-[14px] text-[#2D384B] dark:text-[#F5F5F6] 
                                    vsm:text-[12px]"
                  >
                    Расскажите о себе
                  </span>
                  <div className="ml-[10px] w-[13px]">
                    <TooltipProvider delayDuration={150}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="block w-[13px]">
                            {/* <Image src={question} alt="question" width={13} height={13} /> */}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_9598_2281)">
                                <path
                                  d="M6.05992 6.00016C6.21665 5.55461 6.52602 5.1789 6.93322 4.93958C7.34042 4.70027 7.81918 4.61279 8.2847 4.69264C8.75022 4.77249 9.17246 5.01451 9.47664 5.37585C9.78081 5.73718 9.94729 6.19451 9.94659 6.66683C9.94659 8.00016 7.94659 8.66683 7.94659 8.66683M7.99992 11.3335H8.00659M14.6666 8.00016C14.6666 11.6821 11.6818 14.6668 7.99992 14.6668C4.31802 14.6668 1.33325 11.6821 1.33325 8.00016C1.33325 4.31826 4.31802 1.3335 7.99992 1.3335C11.6818 1.3335 14.6666 4.31826 14.6666 8.00016Z"
                                  stroke="#98A2B3"
                                  stroke-width="1.33333"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_9598_2281">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
                          <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000] vsm:text-[12px]">
                            Расскажи кто по жизни
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                <input
                  className="h-[68px] w-full cursor-not-allowed rounded-[12px] bg-[#FFFFFF] px-3.5 py-3 text-[14px] dark:bg-[#17181C] vsm:text-[12px]"
                  disabled
                />
              </div>
              <div className="flex h-[90px] w-full flex-col items-start justify-center">
                <div className="mb-1.5 flex h-4 w-full items-end justify-start">
                  <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#000000] dark:text-[#FFFFFF] vsm:text-[12px]">
                    Каким образом бы вы желали, чтобы он отвечал?
                  </span>
                  <div className="ml-[10px] w-[13px]">
                    <TooltipProvider delayDuration={150}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="block w-[13px]">
                            {/* <Image src={question} alt="question" width={13} height={13} /> */}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_9598_2281)">
                                <path
                                  d="M6.05992 6.00016C6.21665 5.55461 6.52602 5.1789 6.93322 4.93958C7.34042 4.70027 7.81918 4.61279 8.2847 4.69264C8.75022 4.77249 9.17246 5.01451 9.47664 5.37585C9.78081 5.73718 9.94729 6.19451 9.94659 6.66683C9.94659 8.00016 7.94659 8.66683 7.94659 8.66683M7.99992 11.3335H8.00659M14.6666 8.00016C14.6666 11.6821 11.6818 14.6668 7.99992 14.6668C4.31802 14.6668 1.33325 11.6821 1.33325 8.00016C1.33325 4.31826 4.31802 1.3335 7.99992 1.3335C11.6818 1.3335 14.6666 4.31826 14.6666 8.00016Z"
                                  stroke="#98A2B3"
                                  stroke-width="1.33333"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_9598_2281">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
                          <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000] vsm:text-[12px]">
                            По какой фене ботать нейронке ?
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                <input
                  className="h-[68px] w-full cursor-not-allowed rounded-[12px] bg-[#FFFFFF] px-3.5 py-3 text-[14px] dark:bg-[#17181C] vsm:text-[12px]"
                  disabled
                />
              </div>
            </div>
            <div
              className="flex h-[84px] w-full items-center border-t border-t-[#DAE3E9] px-6 py-5 dark:border-t-[#17181C]
                              vsm:border-b-0 vsm:px-3 vsm:py-2.5"
            >
              <OkButton/>
              <CancelButton title="Отмена" callBack={setHideChatSettings} />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
})
