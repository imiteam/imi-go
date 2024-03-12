"use client";

import { memo } from "react";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { List } from "./List";
import { Title } from "./Title";
import { GetRolesQuery } from "generated";

export const ChatBots = memo(function ChatBots(props: {
  roles: GetRolesQuery["roles"];
  className?: string;
}) {
  return (
    <div className="flex h-[150px] w-full vsm:flex-col md:my-[24px] md:h-[130px] md:pl-[20px] md:pr-[0px] md:vsm:my-[16px]  md:vsm:h-[173px] md:vsm:pl-[16px] lg:my-[24px] xl:my-[32px]">
      <Title />
      <List chatBots={props.roles} />
    </div>
  );
});
