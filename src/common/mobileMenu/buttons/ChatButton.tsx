"use client";

import { memo } from "react";
import Link from "next/link";
import { SwitchIcon } from "../icon_components/SwitchIcon";

export const ChatButton = memo(function ChatButton(props: {
  setShowMobileMenu: (value: boolean) => void;
  activeButton: string;
  userId: string;
}) {
  return (
    <Link
      href={`/chat?userId=${props.userId}`}
      onClick={() => props.setShowMobileMenu(false)}
    >
      <div
        className="relative flex h-10 w-full items-center justify-start"
        style={{ left: props.activeButton === "chat" ? "-11px" : "0" }}
      >
        <SwitchIcon
          iconName="chatMob"
          isActive={props.activeButton === "chat"}
        />
        <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#98A2B3] dark:text-[#98A2B3]">
          IMI чат
        </span>
      </div>
    </Link>
  );
});
