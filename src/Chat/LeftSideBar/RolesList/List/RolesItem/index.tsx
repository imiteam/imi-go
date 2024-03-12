'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
export type chatBotMiniItemPropsType = {
  src?: string | undefined
  title: string | undefined
  chooseRole: () => void
  directus_img: string
  id: number
}

export default function chatBotMiniItem(props: chatBotMiniItemPropsType) {
  return (
    <Link href="#" onClick={(e) => e.preventDefault()}>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <button
          className="z-20 flex cursor-pointer items-center md:h-[38px] md:w-[180px] md:sm:w-full md:sm:px-[25px] md:sm:py-[4px] md:sm:pl-[3px] lg:mt-[4px] lg:h-[38px] lg:w-[192px] lg:px-0
          lg:py-[4px] xl:mt-[8px] xl:w-[248px]"
          onClick={() => props.chooseRole()}
        >
          <Image
          // @ts-ignore
            src={'https://imi-front.imgix.net/uploads/' + props.directus_img.filename_disk} 
            alt="chatBotMiniImage"
            width={30}
            height={30}
            className="md:mr-[8px] lg:mr-[8px] "
          />

          <span
            className="font-TTNormsRegular text-[#475467]
            dark:text-[#94969C] md:text-[12px] md:leading-[18px] md:sm:text-[16px] md:sm:leading-[19px] lg:text-[12px] lg:leading-[18px]
            xl:text-[14px] xl:leading-[19px]"
          >
            {props.title}
          </span>
        </button>
      </motion.div>
    </Link>
  )
}