import {Message} from 'ai'
import Logo_IMI from '../../../../../../../public/assets/Logo_IMI.png'
import {CodeBlock} from './codeblock'
import {MemoizedReactMarkdown} from './markdown'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../../../../common/UIkit/tooltip'
import {motion} from 'framer-motion'
import {useTheme} from 'next-themes'
import Image from 'next/image'
import {useEffect} from 'react'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import {useCopyToClipboard} from 'usehooks-ts'
import { PlayMessageIcon } from './icon_components/PlayMessageIcon'
import { RefreshMessageIcon } from './icon_components/RefreshMessageIcon'
import { CopyMessageIcon } from './icon_components/CopyMessageIcon'
import { SettingsMessageIcon } from './icon_components/SettingsMessageIcon'
import { AIMessageAvatarIcon } from './icon_components/AIMessageAvatarIcon'
// import { TooltipMenu, TooltipMenuContent, TooltipMenuProvider, TooltipMenuTrigger } from "components/ui/tooltipMenu"

type AiMessagePropsType = {
  isLastMessage: boolean
  isLoading: boolean
  stop(): void
  reload(): void
  message: Message
  userId: string
}
// для фикса линта
// export default function AiMessage({ isLastMessage, isLoading, stop, reload, message, ...props }: AiMessagePropsType) {
export default function AiMessage({isLastMessage, isLoading, stop, reload, message, userId}: AiMessagePropsType) {
  // TODO: Make loading for message when isLoading

  // TODO: Add styling to tables using css
  const [_copiedText, copy] = useCopyToClipboard()
  const {theme} = useTheme()
  const avatarIMI = Logo_IMI
  useEffect(() => {
    document.documentElement.style.setProperty('--aiMessageIconHoverColor', theme === 'light' ? '#101828' : '#FFFFFF')
    document.documentElement.style.setProperty(
      '--aiMessageIconTooltipMenu',
      theme === 'light' ? '#ffffff10' : '#10182810',
    )
  }, [theme])

  const customStop = async () => {
    const tokens = message.content.length
    await fetch('https://imi-go.ru/used-tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        tokens: tokens,
      }),
    })

    stop()
  }
  // Функция для безопасной обработки строк в children
  const processChildren = (children: React.ReactNode) => {
    if (typeof children === 'string') {
      // Безопасно обрабатываем строку, создавая новую
      return children.replace('`▍`', '▍')
    }
    // Если children не строка, возвращаем её в неизменном виде
    return children
  }
  return (
    <div
      id="AiMessageId"
      className="relative mb-[8px] flex h-auto min-h-[56px] w-full items-center justify-between rounded-[20px] bg-[#F4F7FA] p-[12px]
                    dark:bg-[#17181C66] md:flex-col md:items-start"
    >
      <div className="mb-1 flex">
        <div className="flex size-full items-start">
          <AIMessageAvatarIcon/>
          <span
            className=" mr-[12px] w-full font-TTNormsRegular text-heading-text-lite dark:text-heading-text-dark md:text-[12px]
                          leading-[20px] pt-[7px] md:pt-1 lg:text-[12px] xl:text-[14px]"
          >
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
              <MemoizedReactMarkdown
                className="prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 break-words"
                remarkPlugins={[remarkGfm, remarkMath]}
                components={{
                  p({children}) {
                    return <p className="mb-2 last:mb-0">{children}</p>
                  },
                  // линт
                  // code({ node, inline, className, children, ...props }) {
                  // @ts-ignore
                  code({inline, className, children, ...props}) {
                    // @ts-ignore
                    if (children?.length) {
                      // @ts-ignore
                      if (children[0] === '▍') {
                        return <span className="mt-1 animate-pulse cursor-default">▍</span>
                      }

                      processChildren(children)
                    }

                    const match = /language-(\w+)/.exec(className || '')

                    if (inline) {
                      return (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      )
                    }

                    return (
                      <CodeBlock
                        key={message.id}
                        language={(match && match[1]) || ''}
                        value={String(children).replace(/\n$/, '')}
                        {...props}
                      />
                    )
                  },
                }}
              >
                {message.content}
              </MemoizedReactMarkdown>
              <p></p>
            </motion.div>
          </span>
        </div>

        <div
          id="AiMessageMenu"
          className={`absolute flex h-full items-start ${isLastMessage ? 'right-[18px]' : 'right-3'}  top-2.5 md:hidden`}
        >
          <div
            className={`flex h-[34px] items-center justify-center ${
              isLastMessage ? 'w-[112px]' : 'w-[92px]'
            } items-start rounded-[12px] bg-[#FFFFFF] p-1 pr-0 dark:bg-[#17181C] `}
          >
            {isLoading && isLastMessage ? (
              <button onClick={() => customStop()}>Отмена</button>
            ) : (
              <div className="flex h-[34px] items-center rounded-[12px] bg-[#FFFFFF] dark:bg-[#000000]">
                <TooltipProvider delayDuration={150}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex size-[32px] cursor-pointer items-center justify-center">
                        <PlayMessageIcon />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
                      <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                        В разработке
                      </span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                {isLastMessage ? (
                  <TooltipProvider delayDuration={150}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          onClick={() => reload()}
                          className="flex size-[32px] cursor-pointer items-center justify-center"
                        >
                          <RefreshMessageIcon/>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff] ">
                        <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                          Другой ответ
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <></>
                )}
                <TooltipProvider delayDuration={150}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        onClick={() => copy(message.content)}
                        className="flex size-[32px] cursor-pointer items-center justify-center"
                      >
                        <CopyMessageIcon/>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff] ">
                      <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                        Скопировать
                      </span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={150}>
                  <Tooltip>
                    <TooltipContent className="relative right-[50px] top-[44px] rounded-[8px] bg-[black] dark:bg-[#ffffff] ">
                      <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                        В разработке
                      </span>
                      {/*
                       *ГОТОВЫЕ КНОПКИ БЕЗ ФУНКЦИОНАЛА
                       *className="relative right-[50px] top-[140px] rounded-[8px] border-none bg-[#ffffff] p-1 dark:bg-[black]"
                       * id="tooltipMenu"
                       */}

                      {/* <div className="flex h-auto w-[122px] flex-col ">
                      <NavButton
                        component="aiMessageTooltipButton"
                        title="В редактор"
                        icon="aiMsgGoEditor"
                        callBack={() => {}}
                      />
                      <NavButton
                        component="aiMessageTooltipButton"
                        title="Скачать"
                        icon="aiMsgDownload"
                        callBack={() => {}}
                      />
                      <NavButton
                        component="aiMessageTooltipButton"
                        title="Поделиться"
                        icon="aiMsgShared"
                        callBack={() => {}}
                      />
                    </div> */}
                    </TooltipContent>
                    <TooltipTrigger asChild>
                      <div className="flex size-[32px] cursor-pointer items-center justify-center">
                        <SettingsMessageIcon/>
                      </div>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="ml-10 h-4 w-[48px] md:flex lg:hidden">
        {isLastMessage ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
            onClick={() => reload()}
          >
            <g id="refresh-cw-05">
              <path
                id="Icon"
                d="M15.34 9.67C15.1316 11.6274 14.0225 13.4617 12.1873 14.5213C9.13818 16.2817 5.23929 15.237 3.47888 12.1879L3.29138 11.8631M2.65984 8.33047C2.86819 6.37305 3.97729 4.53875 5.81252 3.47918C8.86164 1.71877 12.7605 2.76347 14.5209 5.81259L14.7084 6.13735M2.62012 13.5498L3.16916 11.5007L5.21819 12.0498M12.782 5.95072L14.8311 6.49976L15.3801 4.45072"
                stroke={theme === 'light' ? '#98A2B3' : '#667085'}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        ) : (
          ''
        )}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => copy(message.content)}
        >
          <g id="copy-05" clip-path="url(#clip0_12549_48566)">
            <path
              id="Icon"
              d="M6 12V14.1C6 14.9401 6 15.3601 6.16349 15.681C6.3073 15.9632 6.53677 16.1927 6.81901 16.3365C7.13988 16.5 7.55992 16.5 8.4 16.5H14.1C14.9401 16.5 15.3601 16.5 15.681 16.3365C15.9632 16.1927 16.1927 15.9632 16.3365 15.681C16.5 15.3601 16.5 14.9401 16.5 14.1V8.4C16.5 7.55992 16.5 7.13988 16.3365 6.81901C16.1927 6.53677 15.9632 6.3073 15.681 6.16349C15.3601 6 14.9401 6 14.1 6H12M3.9 12H9.6C10.4401 12 10.8601 12 11.181 11.8365C11.4632 11.6927 11.6927 11.4632 11.8365 11.181C12 10.8601 12 10.4401 12 9.6V3.9C12 3.05992 12 2.63988 11.8365 2.31901C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H3.9C3.05992 1.5 2.63988 1.5 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.5 2.63988 1.5 3.05992 1.5 3.9V9.6C1.5 10.4401 1.5 10.8601 1.66349 11.181C1.8073 11.4632 2.03677 11.6927 2.31901 11.8365C2.63988 12 3.05992 12 3.9 12Z"
              stroke={theme === 'light' ? '#98A2B3' : '#667085'}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_12549_48566">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}
