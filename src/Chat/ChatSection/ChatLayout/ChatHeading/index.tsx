import {ChangeAiTextModel, updateChatAction} from '../../../graphql/action'
import cn from 'classnames'
import {Button} from '../../../../common/UIkit//button'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../../common/UIkit/tooltip'
import {GetCurrentPromtQuery, GetUserInfoQuery} from 'generated'
import Image from 'next/image'
import {usePathname, useRouter} from 'next/navigation'
import {useCallback, useRef, useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useClickAway, useWindowSize} from 'react-use'
import {useChatStore} from '../../../lib/useChatStore'
import { EditIcon } from './icon_components/EditIcon'
import { OpenChatSettsIcon } from './icon_components/OpenChatSettsIcon'
import { FullWidthIcon } from './icon_components/FullWidthIcon'
import { ChatMenuButton } from './buttons/ChatMenuButton'
import { ChatSettsButton } from './buttons/ChatSettsButton'
import { ChatFullWidthButton } from './buttons/ChatFullWidthButton'
import { FavoriteChatButton } from './buttons/FavoriteChatButton'
import { DownloadChatButton } from './buttons/DownloadChatButton'
import { IMIavatarIcon } from './icon_components/IMIavatarIcon'

type FormValues = {title: string}

export default function ChatHeading(props: {title: string; userInfo: GetUserInfoQuery; userId: string,systemPromt: GetCurrentPromtQuery | 'absent'}) {
  const {setHideAside, setSheetOpen, setShowChatSettings} = useChatStore()
  const [isEditDisabled, setIsEditDisabled] = useState(true)
  const [changingModel, setChangingModel] = useState<boolean>(false)
  const pathname = usePathname()
  const router = useRouter()
  const {width} = useWindowSize()

  let [favoriteChat, setFavoriteChat] = useState<boolean>(false)
  const chooseFavoriteChat = () => {
    setFavoriteChat(!favoriteChat)
  }
  const {handleSubmit, register} = useForm<FormValues>({
    defaultValues: {
      title: props.title,
    },
    mode: 'onChange', 
  })

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    async (loginData) => {
      try {
        await updateChatAction({chatId: pathname.slice(6), title: loginData.title}).then(() => router.refresh())
        setIsEditDisabled(true)
      } catch (error) {
        console.log(error)
      }
    },
    [pathname],
  )
  
  // сохранение title при клике вне инпута
  const chatTitileRef = useRef<HTMLFormElement | null>(null);
  useClickAway(chatTitileRef, () => {
    if (!isEditDisabled) {
      handleSubmit(onSubmit)();
    }
  });
  // сохранение title при клике вне инпута


  const handleChangeModel = useCallback(
    async (model: string) => {
      try {
        if (props.userInfo.users[0].is_client && (props.userInfo.users[0].plan_id === "07428e4f-6d8f-41ee-95fb-1a11180f5877" || props.userInfo.users[0].plan_id ===  "ee502783-d116-4573-847e-2a8f0fc0f3ef" || props.userInfo.users[0].plan_id ===  "7465baa4-0af8-4a66-a6f2-ef3eb7745f46" || props.userInfo.users[0].plan_id ===  "54b3a722-016b-434b-8fad-6bef28dd3db6" || props.userInfo.users[0].plan_id === "878c5978-89c4-47d6-ae58-0e8fe7231be0")) {
          setChangingModel(true)
          await updateChatAction({chatId: pathname.slice(6), title: props.title, model: model})
          await ChangeAiTextModel({userId: props.userId, model: model})
          window.location.reload()
        }
        return
      } catch (error) {
        console.log(error)
      }
    },
    [pathname, props.title, router],
  )

  // TODO: Fix this!!! Do not dublicate code
  return width >= 550 ? (
    <div
      className="flex w-full items-center justify-between border-b-[1px] border-b-[#DAE3E9] dark:border-b-bg-dark md:h-[60px] md:rounded-t-[16px] md:px-[16px] md:py-[12px] md:sm:px-[12px] md:sm:py-[8px]
        lg:h-[60px] lg:rounded-t-[16px] lg:px-[16px] lg:py-[12px] xl:h-[84px] xl:px-[24px]"
    >
      <div className="flex items-center ">
        {props.systemPromt === "absent" ?
        <IMIavatarIcon/>
        :
        <Image
            src={'https://imi-front.imgix.net/uploads/' + props.systemPromt.roles[0].directus_img?.filename_disk} 
            alt="roleIcon"
            width={57}
            height={45}
            className="md:hidden lg:hidden xl:mr-[16px] xl:block"
          />
        }
        <ChatMenuButton callBack={setSheetOpen}/>
        <form className="contents " onSubmit={handleSubmit(onSubmit)} ref={chatTitileRef}> 
          <input
            className={cn( 
              'w-full rounded-[12px] text-header-bg-lite focus:ring-[#0B3BEC] dark:text-[#fff] sm:ml-[8px] md:font-TTNormsBold md:text-[18px] md:leading-[28px] lg:font-TTNormsBold lg:text-[20px] lg:leading-[30px] xl:font-NeueMachinaBold xl:text-[24px] xl:leading-[32px]',
              {'pl-[8px]  focus:ring-2': !isEditDisabled},
            )}
            defaultValue={props.title}
            disabled={isEditDisabled}
            style={{backgroundColor: isEditDisabled ? 'transparent' : 'gray', opacity: isEditDisabled ? '1' : '0.5'}}
            {...register('title')}
          />
          <EditIcon callBack={() => setIsEditDisabled(false)} />
        </form>
      </div>
      <div className="flex items-center"> 
        <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
              <div className="flex items-center justify-between rounded-[12px] bg-bg-lite p-[4px] dark:bg-bg-dark md:mr-[16px] md:h-[32px] md:w-[121px] md:p-[2px] lg:mr-[12px] lg:h-[40px] lg:w-[134px] xl:mr-[16px] xl:h-[44px] xl:w-[150px]">
              {/*  TODO: Use Enums */}

              <Button variant="defaultToggleBtn" onClick={() => handleChangeModel('gpt-3.5')}>
                <span className="z-10">GPT 3.5</span>
              </Button>
              <div
                className={cn(
                  'absolute rounded-[9px] bg-[#fff] font-TTNormsMedium text-[12px] leading-[14px] text-[#2D384B] transition-transform dark:bg-[#21242C] dark:text-[#CECFD2] md:h-[28px] md:w-[61px] md:rounded-[10px] lg:h-[32px] lg:w-[66px] lg:px-[8px] lg:py-[7px] xl:h-[36px] xl:w-[70px] xl:px-[12px] xl:py-[8px]',
                  {
                    'translate-x-0':
                      !props.userInfo.users[0].is_client || props.userInfo.users[0].ai_text_model === 'gpt-3.5',
                  },
                  {
                    'md:translate-x-[56px] lg:translate-x-[60px] xl:translate-x-[72px]':
                      props.userInfo.users[0].ai_text_model === 'gpt-4' && props.userInfo.users[0].is_client,
                  }
                  
                )}
              >
                {
                  changingModel && 
                  <div className="flex justify-center items-center ">
                    <div
                      className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 md:relative md:top-0.5 md:w-4 md:h-4"
                      style={{ width: "20px", height: "20px" }}
                    ></div>
                  </div>
                }
              </div>
              <Button variant="defaultToggleBtn" onClick={() => handleChangeModel('gpt-4')}>
                <span className="z-10">GPT 4</span>
              </Button>
            </div>
          </TooltipTrigger>
          <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
            <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
              Доступно для PRO тарифа
            </span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
        {/* 
          ниже 4 кнопки шапки чата для десктопа (более 980 пикселей)
          */}
        <div className="flex justify-between md:hidden lg:h-[36px] lg:w-[162px] xl:h-[40px] xl:w-[184px]">
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <FavoriteChatButton
                    callBack={() => {}}
                    isActive={favoriteChat}
                  />
                </span>
              </TooltipTrigger>
              <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
                <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                  В разработке
                </span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <DownloadChatButton callBack={() => {}}  />
                </span>
              </TooltipTrigger>
              <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
                <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                  В разработке
                </span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <ChatSettsButton callBack={setShowChatSettings} />
          <ChatFullWidthButton callBack={setHideAside} />
        </div>
        {/* 
              ниже 4 кнопки шапки чата для десктопа (менее 980 пикселей)
            */}
        <div
          className="flex items-center justify-between md:h-[36px] md:w-[50px] md:sm:h-[36px]
                        md:sm:w-[22px] lg:hidden"
        >
          <OpenChatSettsIcon callBack={setShowChatSettings} />

          <FullWidthIcon callBack={setHideAside} />
        </div>
      </div>
    </div>
  ) : (
    <div
      className="flex h-[82px] w-full items-center justify-between rounded-t-[16px] border-b-[1px] border-b-[#DAE3E9] p-[8px]
                    pr-[16px] dark:border-b-bg-dark"
    >
      {/* 
              ниже  шапка чата для мобилок (менее 550 пикселей)
            */}
      <div className="flex size-full flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex items-center">
            <ChatMenuButton callBack={setSheetOpen} />
            <div className="flex items-center justify-between rounded-[12px] bg-bg-lite p-[4px] dark:bg-bg-dark md:ml-[16px] md:h-[32px] md:w-[121px] md:p-[2px] lg:ml-[12px] lg:h-[40px] lg:w-[134px] xl:mr-[16px] xl:h-[44px] xl:w-[150px]">
              {/*  TODO: Use Enums */}
              <Button variant="defaultToggleBtn" onClick={() => handleChangeModel('gpt-3.5')}>
                <span className="z-10">GPT 3.5</span>
              </Button>
              <div
                className={cn(
                  'absolute rounded-[9px] bg-[#fff] font-TTNormsMedium text-[12px] leading-[14px] text-[#2D384B] transition-transform dark:bg-[#21242C] dark:text-[#CECFD2] md:h-[28px] md:w-[61px] md:rounded-[10px] lg:h-[32px] lg:w-[66px] lg:px-[8px] lg:py-[7px] xl:h-[36px] xl:w-[70px] xl:px-[12px] xl:py-[8px]',
                  {
                    'translate-x-0':
                      !props.userInfo.users[0].is_client || props.userInfo.users[0].ai_text_model === 'gpt-3.5',
                  },
                  {
                    'translate-x-[70px] md:vsm:translate-x-[56px]':
                      props.userInfo.users[0].ai_text_model === 'gpt-4' && props.userInfo.users[0].is_client,
                  }
                )}
              >
                {
                  changingModel && 
                  <div className="flex justify-center items-center ">
                    <div
                      className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 relative top-1.5"
                      style={{ width: "15px", height: "15px" }}
                    ></div>
                  </div>
                }
              </div>
              <Button variant="defaultToggleBtn" onClick={() => handleChangeModel('gpt-4')}>
                <span className="z-10">GPT 4</span>
              </Button>
            </div>
          </div>
          <div
            className="flex items-center justify-between md:h-[36px] md:w-[124px] md:sm:h-[36px]
                                md:sm:w-auto lg:hidden"
          >
            {/* <Icon icon="favoriteChat" />
              <Icon icon="downloadChat" /> */}
            <OpenChatSettsIcon callBack={setShowChatSettings} />
            <FullWidthIcon callBack={setHideAside} />
          </div>
        </div>
        <div className="flex items-center ">
          <form className="contents" onSubmit={handleSubmit(onSubmit)} ref={chatTitileRef}>
            <input
              className={cn(
                'w-full rounded-[12px] text-header-bg-lite dark:text-[#fff] vsm:w-auto sm:ml-[8px] md:font-TTNormsBold md:text-[18px] md:leading-[28px] lg:font-TTNormsBold lg:text-[20px] lg:leading-[30px] xl:font-NeueMachinaBold xl:text-[24px] xl:leading-[32px]',
                {'focus:outline': !isEditDisabled},
              )}
              defaultValue={props.title}
              disabled={isEditDisabled}
              style={{backgroundColor: isEditDisabled ? 'transparent' : 'gray', opacity: isEditDisabled ? '1' : '0.5'}}
              autoFocus
              {...register('title')}
            />
            <EditIcon callBack={() => setIsEditDisabled(false)} />
          </form>
        </div>
      </div>
    </div>
  )
}
