import { ArrowIcon } from "./ArrowIcon";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { ArrowButton } from "./ArrowButton";

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
    <div
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
    </div>
  );
}

export function RightArrowTemplates() {
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
    <div className="md:hidden">
      <Arrow disabled={disabled} onClick={() => scrollNext()}>
        <ArrowButton buttonName="arrow-r-20" />
      </Arrow>
    </div>
  );
}

export function LeftArrowTemplates() {
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
    <div className="md:hidden">
      <Arrow disabled={disabled} onClick={() => scrollPrev()}>
        <ArrowButton buttonName="arrow-l-20"/>
      </Arrow>
    </div>
  );
}
