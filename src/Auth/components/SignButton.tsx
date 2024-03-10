"use client";

import { Button } from "./../../common/UIkit/button";
import { MouseEventHandler } from "react";

export default function SignButton({
  title,
  onClick,
  isDisabled,
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  isDisabled: boolean;
}) {
  return (
    <Button
      size="signButton"
      variant="signButton"
      onClick={onClick}
      disabled={isDisabled}
    >
      {title}
    </Button>
  );
}
