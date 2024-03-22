'use client'
import NiceModal from '@ebay/nice-modal-react'
// import { MouseEventHandler } from "react"
import {useSubscription} from '@apollo/client'
import {UserWalletDocument, UserWalletSubscription, UserWalletSubscriptionVariables} from 'generated'
import {memo, useRef} from 'react'
import { ImproveIcon } from './icon_components/ImproveIcon'
import { SendMessageButton } from './buttons/SendMessageButton'

export const FixedInputChat = memo(function FixedInputChat(props: {
  input: string
  handleInputChange: (change: any) => void
  handleSubmit: (submit: any) => void
  isLoading: boolean
  userId: string
  // initiateChat?: string
  // homePageMessage?: string | undefined
}) {
  const formRef = useRef<HTMLFormElement>(null)
  const openUploadModal = () => {
    NiceModal.show('my-antd-modal', {name: 'Nate'})
      .then((e) => console.log(e))
      .catch((e) => console.log(e))
  }
  const {data: userWalletData} = useSubscription<UserWalletSubscription, UserWalletSubscriptionVariables>(
    UserWalletDocument,
    {
      variables: {
        userId: props.userId,
      },
    },
  )
  const isZeroToken = userWalletData?.wallets[0]?.tokens! <= 1

  // useEffect(() => {
  //   if(props.homePageMessage ){
  //     formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  //   }
  // },[props.homePageMessage])
  // TODO: disable open modal on submit
  // TODO: set to all active elements loading state
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!props.isLoading && !isZeroToken) {
          props.handleSubmit(e)
        }
      }}
      className="flex w-full justify-center vsm:px-[4px]"
      ref={formRef}
    >
      <div
        className="flex w-full max-w-[880px] items-center
                      justify-between border border-[#101828] bg-header-bg-lite
                        dark:bg-header-bg-dark md:h-[58px] md:rounded-[16px] md:px-[8px] lg:h-[55px] lg:rounded-[16px]
                        lg:px-[8px] xl:h-[65px] xl:p-[12px]"
      >
        <div className="flex w-full items-center">
          <ImproveIcon/>
          <input
            type="text"
            disabled={props.isLoading}
            className="h-[43px] w-full bg-header-bg-lite font-TTNormsRegular text-[#fff] focus:outline-none placeholder:text-[#98A2B3]
                        dark:bg-header-bg-dark md:pl-[12px] md:pr-[5px] md:text-[14px] md:vsm:pl-[7px]
                        md:vsm:text-[12px] lg:pl-[12px]
                        lg:text-[14px]"
            // xl:w-[507px] xl:text-[16px] lg:w-[400px] md:w-[300px]
            placeholder="Задать вопрос в IMI чат"
            value={props.input}
            onChange={props.handleInputChange}
          />
        </div>
        <div className="float-end flex justify-end md:w-[173px] lg:w-[164px] xl:w-[164px]">
          {/* <div className="flex cursor-pointer items-center" onClick={() => {}}>
          <Icon icon="improve" />
          <span className="p-[6px] font-InterRegular text-[12px] text-[#528BFF] dark:text-[#155EEF] md:hidden">
            Улучшить
          </span>
        </div> */}
          {/*<Icon icon="microphoneInput" />*/}
          {/*<button onClick={() => openUploadModal()} disabled={isLoading}>*/}
          {/*  <Icon icon="uploadInput" />*/}
          {/*</button>*/}

          {/* <Icon icon='settingsInput'/> */}
          <SendMessageButton callBack={() => {}}/>
        </div>
      </div>
    </form>
  )
})
