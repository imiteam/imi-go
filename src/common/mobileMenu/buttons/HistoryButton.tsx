"use client";

import { memo } from "react";
import Link from "next/link";
import { SwitchIcon } from "../icon_components/SwitchIcon";

export const HistoryButton = memo(function HistoryButton(props: {
  setShowMobileMenu: (value: boolean) => void;
  activeButton: string;
  userId: string
}) {
  return (
    <Link href={`/history/text?userId=${props.userId}`} onClick={() => props.setShowMobileMenu(false)}> 
      <div
        className="relative flex h-10 w-full items-center justify-start"
        style={{ left: props.activeButton === "history" ? "-13px" : "1px" }}
      >
        <SwitchIcon
          iconName="historyMob"
          isActive={props.activeButton === "history"}
        />
        <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#98A2B3] dark:text-[#98A2B3]">
          История
        </span>
      </div>
    </Link>
  );
});
