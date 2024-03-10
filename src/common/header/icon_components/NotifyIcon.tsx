"use client";

import { memo } from "react";

export const NotifyIcon = memo(function NotifyIcon() {
  return (
    <div>
      <svg
        width="59"
        height="51"
        viewBox="0 0 59 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative bottom-[7px] left-[7px] cursor-pointer fill-[#2D384B] hover:fill-[#fff]"
      >
        <path d="M0 26.5C0 19.8726 5.37258 14.5 12 14.5H24C30.6274 14.5 36 19.8726 36 26.5V38.5C36 45.1274 30.6274 50.5 24 50.5H12C5.37258 50.5 0 45.1274 0 38.5V26.5Z" />
        <path
          d="M15.7952 40.0001C16.3828 40.5187 17.1547 40.8334 18.0001 40.8334C18.8454 40.8334 19.6173 40.5187 20.2049 40.0001M23.0001 29.1667C23.0001 27.8407 22.4733 26.5689 21.5356 25.6312C20.5979 24.6935 19.3261 24.1667 18.0001 24.1667C16.674 24.1667 15.4022 24.6935 14.4645 25.6312C13.5268 26.5689 13.0001 27.8407 13.0001 29.1667C13.0001 31.7419 12.3504 33.505 11.6248 34.6713C11.0127 35.655 10.7066 36.1468 10.7178 36.284C10.7303 36.436 10.7624 36.4939 10.8849 36.5847C10.9954 36.6667 11.4939 36.6667 12.4908 36.6667H23.5093C24.5062 36.6667 25.0047 36.6667 25.1152 36.5847C25.2377 36.4939 25.2699 36.436 25.2823 36.284C25.2935 36.1468 24.9875 35.655 24.3753 34.6713C23.6497 33.505 23.0001 31.7419 23.0001 29.1667Z"
          className="stroke-[#98A2B3]"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g filter="url(#filter0_di_8780_1214)">
          <circle cx="33" cy="19.5" r="8" fill="#0B3BEC" />
        </g>
        <path
          d="M30.7693 22.491V21.546L33.5413 19.0755C33.7573 18.8835 33.9073 18.702 33.9913 18.531C34.0753 18.36 34.1173 18.195 34.1173 18.036C34.1173 17.82 34.0708 17.628 33.9778 17.46C33.8848 17.289 33.7558 17.154 33.5908 17.055C33.4288 16.956 33.2413 16.9065 33.0283 16.9065C32.8033 16.9065 32.6038 16.959 32.4298 17.064C32.2588 17.166 32.1253 17.3025 32.0293 17.4735C31.9333 17.6445 31.8883 17.829 31.8943 18.027H30.7783C30.7783 17.595 30.8743 17.2185 31.0663 16.8975C31.2613 16.5765 31.5283 16.3275 31.8673 16.1505C32.2093 15.9735 32.6038 15.885 33.0508 15.885C33.4648 15.885 33.8368 15.978 34.1668 16.164C34.4968 16.347 34.7563 16.602 34.9453 16.929C35.1343 17.253 35.2288 17.6265 35.2288 18.0495C35.2288 18.3585 35.1868 18.618 35.1028 18.828C35.0188 19.038 34.8928 19.2315 34.7248 19.4085C34.5598 19.5855 34.3543 19.782 34.1083 19.998L32.1418 21.7395L32.0428 21.4695H35.2288V22.491H30.7693Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_di_8780_1214"
            x="15"
            y="0.5"
            width="44"
            height="44"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="3" />
            <feGaussianBlur stdDeviation="7" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.28 0 0 0 0 1 0 0 0 0.8 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_8780_1214"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8780_1214"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" />
            <feGaussianBlur stdDeviation="3.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.2125 0 0 0 0 0.95275 0 0 0 0 1 0 0 0 0.61 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_8780_1214"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
});
