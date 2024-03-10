"use client";

import { Button } from "./../../common/UIkit/button";
import SignIcon from "./SignIcon";

export default function SignMethodButton({
  icon,
  title,
  onClick,
  disabled,
}: {
  icon: string;
  title: string;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <Button
      size="signMethodButton"
      variant="signMethodButton"
      id="signMethodButtton"
      onClick={() => onClick()}
      disabled={disabled}
    >
      <SignIcon icon={icon} />
      <span>{title}</span>
    </Button>
  );
}
