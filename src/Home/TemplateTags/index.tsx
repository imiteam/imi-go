"use client";
import { GetTemplateTagsQuery } from "generated";
import { memo } from "react";
import { List } from "./List";

export const TemplateTags = memo(function TemplateTags(props: {
  tags: GetTemplateTagsQuery["template_tags"];
  isHomePage: boolean;
}) {
  const style = props.isHomePage
    ? "relative mt-[16px] h-[32px] w-full md:h-[34px] md:pl-[20px] md:vsm:pl-[16px]"
    : "w-full h-[38px] mt-[24px] pb-[55px] relative";

  return (
    <div
      className={`${style}`}
      style={{ overflow: "hidden", userSelect: "none" }}
      id="scrollContainer"
    >
      <List isHomePage={props.isHomePage} tags={props.tags} />
    </div>
  );
});
