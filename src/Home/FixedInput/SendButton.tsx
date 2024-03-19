"use client";
import { Button } from "../../common/UIkit/button";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import sendInputIcon from "../../../public/assets/sendInput.png";

export const SendButton = memo(function SendButton(props: {
  callBack: () => void;
}) {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  useEffect(() => {
    const updateScreenWidth = () => {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      setScreenWidth(width);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return (
    <Button
      variant={"defaultSendInput"}
      size="defaultSendInput"
      onClick={() => props.callBack()}
       style={{
        height:
          screenWidth < 979 && screenWidth > 679
            ? "42px"
            : screenWidth < 679
              ? "36px"
              : "44px",
      }}
    >
      {/* <Image
        src={sendInputIcon}
        alt="sendButtonsss"
        width={
          screenWidth < 979 && screenWidth > 679
            ? 40
            : screenWidth < 679
              ? 36
              : 44
        }
        style={{
          height:
            screenWidth < 979 && screenWidth > 679
              ? "40px"
              : screenWidth < 679
                ? "36px"
                : "44px",
        }}
      /> */}
      <svg 
      width="44" 
      height="45" 
      viewBox="0 0 44 45" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{
        height:
          screenWidth < 979 && screenWidth > 679
            ? "40px"
            : screenWidth < 679
              ? "36px"
              : "44px",
      }}
      >
        <g filter="url(#filter0_i_12786_45114)">
        <path d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5H32C38.6274 0.5 44 5.87258 44 12.5V32.5C44 39.1274 38.6274 44.5 32 44.5H12C5.37258 44.5 0 39.1274 0 32.5V12.5Z" fill="#0B3BEC"/>
        <g clip-path="url(#clip0_12786_45114)">
        <path d="M15.7319 22.814L30.7315 22.814M17.3317 14.5151L29.589 20.6438C31.3773 21.5379 31.3773 24.09 29.589 24.9841L17.3317 31.1128C15.3982 32.0795 13.2612 30.226 13.9448 28.1753L15.4761 23.5812C15.6422 23.0832 15.6421 22.5447 15.4761 22.0467L13.9448 17.4526C13.2612 15.4019 15.3982 13.5484 17.3317 14.5151Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </g>
        <defs>
        <filter id="filter0_i_12786_45114" x="0" y="0.5" width="59" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="15"/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="0" k3="0"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.94 0 0 0 0 1 0 0 0 0.71 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_12786_45114"/>
        </filter>
        <clipPath id="clip0_12786_45114">
        <rect width="20" height="20" fill="white" transform="translate(12 12.5)"/>
        </clipPath>
        </defs>
      </svg>
    </Button>
  );
});
