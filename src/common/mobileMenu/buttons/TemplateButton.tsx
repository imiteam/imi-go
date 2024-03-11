"use client";

import { memo } from "react";
import Link from "next/link";
import { SwitchIcon } from "../icon_components/SwitchIcon";

export const TemplateButton = memo(function TemplateButton(props: {
  setShowMobileMenu: (value: boolean) => void;
  activeButton: string;
}) {
  return (
    <Link href="/templates" onClick={() => props.setShowMobileMenu(false)}>
      <div
        className="relative flex h-10 w-full items-center justify-start"
        style={{ left: props.activeButton === "templates" ? "-14px" : "0" }}
      >
        <SwitchIcon
          iconName="templatesMob"
          isActive={props.activeButton === "templates"}
        />
        <span
          style={{ right: props.activeButton === "templates" ? "3px" : "0" }}
          className="relative font-TTNormsMedium text-[14px] leading-[14px] text-[#98A2B3] dark:text-[#98A2B3]"
        >
          Шаблоны
        </span>
      </div>
    </Link>
  );
});
