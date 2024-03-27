"use client"

import { memo } from "react"

export const SendBtnNotion = memo(function SendBtnNotion(props: {
    disabled : boolean
    callBack: () => void
}){
    return (
            <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-[36px] cursor-pointer"
            id="sendBtnNotion"
            onClick={props.disabled ? undefined : props.callBack}
            >
            <g opacity="0.3" filter="url(#filter0_i_10571_24370)">
                <path
                d="M0 12C0 5.37258 5.37258 0 12 0H24C30.6274 0 36 5.37258 36 12V24C36 30.6274 30.6274 36 24 36H12C5.37258 36 0 30.6274 0 24V12Z"
                fill="#0B3BEC"
                />
                <g clip-path="url(#clip0_10571_24370)">
                <path
                    d="M11.7317 18.314L26.7312 18.314M13.3314 10.0151L25.5887 16.1438C27.377 17.0379 27.377 19.59 25.5887 20.4841L13.3314 26.6128C11.398 27.5795 9.26096 25.726 9.94452 23.6753L11.4759 19.0812C11.6419 18.5832 11.6419 18.0447 11.4759 17.5467L9.94452 12.9526C9.26096 10.9019 11.398 9.04843 13.3314 10.0151Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </g>
            </g>
            <defs>
                <filter
                id="filter0_i_10571_24370"
                x="0"
                y="0"
                width="51"
                height="36"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
                >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx="15" />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.94 0 0 0 0 1 0 0 0 0.71 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10571_24370" />
                </filter>
                <clipPath id="clip0_10571_24370">
                <rect width="20" height="20" fill="white" transform="translate(8 8)" />
                </clipPath>
            </defs>
            </svg>
        )
})
