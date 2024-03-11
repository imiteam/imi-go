"use client";

import { memo } from "react";
// import Link from "next/link"
import { SwitchIcon } from "../icon_components/SwitchIcon";

export const LearningButton = memo(function LearningButton(props: {
  // setShowMobileMenu : (value : boolean) => void
  activeButton: string;
}) {
  return (
    // <Link href="/learning" onClick={() => props.setShowMobileMenu(false)}>
    <div
      className="relative flex h-10 w-full items-center justify-start right-[1px]"
      // style={{left: props.activeButton === 'templates' ? '-11px' : '0'}}
    >
      <SwitchIcon
        iconName="learningMob"
        isActive={props.activeButton === "learning"}
      />
      <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#98A2B3] dark:text-[#98A2B3]">
        Обучение
      </span>
    </div>
    // </Link>
  );
});
