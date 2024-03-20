"use client"

import { memo } from "react"

export const IMIavatarIcon = memo(function IMIavatarIcon(){
    return (
        <div className="w-[57px] h-[45px] md:size-[55px] rounded-[16px] mr-[12px] md:hidden lg:hidden xl:mr-[16px] xl:block">
            <svg 
                width="45"
                height="45"
                viewBox="0 0 65 65" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="rounded-[16px] gradientButton">
            
                <path d="M0 20C0 8.9543 8.95431 0 20 0H45C56.0457 0 65 8.95431 65 20V45C65 56.0457 56.0457 65 45 65H20C8.9543 65 0 56.0457 0 45V20Z" fill=""/>
            
                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 24H35.5L32.5 36H34.5L37.25 25H37.9999V41H39.9999V24H38.9999H37.9999H37.5L37.5 24ZM44.9999 24H42.9999V41H44.9999V24Z" fill="white"/>
                <rect x="31" y="35" width="2" height="1" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 24H29.5L32.5 36H30.5L27.75 25H27.0001V41H25.0001V24H26.0001H27.0001H27.5L27.5 24ZM20.0001 24H22.0001V41H20.0001V24Z" fill="white"/>
                <defs>
                </defs>
            </svg>
        </div>
    )
})
