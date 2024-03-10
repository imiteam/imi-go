"use client";

import Link from "next/link";
import { memo } from "react";
import { ProfilePlansIcon } from "../icon_components/ProfilePlansIcon";

export const PlansButton = memo(function PlansButton(props: {
  isShowSetts: boolean;
  setIsShowSetts: (value: boolean) => void;
}) {
  return (
    <Link
      onClick={() => props.setIsShowSetts(!props.isShowSetts)}
      href="/lk/plans"
      className="flex h-[40px] w-[99%] cursor-pointer select-none items-center rounded-[10px] border-none px-2 py-2.5 font-TTNormsRegular 
                        text-[14px] leading-[20px] text-[#2D384B] outline-none hover:bg-white focus:bg-white data-[disabled]:pointer-events-none 
                        data-[disabled]:opacity-50 dark:text-[#F5F5F6] dark:hover:bg-black dark:focus:bg-black"
    >
      <ProfilePlansIcon />
      <span className="ml-3">Тарифы и оплата</span>
    </Link>
  );
});
