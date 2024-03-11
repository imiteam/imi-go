"use client";
import useDrag from "../../hooks/useDrag";
import { GetTemplateTagsQuery } from "generated";
import { memo } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import {
  LeftArrowTemplates,
  RightArrowTemplates,
} from "./HorizontalScrolling/Arrows";
import { Item } from "./Item/index";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export const List = memo(function List(props: {
  isHomePage: boolean;
  tags: GetTemplateTagsQuery["template_tags"];
}) {
  const selectedTemplateTagId = 1; // TODO: fix this
  const { dragStart, dragStop, dragMove } = useDrag();
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff: any) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });
  return (
    <div onMouseLeave={dragStop}>
      <ScrollMenu
        LeftArrow={props.isHomePage && LeftArrowTemplates}
        RightArrow={props.isHomePage && RightArrowTemplates}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
        scrollContainerClassName="scrollContainer"
      >
        {props.tags.map((item) => {
          return (
            <Item
              activeButton={String(selectedTemplateTagId)}
              btnID={String(item.id)}
              key={item.id}
              title={item.title ?? "Undefined"}
            />
          );
        })}
      </ScrollMenu>
    </div>
  );
});
