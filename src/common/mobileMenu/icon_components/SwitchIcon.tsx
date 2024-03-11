"use client";

import { memo } from "react";
import Image from "next/image";
import tempIcon from "../../../../public/assets/tempIcon.png";
import chatIcon from "../../../../public/assets/chatIcon.png";
import learningIcon from "../../../../public/assets/learningIcon.png";
import hystoryIcon from "../../../../public/assets/hystoryIcon.png";

    export const SwitchIcon = memo(function SwitchIcon(props: {
    isActive: boolean;
    iconName: string;
    }) {
    switch (props.iconName) {
        case 'templatesMob':
        return props.isActive ? (
            <Image alt="tempIcon" src={tempIcon} className="" />
        ) : (
            <div className="mr-3">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path
                d="M3.5 21.5V16.5M3.5 6.5V1.5M1 4H6M1 19H6M12 2.5L10.2658 7.00886C9.98381 7.74209 9.8428 8.10871 9.62353 8.41709C9.42919 8.6904 9.1904 8.92919 8.91709 9.12353C8.60871 9.34281 8.24209 9.48381 7.50886 9.76582L3 11.5L7.50886 13.2342C8.24209 13.5162 8.60871 13.6572 8.91709 13.8765C9.1904 14.0708 9.42919 14.3096 9.62353 14.5829C9.84281 14.8913 9.98381 15.2579 10.2658 15.9911L12 20.5L13.7342 15.9911C14.0162 15.2579 14.1572 14.8913 14.3765 14.5829C14.5708 14.3096 14.8096 14.0708 15.0829 13.8765C15.3913 13.6572 15.7579 13.5162 16.4911 13.2342L21 11.5L16.4911 9.76582C15.7579 9.48381 15.3913 9.3428 15.0829 9.12353C14.8096 8.92919 14.5708 8.6904 14.3765 8.41709C14.1572 8.10871 14.0162 7.74209 13.7342 7.00886L12 2.5Z"
                stroke="#98A2B3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            </div>
        )
        case 'chatMob':
        return props.isActive ? (
            <Image alt="chatIcon" src={chatIcon} className="" />
        ) : (
            <div className="mr-3">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path
                d="M6.5 11C6.5 11 7.8125 12.5 10 12.5C12.1875 12.5 13.5 11 13.5 11M12.75 6H12.76M7.25 6H7.26M5 16.5V18.8355C5 19.3684 5 19.6348 5.10923 19.7716C5.20422 19.8906 5.34827 19.9599 5.50054 19.9597C5.67563 19.9595 5.88367 19.7931 6.29976 19.4602L8.68521 17.5518C9.17252 17.162 9.41617 16.9671 9.68749 16.8285C9.9282 16.7055 10.1844 16.6156 10.4492 16.5613C10.7477 16.5 11.0597 16.5 11.6837 16.5H14.2C15.8802 16.5 16.7202 16.5 17.362 16.173C17.9265 15.8854 18.3854 15.4265 18.673 14.862C19 14.2202 19 13.3802 19 11.7V6.3C19 4.61984 19 3.77976 18.673 3.13803C18.3854 2.57354 17.9265 2.1146 17.362 1.82698C16.7202 1.5 15.8802 1.5 14.2 1.5H5.8C4.11984 1.5 3.27976 1.5 2.63803 1.82698C2.07354 2.1146 1.6146 2.57354 1.32698 3.13803C1 3.77976 1 4.61984 1 6.3V12.5C1 13.43 1 13.895 1.10222 14.2765C1.37962 15.3117 2.18827 16.1204 3.22354 16.3978C3.60504 16.5 4.07003 16.5 5 16.5ZM13.25 6C13.25 6.27614 13.0261 6.5 12.75 6.5C12.4739 6.5 12.25 6.27614 12.25 6C12.25 5.72386 12.4739 5.5 12.75 5.5C13.0261 5.5 13.25 5.72386 13.25 6ZM7.75 6C7.75 6.27614 7.52614 6.5 7.25 6.5C6.97386 6.5 6.75 6.27614 6.75 6C6.75 5.72386 6.97386 5.5 7.25 5.5C7.52614 5.5 7.75 5.72386 7.75 6Z"
                stroke="#98A2B3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            </div>
        )
        case 'learningMob':
        return props.isActive ? (
            <Image alt="learningIcon" src={learningIcon} className="" />
        ) : (
            <div className="mr-3">
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path
                d="M7.46445 7.96448L3.92893 4.42896M3.92893 18.5711L7.46448 15.0355M14.5355 15.0355L18.0711 18.571M18.0711 4.42891L14.5355 7.96445M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5ZM16 11.5C16 14.2614 13.7614 16.5 11 16.5C8.23858 16.5 6 14.2614 6 11.5C6 8.73858 8.23858 6.5 11 6.5C13.7614 6.5 16 8.73858 16 11.5Z"
                stroke="#98A2B3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            </div>
        )
        case 'historyMob':
        return props.isActive ? (
            <Image alt="hystoryIcon" src={hystoryIcon} className="" />
        ) : (
            <div className="mr-3">
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path
                d="M20.7 10L18.7005 12L16.7 10M18.9451 11.5C18.9814 11.1717 19 10.838 19 10.5C19 5.52944 14.9706 1.5 10 1.5C5.02944 1.5 1 5.52944 1 10.5C1 15.4706 5.02944 19.5 10 19.5C12.8273 19.5 15.35 18.1963 17 16.1573M10 5.5V10.5L13 12.5"
                stroke="#98A2B3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            </div>
        )
    }
});
