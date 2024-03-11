"use client";

import { memo } from "react";
import Link from "next/link";
import { SwitchIcon } from "../icon_components/SwitchIcon";
import { SettingsMobIcon } from "../icon_components/SettingsMobIcon";

export const SettingsButton = memo(function SettingsButton(props: {
  setShowMobileMenu: (value: boolean) => void;
  activeButton: string;
}) {
  return (
    <Link
      href="/lk/settings"
      className="flex h-10 w-full items-center"
      onClick={() => props.setShowMobileMenu(false)}
    >
      <SettingsMobIcon />
      <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#98A2B3] dark:text-[#98A2B3]">
        Настройки
      </span>
    </Link>
  );
});
