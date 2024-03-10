"use client";
import { memo } from "react";

export const MobileMenuIcon = memo(function MobileMenuIcon(props: {
  handleClickMenu: () => void;
}) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-[18px] md:hidden md:vsm:block lg:hidden"
      onClick={() => props.handleClickMenu()}
    >
      <path
        d="M3 12.5H21M3 6.5H17.1785M3 18.5H13"
        stroke="#98A2B3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
