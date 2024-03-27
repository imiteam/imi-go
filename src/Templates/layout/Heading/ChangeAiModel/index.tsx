"use client"

import { ChangeAiTextModel } from "Chat/graphql/action"
import { cn } from "UIkit/lib/utils"
import { Button } from "common/UIkit/button"
import { GetUserInfoQuery } from "generated"
import { memo, useCallback, useState } from "react"

export const ChangeAiModel = memo(function ChangeAiModel(props : {
    userInfo: GetUserInfoQuery
    userId: string
}){
    const [changingModel, setChangingModel] = useState<boolean>(false)
    const handleChangeModel = useCallback(
        async (model: string) => {
          try {
            if (props.userInfo.users[0].is_client && (props.userInfo.users[0].plan_id === "07428e4f-6d8f-41ee-95fb-1a11180f5877" || props.userInfo.users[0].plan_id ===  "ee502783-d116-4573-847e-2a8f0fc0f3ef" || props.userInfo.users[0].plan_id ===  "7465baa4-0af8-4a66-a6f2-ef3eb7745f46" || props.userInfo.users[0].plan_id ===  "54b3a722-016b-434b-8fad-6bef28dd3db6" || props.userInfo.users[0].plan_id === "878c5978-89c4-47d6-ae58-0e8fe7231be0")) {
              setChangingModel(true)
              // await updateChatAction({chatId: pathname.slice(6), title: props.title, model: model})
              await ChangeAiTextModel({userId: props.userId, model: model})
              window.location.reload()
            }
            return
          } catch (error) {
            console.log(error)
          }
        },
        [props.userInfo],
      )

    return (
            <div className="mr-[16px] flex h-[44px] w-[150px] items-center justify-between rounded-[13px] bg-[#DAE3E9] p-[4px] dark:bg-[#000000]">

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
    )
})
