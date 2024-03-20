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
        width :  
          screenWidth < 979 && screenWidth > 679
        ? 40
        : screenWidth < 679
          ? 36
          : 44
      }}
      className="gradientButton"
    >
      <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.7317 9.81304L17.7312 9.81304M4.33141 1.51416L16.5887 7.64281C18.377 8.53697 18.377 11.089 16.5887 11.9831L4.33141 18.1118C2.398 19.0785 0.260956 17.2251 0.944521 15.1744L2.47589 10.5802C2.64191 10.0822 2.64191 9.54375 2.47589 9.04571L0.94452 4.45159C0.260956 2.4009 2.398 0.547451 4.33141 1.51416Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </Button>
  );
});
