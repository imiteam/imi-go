"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../common/UIkit/tooltip";
import { GetTemplateCategoriesQuery } from "generated";
import Image from "next/image";
import { memo } from "react";

export const Item = memo(function Item(props: {
  item: GetTemplateCategoriesQuery["template_categories"][0]["templates"][0];
  isHomePage: boolean;
}) {
  return props.isHomePage ? (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            key={props.item.id}
            className="flex h-[40px] w-[210px] cursor-not-allowed items-center"
          >
            <Image
              src={`https://imi-front.imgix.net/uploads/${props.item.icon}.svg`}
              alt={props.item.name ?? ""}
              width={22}
              height={22}
              className="mr-[12px]"
            ></Image>
            <span
              className="TTNormsRegular  font-normal leading-[15px] text-template-card-item-text-lite dark:text-template-card-item-text-dark 
              md:text-[14px] lg:text-[14px] xl:text-[16px]"
            >
              {props.item.title}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
          <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
            В разработке
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <div
      key={props.item.id}
      className="flex h-[41px] w-[213px] cursor-pointer items-center"
    >
      <Image
        src={`https://imi-front.imgix.net/uploads/${props.item.icon}.svg`}
        alt={props.item.name ?? ""}
        width={22}
        height={22}
        className="mr-[12px]"
      />
      <span
        className="TTNormsRegular text-[14px] font-normal leading-[20px] text-template-card-item-text-lite 
        dark:text-template-card-item-text-dark "
      >
        {props.item.title}
      </span>
    </div>
  );
});
