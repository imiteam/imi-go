
import Image from 'next/image'
import React from 'react'


export default function PromtMessage(props: {proptTitle : string, promtImage ?: string}) {
// console.log(props.promtImage, "promtImage")
return (
    <div className={`mb-[8px] flex  h-auto min-h-["56px"] w-full items-center rounded-[20px] p-[12px] pr-[6px]`}>
    <div className="flex size-full flex-col">
        <div className="flex size-full">
        <div className="flex size-full items-start">
            <div className="mr-[12px] flex h-full w-[30px] items-start">
                <Image
                src={'https://imi-front.imgix.net/uploads/' + props.promtImage} 
                width={30}
                height={30}
                alt="avatarIMI"
                className="relative md:rounded-[10px] md:vsm:rounded-[8px] lg:top-[2px] lg:rounded-[10px] xl:top-[3px]"
            />
            </div> 
            <span
                className=" mr-[12px] flex w-full items-center font-TTNormsRegular text-heading-text-lite
                                dark:text-heading-text-dark md:text-[12px] md:leading-[18px] lg:text-[12px] lg:leading-[24px]
                                xl:text-[14px] xl:leading-[24px] relative top-2.5"
            >
                {props.proptTitle}
            </span>
        </div>
        </div>
    </div>
    </div>
)
}
