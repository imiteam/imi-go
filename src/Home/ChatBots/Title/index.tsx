import { Fragment, memo } from "react";
import { DescriptionIcon } from "./DescriptionIcon";

export const Title = memo(function Title() {
  return (
    <Fragment>
      <div className="relative mr-[7px] w-[191px] vsm:hidden md:w-[129.8px] ">
        <DescriptionIcon icon="roleDescription" />
        <DescriptionIcon icon="roleDescriptionAI" />
        <span className="absolute left-[38px] top-[32px] font-NeueMachinaBold text-[12px] text-[#fff] md:left-[23px] md:top-[26px]">
          AI
        </span>
        <span className="absolute left-[74px] top-[22px] font-NeueMachinaBold text-[24px] text-heading-text-lite dark:text-heading-text-dark md:left-[52px] md:top-[18px] md:text-[20px]">
          Чат
        </span>
        <span className="absolute left-[31px] top-[54px] font-NeueMachinaBold text-[24px] text-heading-text-lite dark:text-heading-text-dark md:left-[16px] md:top-[45px] md:text-[20px]">
          с ботом
        </span>
        <span className="absolute left-[31px] top-[86px] font-NeueMachinaBold text-[24px] text-heading-text-lite dark:text-heading-text-dark md:left-[16px] md:top-[72px] md:text-[20px]">
          профи:
        </span>
      </div>
      <div className="vsm:mb-[15px] vsm:h-[26px] vsm:pl-[4px] md:hidden md:vsm:inline-block lg:hidden">
        <DescriptionIcon icon="roleDescriptionAI" />
        <span className="font-NeueMachinaBold text-[12px] text-[#fff] vsm:relative vsm:bottom-[20px] vsm:left-[7px] vsm:inline">
          AI
        </span>
        <span className="font-InterBold text-[16px] text-heading-text-lite dark:text-heading-text-dark vsm:relative vsm:bottom-[20px] vsm:left-[22px] vsm:inline">
          Чат с ботом профи :
        </span>
      </div>
    </Fragment>
  );
});
