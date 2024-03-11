"use client";
import { GetAiCategoriesQuery } from "generated";
import { memo } from "react";
import { CategoryItem } from "./item/index";

export const List = memo(function List(props: {
  className?: string;
  aiCategories: GetAiCategoriesQuery;
}) {
  return (
    <div className={props.className}>
      {props.aiCategories.ai_categories.map((item) => {
        return (
          <CategoryItem
            icon={item.icon!}
            id={item.id}
            title={item.title}
            key={item.id}
          />
        );
      })}
    </div>
  );
});
