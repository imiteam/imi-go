"use client";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { ArrowIcon } from "./ArrowIcon";

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrowChatBot() {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible),
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <Arrow onClick={() => scrollPrev()}>
      <ArrowIcon icon="arrow-l-60" isActive={!disabled} />
    </Arrow>
  );
}

export function RightArrowChatBot() {
  const { isLastItemVisible, scrollNext, visibleElements } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible,
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow onClick={() => scrollNext()}>
      <ArrowIcon icon="arrow-r-60" isActive={!disabled} />
    </Arrow>
  );
}

export function CustomArrowChatBot() {
  return (
    <div className="relative flex h-[147px] flex-col justify-between bg-bg-lite dark:bg-bg-dark md:hidden lg:right-[0px] lg:ml-[11px] xl:right-[2px] xl:ml-[14px] xl:w-[60px]">
      <LeftArrowChatBot />
      <RightArrowChatBot />
    </div>
  );
}
