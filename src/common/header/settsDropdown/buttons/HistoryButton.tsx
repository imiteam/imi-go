"use client";

import Link from "next/link";
import { memo } from "react";
import { ProfileHistoryIcon } from "../icon_components/ProfileHistoryIcon";

export const HistoryButton = memo(function HistoryButton(props: {
  isShowSetts: boolean;
  setIsShowSetts: (value: boolean) => void;
  userId : string;
}) {
  return (
    <Link
      onClick={() => props.setIsShowSetts(!props.isShowSetts)}
      href={`/lk/history?userId=${props.userId}`}
      className="flex h-[40px] w-[99%] cursor-pointer select-none items-center rounded-[10px] border-none px-2 py-2.5 font-TTNormsRegular 
                        text-[14px] leading-[20px] text-[#2D384B] outline-none hover:bg-white focus:bg-white data-[disabled]:pointer-events-none 
                        data-[disabled]:opacity-50 dark:text-[#F5F5F6] dark:hover:bg-black dark:focus:bg-black"
    >
      <ProfileHistoryIcon />
      <span className="ml-3">История заказов</span>
    </Link>
  );
});
