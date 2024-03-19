"use client";

import { Button } from "common/UIkit/button";
import { memo } from "react";
import { CloseMobileMenuIcon } from "../icon_components/CloseMobileMenuIcon";

export const CloseMobileMenu = memo(function CloseMobileMenu(props: {
  closeChatSheet: (value: boolean) => void;
}) {
  return (
    // <Button
    //   variant={"closeMobileMenuBtn"}
    //   size="closeMobileMenuBtn"
    //   onClick={() => props.closeChatSheet(false)}
    //   autoFocus={false}
    // >
    <div 
    onClick={() => props.closeChatSheet(false)}
    className="md:sm:rounded-[10px] flex justify-end items-start md:sm:size-[36px]"
    >
      <CloseMobileMenuIcon />
    </div> 
    
    // </Button>
  );
}); 
