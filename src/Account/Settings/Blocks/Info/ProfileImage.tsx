'use client'

import DefaultIcon from '../../../../../public/assets/man-person-icon.png'
import Image from 'next/image'
import {useWindowSize} from 'usehooks-ts'
import ProfileReplaceButton from './buttons/ProfileReplaceButton'
import { DeleteProfileIcon } from './icon_components/DeleteProfileIcon'
import ProfileDeleteButton from './buttons/ProfileDeleteButton'


export default function ProfileImage({src}: {src: string}) {
  const {width} = useWindowSize()
  return (
    <div
      className="my-[20px] flex h-[99px] w-full flex-col justify-between
                        md:h-[78px]"
    >
      <span
        className="font-TTNormsMedium text-[16px] leading-[19px] text-template-item-text-default-lite 
                        dark:text-template-item-text-dark 
                        md:text-[14px]"
      >
        Фото профиля
      </span>
      <div className="flex size-full items-end justify-between">
        <Image
          src={src === null ? DefaultIcon : src}
          width={width > 980 ? 64 : 48}
          height={width > 980 ? 64 : 48}
          alt="avatar"
          className="rounded-[24px] md:rounded-[16px]"
        />
        <div className="flex">
          <ProfileDeleteButton title="Удалить"/>
          <ProfileReplaceButton title="Заменить"/>
        </div>
      </div>
    </div>
  )
}