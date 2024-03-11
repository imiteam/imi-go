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

export const HeaderNavButton = memo(function HeaderNavButton(
  props: NavButtonPropsType,
) {
  let cursor = props.title === "Обучение" ? "not-allowed" : "pointer";

  let isActive = props.buttonName === props.activeButtonName;

  return props.title === "Обучение" ? (
    <TooltipProvider>
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
            {props.buttonName === "templates" ? (
              <span className="md:relative md:bottom-[8px] md:left-[16px]">
                {props.title}
              </span>
            ) : props.buttonName === "chat" ? (
              <span className="md:relative md:bottom-[8px] md:left-[32px]">
                {props.title}
              </span>
            ) : props.buttonName === "learning" ? (
              <span className="md:relative md:bottom-[8px] md:left-[44px]">
                {props.title}
              </span>
            ) : (
              <span className="md:relative md:bottom-[8px] md:left-[63px]">
                {props.title}
              </span>
            )}
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
      {props.buttonName === "templates" ? (
        <span className="md:relative md:bottom-[8px] md:left-[16px]">
          {props.title}
        </span>
      ) : props.buttonName === "chat" ? (
        <span className="md:relative md:bottom-[8px] md:left-[32px]">
          {props.title}
        </span>
      ) : props.buttonName === "learning" ? (
        <span className="md:relative md:bottom-[8px] md:left-[44px]">
          {props.title}
        </span>
      ) : (
        <span className="md:relative md:bottom-[8px] md:left-[63px]">
          {props.title}
        </span>
      )}
    </Button>
  );
});
