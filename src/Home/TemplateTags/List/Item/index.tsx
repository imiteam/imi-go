"use client";
import { Button } from "../../../../common/UIkit/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../common/UIkit/tooltip";
import React, { memo } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

export const Item = memo(function Item(props: {
  btnID: string;
  title: string;
  activeButton: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const _visible = visibility.isItemVisible(props.btnID);
  // логика включения шаблонов пока отключена
  // const setTemplateTagIds = useHomeStore((state) => state.setTemplateTagId)

  const isActive = props.activeButton === props.btnID;

  return (
    <div tabIndex={0}>
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={isActive ? "activeTempBtn" : "defaultTempBtn"}
              size="defaultTempBtn"
              className="cursor-not-allowed"
              // логика включения шаблонов пока отключена
              // onClick={() => setTemplateTagIds(Number(btnID))}
            >
              <span className="md:text-[12px] lg:text-[12px] xl:text-[14px]">
                {props.title}
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
            <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
              В разработке
            </span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
});
