'use client'
import { memo } from 'react'
import { ChangeAiModel } from './ChangeAiModel'
import { Settings } from './buttons/Settings'
import { ShareDocument } from './buttons/ShareDocument'
import { Title } from './title'
import { GetUserInfoQuery } from 'generated'

export const Heading = memo(function Heading(props : {
    userInfo: GetUserInfoQuery
    userId: string 
}) {

    return (
        <div className="flex h-[68px] w-full items-center justify-between px-[24px] py-[12px]">
        
        <Title title='новый документ'/>

        <div className="flex items-center">
            <ChangeAiModel userId={props.userId} userInfo={props.userInfo}/>
            <div className="flex w-[88px] items-center justify-between">
            <ShareDocument callBack={() => {}}/>
            <Settings callBack={() => {}}/>
            </div>
        </div>
        </div>
    )
}
)
