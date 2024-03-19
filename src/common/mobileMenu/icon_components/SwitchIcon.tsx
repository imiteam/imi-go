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
    case "templatesMob":
      return props.isActive ? (
        <Image alt="tempIcon" src={tempIcon} className="" />
      ) : (
        <div className="mr-3">
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M3.5 21.5V16.5M3.5 6.5V1.5M1 4H6M1 19H6M12 2.5L10.2658 7.00886C9.98381 7.74209 9.8428 8.10871 9.62353 8.41709C9.42919 8.6904 9.1904 8.92919 8.91709 9.12353C8.60871 9.34281 8.24209 9.48381 7.50886 9.76582L3 11.5L7.50886 13.2342C8.24209 13.5162 8.60871 13.6572 8.91709 13.8765C9.1904 14.0708 9.42919 14.3096 9.62353 14.5829C9.84281 14.8913 9.98381 15.2579 10.2658 15.9911L12 20.5L13.7342 15.9911C14.0162 15.2579 14.1572 14.8913 14.3765 14.5829C14.5708 14.3096 14.8096 14.0708 15.0829 13.8765C15.3913 13.6572 15.7579 13.5162 16.4911 13.2342L21 11.5L16.4911 9.76582C15.7579 9.48381 15.3913 9.3428 15.0829 9.12353C14.8096 8.92919 14.5708 8.6904 14.3765 8.41709C14.1572 8.10871 14.0162 7.74209 13.7342 7.00886L12 2.5Z"
              stroke="#98A2B3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case "chatMob":
      return props.isActive ? (
        <svg 
        width="46" 
        height="41" 
        viewBox="0 0 46 41" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        >
          <g filter="url(#filter0_ddddd_12786_11629)">
          <path d="M19.5 21C19.5 21 20.8125 22.5 23 22.5C25.1875 22.5 26.5 21 26.5 21M25.75 16H25.76M20.25 16H20.26M18 26.5V28.8355C18 29.3684 18 29.6348 18.1092 29.7716C18.2042 29.8906 18.3483 29.9599 18.5005 29.9597C18.6756 29.9595 18.8837 29.7931 19.2998 29.4602L21.6852 27.5518C22.1725 27.162 22.4162 26.9671 22.6875 26.8285C22.9282 26.7055 23.1844 26.6156 23.4492 26.5613C23.7477 26.5 24.0597 26.5 24.6837 26.5H27.2C28.8802 26.5 29.7202 26.5 30.362 26.173C30.9265 25.8854 31.3854 25.4265 31.673 24.862C32 24.2202 32 23.3802 32 21.7V16.3C32 14.6198 32 13.7798 31.673 13.138C31.3854 12.5735 30.9265 12.1146 30.362 11.827C29.7202 11.5 28.8802 11.5 27.2 11.5H18.8C17.1198 11.5 16.2798 11.5 15.638 11.827C15.0735 12.1146 14.6146 12.5735 14.327 13.138C14 13.7798 14 14.6198 14 16.3V22.5C14 23.43 14 23.895 14.1022 24.2765C14.3796 25.3117 15.1883 26.1204 16.2235 26.3978C16.605 26.5 17.07 26.5 18 26.5ZM26.25 16C26.25 16.2761 26.0261 16.5 25.75 16.5C25.4739 16.5 25.25 16.2761 25.25 16C25.25 15.7239 25.4739 15.5 25.75 15.5C26.0261 15.5 26.25 15.7239 26.25 16ZM20.75 16C20.75 16.2761 20.5261 16.5 20.25 16.5C19.9739 16.5 19.75 16.2761 19.75 16C19.75 15.7239 19.9739 15.5 20.25 15.5C20.5261 15.5 20.75 15.7239 20.75 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
          <filter id="filter0_ddddd_12786_11629" x="0.25" y="-2.25" width="45.5" height="45.9597" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="6.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12786_11629"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.4875 0 0 0 0 0.658333 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_12786_11629" result="effect2_dropShadow_12786_11629"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="5.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow_12786_11629" result="effect3_dropShadow_12786_11629"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="1"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow_12786_11629" result="effect4_dropShadow_12786_11629"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow_12786_11629" result="effect5_dropShadow_12786_11629"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_12786_11629" result="shape"/>
          </filter>
          </defs>
        </svg>
      ) : (
        <div className="mr-3">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M6.5 11C6.5 11 7.8125 12.5 10 12.5C12.1875 12.5 13.5 11 13.5 11M12.75 6H12.76M7.25 6H7.26M5 16.5V18.8355C5 19.3684 5 19.6348 5.10923 19.7716C5.20422 19.8906 5.34827 19.9599 5.50054 19.9597C5.67563 19.9595 5.88367 19.7931 6.29976 19.4602L8.68521 17.5518C9.17252 17.162 9.41617 16.9671 9.68749 16.8285C9.9282 16.7055 10.1844 16.6156 10.4492 16.5613C10.7477 16.5 11.0597 16.5 11.6837 16.5H14.2C15.8802 16.5 16.7202 16.5 17.362 16.173C17.9265 15.8854 18.3854 15.4265 18.673 14.862C19 14.2202 19 13.3802 19 11.7V6.3C19 4.61984 19 3.77976 18.673 3.13803C18.3854 2.57354 17.9265 2.1146 17.362 1.82698C16.7202 1.5 15.8802 1.5 14.2 1.5H5.8C4.11984 1.5 3.27976 1.5 2.63803 1.82698C2.07354 2.1146 1.6146 2.57354 1.32698 3.13803C1 3.77976 1 4.61984 1 6.3V12.5C1 13.43 1 13.895 1.10222 14.2765C1.37962 15.3117 2.18827 16.1204 3.22354 16.3978C3.60504 16.5 4.07003 16.5 5 16.5ZM13.25 6C13.25 6.27614 13.0261 6.5 12.75 6.5C12.4739 6.5 12.25 6.27614 12.25 6C12.25 5.72386 12.4739 5.5 12.75 5.5C13.0261 5.5 13.25 5.72386 13.25 6ZM7.75 6C7.75 6.27614 7.52614 6.5 7.25 6.5C6.97386 6.5 6.75 6.27614 6.75 6C6.75 5.72386 6.97386 5.5 7.25 5.5C7.52614 5.5 7.75 5.72386 7.75 6Z"
              stroke="#98A2B3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case "learningMob":
      return props.isActive ? (
        <Image alt="learningIcon" src={learningIcon} className="" />
      ) : (
        <div className="mr-3">
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M7.46445 7.96448L3.92893 4.42896M3.92893 18.5711L7.46448 15.0355M14.5355 15.0355L18.0711 18.571M18.0711 4.42891L14.5355 7.96445M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5ZM16 11.5C16 14.2614 13.7614 16.5 11 16.5C8.23858 16.5 6 14.2614 6 11.5C6 8.73858 8.23858 6.5 11 6.5C13.7614 6.5 16 8.73858 16 11.5Z"
              stroke="#98A2B3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    case "historyMob":
      return props.isActive ? (
        <svg width="50" height="43" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_ddddd_12706_11643)">
        <path d="M33.7 20L31.7005 22L29.7 20M31.9451 21.5C31.9814 21.1717 32 20.838 32 20.5C32 15.5294 27.9706 11.5 23 11.5C18.0294 11.5 14 15.5294 14 20.5C14 25.4706 18.0294 29.5 23 29.5C25.8273 29.5 28.35 28.1963 30 26.1573M23 15.5V20.5L26 22.5" stroke="white" stroke-width="2.0" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
        <filter id="filter0_ddddd_12706_11643" x="0.25" y="-2.25" width="47.2" height="45.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12706_11643"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.4875 0 0 0 0 0.658333 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_12706_11643" result="effect2_dropShadow_12706_11643"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_12706_11643" result="effect3_dropShadow_12706_11643"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.4 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect3_dropShadow_12706_11643" result="effect4_dropShadow_12706_11643"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="6"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.334862 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect4_dropShadow_12706_11643" result="effect5_dropShadow_12706_11643"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_12706_11643" result="shape"/>
        </filter>
        </defs>
      </svg>
      ) : (
        <div className="mr-3">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M20.7 10L18.7005 12L16.7 10M18.9451 11.5C18.9814 11.1717 19 10.838 19 10.5C19 5.52944 14.9706 1.5 10 1.5C5.02944 1.5 1 5.52944 1 10.5C1 15.4706 5.02944 19.5 10 19.5C12.8273 19.5 15.35 18.1963 17 16.1573M10 5.5V10.5L13 12.5"
              stroke="#98A2B3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
  }
});
