import { GetTemplateCategoriesQuery } from "generated";
import Link from "next/link";
import { memo } from "react";
import { Item } from "./Item/Item";

export const List = memo(function List(props: {
  templateCategory: NonNullable<
    GetTemplateCategoriesQuery["template_categories"][0]
  >;
  isHomePage: boolean;
}) {
  const gridSizeClassObj: any = {
    vsm: {
      1: "md:sm:vsm:col-span-1",
      2: "md:sm:vsm:col-span-2",
      3: "vsm:col-span-3",
      4: "md:sm:vsm:col-span-4",
      5: "md:sm:vsm:col-span-5",
      6: "md:sm:vsm:col-span-6",
      7: "md:sm:vsm:col-span-7",
      8: "md:sm:vsm:col-span-8",
      9: "md:sm:vsm:col-span-9",
      10: "md:sm:vsm:col-span-10",
      11: "md:sm:vsm:col-span-11",
      12: "md:sm:vsm:col-span-12",
    },
    sm: {
      1: "md:sm:col-span-1",
      2: "md:sm:col-span-2",
      3: "md:sm:col-span-3",
      4: "md:sm:col-span-4",
      5: "md:sm:col-span-5",
      6: "md:sm:col-span-6",
      7: "md:sm:col-span-7",
      8: "md:sm:col-span-8",
      9: "md:sm:col-span-9",
      10: "md:sm:col-span-10",
      11: "md:sm:col-span-11",
      12: "md:sm:col-span-12",
    },
    md: {
      1: "md:col-span-1",
      2: "md:col-span-2",
      3: "md:col-span-3",
      4: "md:col-span-4",
      5: "md:col-span-5",
      6: "md:col-span-6",
      7: "md:col-span-7",
      8: "md:col-span-8",
      9: "md:col-span-9",
      10: "md:col-span-10",
      11: "md:col-span-11",
      12: "md:col-span-12",
    },
    lg: {
      1: "lg:col-span-1",
      2: "lg:col-span-2",
      3: "lg:col-span-3",
      4: "lg:col-span-4",
      5: "lg:col-span-5",
      6: "lg:col-span-6",
      7: "lg:col-span-7",
      8: "lg:col-span-8",
      9: "lg:col-span-9",
      10: "lg:col-span-10",
      11: "lg:col-span-11",
      12: "lg:col-span-12",
    },
  };
  const gridColsClassObj: any = {
    vsm: {
      1: "md:sm:vsm:grid-cols-1 ",
      2: "vsm:grid-cols-2",
      3: "md:sm:vsm:grid-cols-3",
      4: "md:sm:vsm:grid-cols-4",
    },
    sm: {
      1: "md:sm:grid-cols-1 ",
      2: "md:sm:grid-cols-2",
      3: "md:sm:grid-cols-3",
      4: "md:sm:grid-cols-4",
    },
    md: {
      1: "md:grid-cols-1 ",
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
    },
    lg: {
      1: "lg:grid-cols-1 ",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
    },
  };
  const gridSizeClass = `
  ${gridSizeClassObj["sm"][props.templateCategory?.ui_sm_w!]} 
  ${gridSizeClassObj["md"][props.templateCategory?.ui_table_w!]}
  ${gridSizeClassObj["lg"][props.templateCategory?.ui_lg_w!]} 
  col-span-1
  `;

  const gridColsClass = `
  ${gridColsClassObj["sm"][props.templateCategory?.ui_sm_c!]}
  ${gridColsClassObj["md"][props.templateCategory?.ui_table_c!]}
  ${gridColsClassObj["lg"][props.templateCategory?.ui_lg_c!]}
  grid-cols-1
  `;

  return props.isHomePage ? (
    <div
      key={props.templateCategory?.id}
      className={`grid  ${gridSizeClass} md:sm:vsm:col-span-2 md:sm:vsm:w-full`}
    >
      <div
        className="flex h-[400px] justify-between rounded-[20px] border
        border-[#D0D5DD] dark:border-[#333741] md:h-auto md:rounded-[16px] md:sm:vsm:h-auto"
      >
        <div className="flex size-full flex-col sm:col-span-6 md:p-[24px] md:pb-[32px] lg:p-[24px] lg:pb-[32px] lg:pr-[20px] xl:p-[32px] xl:pb-[40px] xl:pr-[28px] ">
          <span
            className="relative bottom-[6px] right-[1px] text-heading-text-lite dark:text-heading-text-dark md:right-[4px] 
            md:font-InterBold md:text-[18px] md:sm:whitespace-normal md:sm:text-[16px]
            md:sm:leading-[20px] lg:mb-[3px] lg:font-InterBold lg:text-[20px] xl:mb-[20px] xl:font-NeueMachinaBold xl:text-[24px]"
          >
            {props.templateCategory.titile}
          </span>
          <div
            className={`grid ${gridColsClass} size-full  md:sm:vsm:grid-cols-1`}
          >
            {props.templateCategory?.templates.map((item) => (
              <Item key={item.id} item={item} isHomePage></Item>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mb-[8px] h-[364px] w-full rounded-[16px] pr-[24px]">
      <div className="flex h-[364px] w-[482px] rounded-[16px] border border-[#D0D5DD] dark:border-[#333741]">
        <div className="size-full px-[20px] pb-[24px] pt-[16px]">
          <span
            className="font-InterBold text-[18px] 
                  text-heading-text-lite dark:text-heading-text-dark"
          >
            {props.templateCategory.titile}
          </span>
          <div className="mt-[10px] flex size-full flex-col flex-wrap justify-start ">
            {props.templateCategory?.templates.map((item) => {
              console.log(item.id);
              return (
                <Link
                  href={{
                    pathname: `/templates/${item.id}`,
                  }}
                  key={item.id}
                >
                  <Item item={item} isHomePage={false}></Item>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});
