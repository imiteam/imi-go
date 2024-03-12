"use client";
import useDrag from "../../hooks/useDrag";
import { GetRolesQuery } from "generated";
import { memo } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Card } from "./Card";
import { CustomArrowChatBot } from "./HorizontalScroll/Arrows";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export const List = memo(function List(props: {
  chatBots: GetRolesQuery["roles"];
}) {
  const { dragStart, dragStop, dragMove } = useDrag();
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });
  return (
    <div
      className="rolesScrollBar h-[150px] w-[100%] vsm:w-[100%]"
      style={{ overflow: "hidden" }}
    >
      <div onMouseLeave={dragStop}>
        <ScrollMenu
          RightArrow={CustomArrowChatBot}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
          scrollContainerClassName="scrollContainer"
        >
          {props.chatBots.map((item, i) => {
            const isLastElement = i === props.chatBots.length - 1;
            const marginRightStyleFull = isLastElement ? "0px" : "6px";

            return (
              <Card
                key={item.id}
                src={item.image}
                itemId={i.toString()}
                title={item.title}
                mrFull={marginRightStyleFull}
                promt={item.name!}
              />
            );
          })}
        </ScrollMenu>
      </div>
    </div>
  );
});
