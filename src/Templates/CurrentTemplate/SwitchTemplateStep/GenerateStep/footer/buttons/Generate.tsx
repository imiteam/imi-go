"use client"
import { Button } from "../../../../../../common/UIkit/button"
import { memo } from "react"

export const Generate = memo(function Generate(){

    return (
            <Button variant={'tempGenerate'} size="tempGenerate" onClick={() => {}}>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.8333 1.66699L1.41118 10.5735C1.12051 10.9223 0.975169 11.0967 0.972948 11.244C0.971017 11.3721 1.02808 11.4939 1.12768 11.5744C1.24226 11.667 1.46928 11.667 1.92333 11.667H7.99997L7.16663 18.3337L14.5888 9.42712C14.8794 9.07831 15.0248 8.9039 15.027 8.75661C15.0289 8.62856 14.9719 8.50674 14.8723 8.42625C14.7577 8.33366 14.5307 8.33366 14.0766 8.33366H7.99997L8.8333 1.66699Z"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            <span>Сгенерировать</span>
        </Button>
    )
})
