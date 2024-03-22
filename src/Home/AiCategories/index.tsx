"use client";
import { GetAiCategoriesQuery } from "generated";
import { Suspense, memo } from "react";
import { List } from "./List";
import { Search } from "./Search";

export const AiCategories = memo(function AiCategories(props: {
  className?: string;
  aiCategories: GetAiCategoriesQuery;
}) {
  return (
    <div 
      className="flex h-[44px] w-full flex-nowrap items-center md:mb-[0px] md:mt-[24px] md:h-auto md:flex-col md:px-[20px] 
                    md:vsm:mb-[0px] md:vsm:mt-[16px] md:vsm:px-[16px] lg:mx-[32px] lg:mt-[24px] lg:justify-between xl:mt-[32px]"
    >
      <div className=" flex w-full flex-nowrap items-center justify-between">
        <span
          className="relative bottom-[3px] right-[3px] order-1 font-NeueMachinaBold font-bold text-heading-text-lite dark:text-heading-text-dark md:right-[1px] md:mr-[20px] 
          md:text-[30px] md:vsm:text-[24px] lg:text-[30px] xl:text-[36px]"
        >
          Шаблоны
        </span>

        <List
          aiCategories={props.aiCategories}
          className="order-3 flex h-[44px] w-full items-center rounded-[16px] border border-active-btn-white px-[2px] md:hidden lg:order-2 lg:mx-[19px] 
                    lg:w-auto xl:mx-[26.5px] xl:w-[680px]"
        />

        <Search>
          <Suspense fallback={<>Loading...</>}>
            {/* <SearchResultsWrapper></SearchResultsWrapper> */}
          </Suspense>
        </Search>
      </div>
      <List
        aiCategories={props.aiCategories}
        className="order-3 mt-[16px] flex h-[44px] w-full items-center rounded-[16px] border border-active-btn-white px-[2px] md:visible md:sm:vsm:h-[53px] lg:hidden"
      />
    </div>
  );
});
