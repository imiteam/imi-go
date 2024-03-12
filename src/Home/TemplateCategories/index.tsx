import { GetTemplateCategoriesQuery } from "generated";
import { Fragment, memo } from "react";
import { List } from "./List";

export const TemplateCategories = memo(function TemplateCategories(props: {
  templateCategories: GetTemplateCategoriesQuery["template_categories"];
  ishomePage: boolean;
}) {
  return props.ishomePage ? (
    <Fragment>
      <div className="grid w-full grid-cols-2 gap-4 overflow-auto md:px-[20px]">
        {props.templateCategories?.map((templateCategory) => (
          <List
            key={templateCategory.id}
            templateCategory={templateCategory}
            isHomePage
          ></List>
        ))}
      </div>
    </Fragment>
  ) : (
    <Fragment>
      {props.templateCategories?.map((templateCategory) => (
        <List
          key={templateCategory.id}
          templateCategory={templateCategory}
          isHomePage={false}
        ></List>
      ))}
    </Fragment>
  );
});
