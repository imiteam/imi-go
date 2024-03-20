import {motion} from 'framer-motion'
import Image from 'next/image'
// import Link from "next/link"
import {editMessageAction} from '../../../../../graphql/action/index'
import Logo_IMI from '../../../../../../../public/assets/Logo_IMI.png'
import DefaultIcon from '../../../../../../../public/assets/man-person-icon.png'
import {Button} from '../../../../../../common/UIkit/button'
import {useSession} from 'next-auth/react'
import {ChangeEvent, useState} from 'react'
import { EditMyMessageIcon } from './icon_components/EditMyMessageIcon'
type MyMessagePropsType = {
  title: string
  id: string
}

export default function MyMessage(props: MyMessagePropsType) {
  const [editMessage, setEditMessage] = useState<boolean>(false)
  const [editMessageContent, setEditMessageContent] = useState<string>(props.title)

  const {data: session} = useSession()

  const openEditMode = () => {
    setEditMessage(true)
  }
  const closeEditMode = () => {
    setEditMessage(false)
  }

  const onMessageEdit = () => {
    console.log(props.id)
    editMessageAction(props.id, editMessageContent).then(() => setEditMessage(false))
  }

  const avatar = Logo_IMI

  return (
    <div className={`mb-[8px] flex  h-auto min-h-["56px"] w-full items-center rounded-[20px] p-[12px] pr-[6px]`}>
      <div className="flex size-full flex-col">
        <div className="flex size-full">
          <div className="flex size-full items-start">
            <div className="mr-[12px] flex h-full w-[30px] items-start">
              <Image
                src={session?.user?.image ? session.user.image : DefaultIcon}
                width={30}
                height={30}
                alt="avatarIMI"
                className="relative md:rounded-[10px] md:vsm:rounded-[8px] lg:top-[2px] lg:rounded-[10px] xl:top-[3px]"
              />
            </div>
            {editMessage ? (
              <input
                type="text"
                defaultValue={editMessageContent}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setEditMessageContent(event.target.value)}
                className="relative top-[-2px] mr-[12px] flex w-full items-center bg-[#fff] font-TTNormsRegular text-heading-text-lite
                           dark:bg-[#21242C] dark:text-heading-text-dark md:text-[12px] md:leading-[18px] lg:text-[12px] lg:leading-[18px]
                           xl:text-[14px] xl:leading-[20px]"
              />
            ) : (
              <span
                className=" mr-[12px] flex w-full items-center font-TTNormsRegular text-heading-text-lite
                                dark:text-heading-text-dark md:text-[12px] md:leading-[18px] lg:text-[12px] 
                                xl:text-[14px] leading-[20px] pt-[7px]"
              >
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  className="w-full"
                >
                  {editMessageContent}
                </motion.div>
              </span>
            )}
          </div>
          {editMessage ? (
            ''
          ) : (
            <div className="flex h-full w-[48px] items-start pl-[16px]">
              <div
                className="relative bottom-[2px] flex size-[32px] items-center justify-center"
                onClick={() => openEditMode()}
              >
                <EditMyMessageIcon/>
              </div>
            </div>
          )}
        </div>
        {editMessage && (
          <div className="ml-[40px] flex justify-between md:w-[237px] lg:h-[30px] lg:w-[237px] xl:h-[40px] xl:w-[279px]">
            <Button variant={'sendEditMessage'} size="sendEditMessage" onClick={() => onMessageEdit()}>
              <span>Сохранить и отправить</span>
            </Button>
            <Button variant={'cancelEditMessage'} size="cancelEditMessage" onClick={() => closeEditMode()}>
              <span>Отмена</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
