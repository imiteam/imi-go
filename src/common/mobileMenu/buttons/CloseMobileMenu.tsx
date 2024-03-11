"use client";

import { Button } from "common/UIkit/button";
import { memo } from "react";
import { CloseMobileMenuIcon } from "../icon_components/CloseMobileMenuIcon";

export const CloseMobileMenu = memo(function CloseMobileMenu(props: {
  closeChatSheet: (value: boolean) => void;
}) {
  return (
    <Button
      variant={"closeMobileMenuBtn"}
      size="closeMobileMenuBtn"
      onClick={() => props.closeChatSheet(false)}
    >
      <CloseMobileMenuIcon />
    </Button>
  );
});
