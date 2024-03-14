"use client";

import { Button } from "../../../../common/UIkit/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../common/UIkit/tooltip";
import { memo } from "react";
import { useWindowSize } from "react-use";
import { SwitchIcon } from "./SwitchIcon";

export const CategoryItem = memo(function CategoryItem(props: {
  className?: string;
  id: number;
  title: string;
  icon: string;
}) {
  // const activeBtnId = useHomeStore((state) => state.selectedAiCategoryId
  // const setActiveBtnId = useHomeStore((state) => state.setAiCategoryId)
  // логика переключения кнопок. Отключена так как пока будет только работа с текстом
  const activeBtnId = 1;

  const { width } = useWindowSize();

  const titleFormatted = (title: string, width: any) => {
    switch (title) {
      case "Текст / контент":
        return width <= 680 ? "текст" : title;
      default:
        return title;
    }
  };
  let cursor = props.id === 1 ? "pointer" : "not-allowed";
  return props.id === 1 ? (
    <Button
      variant={
        props.id === activeBtnId
          ? "activeCategoriesBtn"
          : "defaultCategoriesBtn"
      }
      size="defaultCategoriesBtn"
      style={{ cursor: cursor }}
      // логика переключения кнопок. Отключена так как пока будет только работа с текстом
      // onClick={() => setActiveBtnId(id)}
    >
      <SwitchIcon isActive={props.id === activeBtnId} iconName={props.icon} />
      <span className="relative left-[4px] dark:text-[#F5F5F6] vsm:relative vsm:bottom-[3px] vsm:left-[1px] md:text-[12px] md:vsm:text-[11px] lg:text-[12px] xl:text-[14px]">
        {titleFormatted(props.title, width)}
      </span>
    </Button>
  ) : (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={
              props.id === activeBtnId
                ? "activeCategoriesBtn"
                : "defaultCategoriesBtn"
            }
            size="defaultCategoriesBtn"
            style={{ cursor: cursor }}
            // логика переключения кнопок. Отключена так как пока будет только работа с текстом
            // onClick={() => setActiveBtnId(id)}
          >
            <SwitchIcon
              isActive={props.id === activeBtnId}
              iconName={props.icon}
            />
            <span className="relative left-[4px] dark:text-[#F5F5F6] vsm:relative vsm:bottom-[3px] vsm:left-[1px] md:text-[12px] md:vsm:text-[11px] lg:text-[12px] xl:text-[14px]">
              {titleFormatted(props.title, width)}
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
  );
});
