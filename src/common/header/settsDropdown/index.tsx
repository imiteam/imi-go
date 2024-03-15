"use client";

import { memo, useRef } from "react";
import { useClickAway } from "react-use";
import { ProfileButton } from "./buttons/ProfileButton";
import { PlansButton } from "./buttons/PlansButton";
import { HistoryButton } from "./buttons/HistoryButton";
import { PartnersButton } from "./buttons/PartnersButton";
import { TeamButton } from "./buttons/TeamButton";
import { SupportButton } from "./buttons/SupportButton";
import { SignOutButton } from "./buttons/SignOutButton";

export const SettsDropdown = memo(function SettsDropdown(props: {
  isShowSetts: boolean;
  setIsShowSetts: (value: boolean) => void;
  userId : string;
}) {
  const handleClickOutside = () => {
    props.setIsShowSetts(!props.isShowSetts);
  };

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, handleClickOutside);

  return (
    <div
      ref={ref}
      className="absolute right-0 top-[42px] z-[999] flex h-[295px] w-[221px] flex-col rounded-[12px] border border-[#DAE3E9] bg-[#EDF2F6] px-1.5 py-1.5 
        dark:border-[#333741] dark:bg-[#17181C]"
    >
      <ProfileButton
        isShowSetts={props.isShowSetts}
        setIsShowSetts={props.setIsShowSetts}
      />

      <PlansButton
        isShowSetts={props.isShowSetts}
        setIsShowSetts={props.setIsShowSetts}
      />

      <HistoryButton
        userId={props.userId}
        isShowSetts={props.isShowSetts}
        setIsShowSetts={props.setIsShowSetts}
      />

      <PartnersButton
        isShowSetts={props.isShowSetts}
        setIsShowSetts={props.setIsShowSetts}
      />

      <TeamButton
        isShowSetts={props.isShowSetts}
        setIsShowSetts={props.setIsShowSetts}
      />

      <SupportButton
        isShowSetts={props.isShowSetts}
        setIsShowSetts={props.setIsShowSetts}
      />

      <SignOutButton
        isShowSetts={props.isShowSetts}
        setIsShowSetts={props.setIsShowSetts}
      />
    </div>
  );
});
