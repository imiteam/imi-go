"use client";
import { useTheme } from "next-themes";
import { memo } from "react";

export const CloseMobileMenuIcon = memo(function CloseMobileMenuIcon() {
  const { theme } = useTheme();

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M11 1L1 11M1 1L11 11"
        stroke={theme === "light" ? "#98A2B3" : "rgba(206, 207, 210, 1)"}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
