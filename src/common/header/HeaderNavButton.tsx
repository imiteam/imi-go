"use client";

import { memo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../UIkit/tooltip";
import { Button } from "../UIkit/button";
import { SwitchIcon } from "./icon_components/SwitchIcon";

type NavButtonPropsType = {
  buttonName: string;
  activeButtonName: string;
  title: string;
};
interface ButtonNameToClassName {
  [key: string]: string;
}

export const HeaderNavButton = memo(function HeaderNavButton(
  props: NavButtonPropsType,
) {
  
  const buttonNameToClassName: ButtonNameToClassName = {
    templates: "md:relative md:bottom-[8px] md:left-[16px]",
    chat: "md:relative md:bottom-[8px] md:left-[32px]",
    learning: "md:relative md:bottom-[8px] md:left-[44px]",
    history: "md:relative md:bottom-[8px] md:left-[63px]",
  };
  
  const className : string = buttonNameToClassName[props.buttonName]
  let cursor = props.title === "Обучение" || props.title === "Шаблоны" ? "not-allowed" : "pointer";

  let isActive = props.buttonName === props.activeButtonName;

  return props.title === "Обучение" || props.title === "Шаблоны" ? (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isActive ? "activeNavBtn" : "defaultNavBtn"}
            size="defaultNavBtn"
            style={{ cursor: cursor }}
            // onClick={() => {
            //   props.callBack(props.icon ? props.icon : "")
            // }}
            className="md:flex md:flex-col"
          >
            <SwitchIcon isActive={isActive} iconName={props.buttonName} />
            <span className={className}>
                {props.title}
            </span>
            {/* <span className="md:relative md:bottom-[8px] md:left-[16px]">{props.title}</span> */}
          </Button>
        </TooltipTrigger>
        <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
          <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
            В разработке
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <Button
      variant={isActive ? "activeNavBtn" : "defaultNavBtn"}
      size="defaultNavBtn"
      style={{ cursor: cursor }}
      // onClick={() => {
      //   props.callBack(props.icon ? props.icon : "")
      // }}
      className="md:flex md:flex-col"
      id="navBtn"
    >
      <SwitchIcon isActive={isActive} iconName={props.buttonName} />
      <span className={className}>
        {props.title}
      </span>
    </Button>
  );
});
