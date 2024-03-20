import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "..//../UIkit/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        defaultNavBtn: 
          "rounded-[12px] text-text-color-white lg:font-TTNormsMedium md:font-TTNormsRegular pr-[4px] lg:py-[6px] xl:pl-[16px] lg:pl-[8px] md:pl-[0px] flex justify-start xl:text-[16px] lg:text-[14px] md:text-[10px] md:sm:vsm:hidden",
        defaultCategoriesBtn:
          "border-none xl:font-TTNormsMedium lg:font-InterMedium md:font-interMedium text-black-text xl:px-[24px] xl:py-[8px] lg:px-[16px] lg:py-[8px]  md:sm:px-[16px] md:sm:py-[8px] vsm:flex vsm:flex-col md:sm:vsm:pb-[0px]  md:sm:vsm:px-[0px] rounded-[13px]",
        defaultTempBtn:
          "border border-items-border-lite dark:border-items-border-dark text-template-item-text-default-lite dark:text-template-item-text-dark rounded-[12px] xl:font-TTNormsRegular lg:font-InterRegular xl:text-[14px] lg:text-[12px] font-[400] w-max px-[12px] py-[6px] hover:bg-[#fff] dark:hover:bg-[black] mr-[6px]",
        // defaultTempBtnGrowed : "border border-[#D0D5DD] rounded-[12px] font-TTNormsMedium text-[14px] text-[#2D384B] font-[400] w-max px-[9px] py-[6px] hover:bg-[#fff] flex-grow mr-[4px]",
        defaultTempArrowRight:
          "border-none rounded-[10px] hover:bg-white dark:hover:bg-black absolute top-[0px] right-[0px] bg-bg-lite dark:bg-bg-dark shadow-arrow-r-20-lite dark:shadow-arrow-r-20-dark",
        defaultTempArrowLeft:
          "border-none rounded-[10px] hover:bg-white dark:hover:bg-black absolute top-[0px] left-[0px] z-20 bg-bg-lite dark:bg-bg-dark shadow-arrow-r-20-lite dark:shadow-arrow-r-20-dark ",

        defaultSendInput: "ml-[8px] md:m-[0px] rounded-[12px] flex justify-center items-center",
        searchTempBtn:
          " border border-items-border-lite dark:border-items-border-dark xl:rounded-[16px] lg:rounded-[12px] md:rounded-[12px] flex items-center justify-center text-template-card-item-text-lite dark:text-template-card-item-text-dark hover:text-template-item-text-active-lite xl:font-TTNormsRegular lg:font-InterMedium md:font-TTNormsMedium xl:text-[16px] lg:text-[12px] md:text-[12px] xl:leading-[19px] lg:leading-[14px] md:leading-[14px] mr-[8px] md:mr-[8px] md:sm:mr-0",
        roleSideBarBtn:
          " border border-items-border-lite dark:border-items-border-dark xl:py-2 xl:px-4 xl:rounded-[16px] lg:py-1 lg:px-3 md:py-1 md:px-3 lg:rounded-[12px] md:rounded-[12px] md:sm:rounded-[16px] flex items-center justify-start text-template-card-item-text-lite dark:text-template-card-item-text-dark hover:text-template-item-text-active-lite font-TTNormsRegular xl:text-[14px] xl:leading-[20px] lg:text-[13px] lg:leading-[18px] md:text-[12px] md:leading-[23px] ",
        favoriteTempBtn:
          " flex justify-start lg:py-[4px]  lg:px-0 sm:py-[4px] sm:px-[30px] text-template-card-item-text-lite dark:text-template-card-item-text-dark lg:font-TTNormsRegular xl:text-[16px] xl:leading-[19px] md:font-TTNormsRegular lg:text-[12px] lg:leading-[18px] md:text-[12px] md:sm:text-[16px] md:leading-[18px] md:sm:leading-[19px] xl:mb-[18px] lg:mb-[10px] md:mb-[10px] md:sm:mb-[16px]",
        defaultToggleBtn:
          " rounded-[9px] font-TTNormsMedium  text-[12px] text-[#667085] dark:text-[#94969C] leading-[14px] xl:w-[70px] xl:h-[36px] lg:w-[66px] lg:h-[32px] md:w-[61px] md:h-[28px] ",
        defaultProfileNavBtn:
          "border-none font-TTNormsMedium text-[#667085] dark:text-[#98A2B3] text-[12px] lg:whitespace-nowrap py-[8px] px-[12px] md:leading-[14px] sm:text-[10px] md:sm:leading-[11px] rounded-[13px]",
        defaultMultiplyPlanButton:
          "border-none px-[12px] py-[6px] md:px-[10px] md:py-[6px]",
        defaultChatSettsSubpageButton:
          "border-b-[2px] border-b-[#ffffff00] text-[#667085] dark:text-[#98A2B3] font-TTNormsRegular text-[16px] leading-[19px] px-[4px] pb-[8px] vsm:text-[12px]",
        defaultChatModelsModalNavButton:
          "border-none font-TTNormsRegular text-[#667085] dark:text-[#98A2B3] text-[14px] leading-[20px] whitespace-nowrap py-[7px] px-[12px] vsm:text-[12px] vsm:px-[6px]",

        chatHeadingBtn:
          "border border-items-border-lite dark:border-items-border-dark rounded-[12px] flex items-center justify-center p-[10px] lg:p-[5px]",
        chatMenuBtn:
          "xl:hidden lg:hidden md:hidden md:sm:flex border border-items-border-lite dark:border-items-border-dark rounded-[12px] items-center justify-center ",
        sendEditMessage:
          "bg-template-item-text-active-lite xl:rounded-[12px] lg:rounded-[10px] md:rounded-[10px] cursor-pointer flex items-center justify-center font-TTNormsMedium xl:text-[14px] lg:text-[12px] lg:leading-[14px] md:text-[12px] md:leading-[14px]  text-[#fff]",
        cancelEditMessage:
          "xl:rounded-[12px] lg:rounded-[10px] md:rounded-[10px] border border-items-border-lite dark:border-items-border-dark cursor-pointer flex items-center justify-center font-TTNormsMedium xl:text-[14px] lg:text-[12px] lg:leading-[14px] md:text-[12px] md:leading-[14px] text-template-item-text-default-lite dark:text-template-item-text-dark",
        scrollToEnd:
          "bg-[#DAE3E9] dark:bg-[#17181C] rounded-[12px] flex items-center justify-center fixed xl:bottom-[80px] lg:bottom-[70px] md:bottom-[17px] left-[50%] md:left-[47%] md:absolute translate-x-negative-50",
        closeAsideChatBtn: "md:sm:rounded-[10px] bg-[#FFFFFF33] dark:bg-black",
        defaultSublineChatBtn:
          " border-b-[2px] border-b-[#ffffff00] text-[#667085] dark:text-[#98A2B3] font-TTNormsMedium text-[12px] leading-[14px] px-[4px] pb-[8px] sm:text-[16px] sm:leading-[19px]",
        stopGenerateMsg:
          "flex justify-between items-center py-[8px] px-[12px] font-TTNormsMedium text-[12px] leading-[14px] rounded-[10px] text-template-item-text-default-lite dark:text-[#CECFD2] border border-[#D0D5DD] dark:border-[#333741]",
        back: "flex items-center justify-center rounded-[12px] border border-items-border-lite dark:border-items-border-dark bg-bg-lite dark:bg-bg-dark mr-[16px]",
        TempBtnInTempsPage:
          "flex items-center border border-items-border-lite dark:border-items-border-dark rounded-[16px] font-TTNormsRegular text-[16px] leading-[19px] text-template-card-item-text-lite dark:text-items-border-lite",
        defaultTempSubPageBtn:
          "border-b-[2px] border-b-[#ffffff00] text-[#667085] dark:text-[#98A2B3] font-TTNormsRegular text-[14px] leading-[14px] px-[4px] pb-[12px]",
        defaultPlanCategoriesBtn:
          "border-none lg:font-TTNormsMedium md:font-interMedium text-[#101828] lg:px-[16px] lg:py-[8px] whitespace-nowrap md:px-[16px] md:py-[8px] vsm:h-[47px] vsm:flex-col md:vsm:py-[8px] vsm:justify-between md:vsm:font-TTNormsMedium",
        defaultPlanToggleButton: "rounded-[50%] bg-[#0B3BEC] dark:bg-[#155EEF]",
        defaultInsructionsToggleButton:
          "rounded-full bg-[#DAE3E9] dark:bg-[#155EEF]",
        tempSidebarInfo:
          "flex justify-beetwen items-center rounded-[12px] border border-items-border-lite dark:border-items-border-dark mr-[26px]",
        tempGenerate:
          "rounded-[12px] bg-[#0B3BEC] flex justify-between items-center py-[12px] px-[16px] font-TTNormsMedium text-[16px] leading-[19px] text-[#FFFFFF]",
        tempResult:
          "flex items-center justify-between rounded-[12px] px-[14px] py-[10px] font-TTNormsMedium text-[14px] leading-[14px] text-[#2D384B] dark:text-[#CECFD2] bg-[#FFFFFF] dark:bg-[#2A2F3A]",
        answerDropdownItem:
          "flex items-center justify-start rounded-[8px] p-[8px] pl-[10px] font-TTNormsRegular text-left text-[12px] leading-[18px] text-[#101828] hover:bg-[#FFFFFF] dark:text-[#F5F5F6] dark:hover:bg-[#000000]",
        editorModalDiscard:
          "flex justify-center items-center rounded-[18px] bg-[#0B3BEC] font-TTNormsMedium text-[16px] text-[#ffffff] hover:bg-opacity-[0.9]",
        editorModalCancel:
          "flex justify-center items-center rounded-[18px] border border-[#0B3BEC] bg-[#ffffff] font-TTNormsMedium text-[16px] text-[#0B3BEC] hover:bg-[#0B3BEC] hover:text-[#ffffff]",
        outline:
          "rounded-[12px] border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        activeNavBtn:
          "rounded-[12px] text-active-text-color-white lg:font-TTNormsMedium md:font-TTNormsRegular lg:py-[6px] xl:pl-[16px] lg:pl-[8px] md:pl-[0px] flex justify-start xl:text-[16px] lg:text-[14px] md:text-[10px] md:sm:vsm:hidden",
        activeCategoriesBtn:
          "h-[38px] rounded-[13px] bg-active-btn-white text-active-text-color-white xl:font-TTNormsMedium lg:font-InterMedium xl:px-[24px] xl:py-[8px] lg:px-[16px] lg:py-[8px] md:sm:px-[16px] md:sm:py-[8px] vsm:flex vsm:flex-col md:sm:vsm:pb-[0px] md:sm:vsm:px-[0px]",
        activeTempBtn:
          "rounded-[12px] border-none bg-template-card-item-bg-lite dark:bg-template-card-item-bg-dark xl:font-TTNormsRegular lg:font-InterRegular xl:text-[14px] lg:text-[12px] text-template-item-text-active-lite dark:text-template-item-text-dark font-[400] w-max px-[12px] py-[6px] mr-[6px]",
        activeToggleBtn:
          " xl:py-[8px] xl:px-[12px] lg:py-[7px] lg:px-[8px] rounded-[9px] bg-[#fff] font-TTNormsMedium text-[12px] text-[#2D384B] dark:text-[#CECFD2] leading-[14px] xl:w-[70px] xl:h-[36px] lg:w-[66px] lg:h-[32px] md:w-[61px] md:h-[28px] md:rounded-[10px] dark:bg-[#21242C]",
        activeSublineChatBtn:
          " border-b-[2px] border-b-template-item-text-active-lite dark:border-b-[#155EEF] text-template-item-text-active-lite dark:text-[#155EEF] font-TTNormsMedium text-[12px] leading-[14px] px-[4px] pb-[8px] sm:text-[16px] sm:leading-[19px]",
        activeTempSubPageBtn:
          "border-b-[2px] border-b-template-item-text-active-lite dark:border-b-[#155EEF] text-template-item-text-active-lite dark:text-[#155EEF] font-TTNormsMedium text-[14px] leading-[14px] px-[4px] pb-[12px]",
        activeProfileNavButton:
          "h-[38px] rounded-[13px] md:rounded-[10px] bg-[#FFFFFF] dark:bg-[#21242C] text-[#2D384B] dark:text-[#94969C] font-TTNormsMedium text-[12px] leading-[14px] lg:whitespace-nowrap py-[8px] px-[12px] sm:text-[10px] sm:leading-[11px]",
        activeMultiplyPlanButton:
          "h-[32px] rounded-[13px] bg-[#FFFFFF] dark:bg-[#21242C] px-[12px] py-[6px] md:px-[10px] md:py-[6px] ",
        profileOkButton:
          "flex justify-center items-center rounded-[16px] py-[12px] px-[16px] font-TTNormsMedium xl:text-[16px] lg:text-[14px] leading-[19px] bg-[#0B3BEC] text-[#FFFFFF]  mr-[12px]",
        profileCancelButton:
          "flex justify-center items-center rounded-[16px] py-[12px] px-[16px] font-TTNormsMedium xl:text-[16px] lg:text-[14px] leading-[19px] border border-[#D0D5DD] dark:border-[#333741] text-[#2D384B] dark:text-[#CECFD2]",
        profileChangeButton:
          "flex justify-center items-center rounded-[12px] py-[12px] px-[16px] font-TTNormsMedium xl:text-[16px] lg:text-[14px] md:text-[12px] leading-[19px] border border-[#D0D5DD] dark:border-[#333741] text-[#2D384B] dark:text-[#CECFD2] sm:border-none md:sm:text-[16px]",
        profileReplaceButton:
          "flex justify-center items-center rounded-[12px] py-[12px] px-[16px] font-TTNormsMedium xl:text-[16px] lg:text-[14px] md:text-[12px] leading-[19px] border border-[#D0D5DD] dark:border-[#333741] text-[#2D384B] dark:text-[#CECFD2] md:sm:text-[12px]",
        profileDeleteButton:
          "flex justify-center items-center font-TTNormsMedium text-[12px] mr-[12px] leading-[19px] text-[#2D384B] dark:text-[#CECFD2]",
        profilePlanButton:
          "flex items-center justify-center font-TTNormsMedium text-[12px] leading-[18px] text-[#0B3BEC] dark:text-[#155EEF] whitespace-nowrap vsm:text-center",
        activePlanCategoriesBtn:
          "h-[38px] rounded-[13px] bg-active-btn-white text-active-text-color-white whitespace-nowrap lg:font-TTNormsMedium md:font-interMedium lg:px-[16px] lg:py-[8px] md:px-[16px] md:py-[8px] vsm:h-[47px] vsm:flex-col md:vsm:py-[8px] vsm:justify-between md:vsm:font-TTNormsMedium",
        activePlanToggleButton: "rounded-[50%] bg-[#FFFFFF] dark:bg-[#000000] ",
        singlePlanButton:
          "flex justify-center items-center bg-[#EDF2F6] dark:bg-[#17181C] rounded-[12px] font-TTNormsRegular lg:text-[14px] lg:leading-[20px] md:text-[12px] md:leading-[18px] text-[#101828] dark:text-[#F5F5F6] lg:px-[12px] lg:py-[6px] xl:mb-[12px] lg:mb-[6px] md:px-[10px] md:py-[6px] md:bg-[#FFFFFF] md:dark:bg-[#000000] md:mb-[6px] md:planSm:mb-0",
        goToPlan:
          "flex items-center xl:px-[18px] xl:py-[16px] xl:rounded-[16px] bg-[#0B3BEC] font-TTNormsMedium lg:text-[16px] lg:leading-[19px] text-[#FFFFFF] xl:mb-[20px] lg:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-[16px] md:px-[14px] md:py-[10px] md:rounded-[12px] md:mb-[8px] md:text-[14px] md:leading-[14px]",
        activePlan:
          " flex items-center xl:px-[18px] xl:py-[16px] xl:rounded-[16px] border border-[#0B3BEC] font-TTNormsMedium lg:text-[16px] lg:leading-[19px] text-[#0B3BEC] xl:mb-[20px] lg:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-[16px] md:px-[14px] md:py-[10px] md:rounded-[12px] md:mb-[8px] md:text-[14px] md:leading-[14px]",
        requestButton:
          "flex xl:rounded-[16px] border border-[#0B3BEC] font-TTNormsMedium lg:text-[16px] lg:leading-[19px] text-[#0B3BEC] dark:text-[#155EEF] lg:rounded-[12px] md:rounded-[12px] md:py-[10px] md:px-[14px] md:text-[14px] md:leading-[14px]",
        buyPackage:
          "flex justify-center items-center bg-[#0B3BEC] px-[14px] py-[10px] font-TTNormsMedium text-[14px] leading-[14px] text-[#FFFFFF] rounded-[12px] my-[20px]",
        hostoryNewDoc:
          "flex items-center xl:rounded-[16px] lg:rounded-[12px] md:rounded-[16px] bg-[#FFFFFF] dark:bg-[#2A2F3A] font-TTNormsMedium text-[16px] leading-[19px] text-[#0B3BEC] dark:text-[#CECFD2] ml-[27px] whitespace-nowrap py-2.5 px-4.5 sm:text-[14px] sm:ml-4 vsm:hidden",
        hostoryNewDocMob:
          "flex items-center rounded-[10px] bg-[#FFFFFF] dark:bg-[#2A2F3A] font-TTNormsMedium text-[12px] leading-[14px] text-[#0B3BEC] dark:text-[#CECFD2] ml-[2px] whitespace-nowrap py-2 px-3 lg:hidden md:hidden md:vsm:flex",
        defaultPaginationButton:
          "flex py-2 px-3 font-TTNormsMedium lg:text-[12px] md:text-[12px] leading-[14px] text-[#98A2B3] dark:text-[#85888E] border border-[#DAE3E9] dark:border-[#2A2F3A] rounded-[10px]",
        activePaginationButton:
          "flex py-2 px-3 font-TTNormsMedium lg:text-[12px] md:text-[12px] leading-[14px] text-[#2D384B] dark:text-[#CECFD2] border border-[#D0D5DD] dark:border-[#333741] rounded-[10px]",
        defaultPageButton:
          "flex items-center justify-center font-TTNormsMedium text-[14px] leading-[14px] text-[#475467] dark:text-[#98A2B3] rounded-[8px] hover:bg-[#EDF2F678] dark:hover:bg-[#17181C9E]",
        activePageButton:
          "flex items-center justify-center rounded-[8px] bg-[#EDF2F6] dark:bg-[#17181C] font-TTNormsMedium text-[14px] leading-[14px] text-[#475467] dark:text-[#98A2B3]",
        signMethodButton:
          "flex justify-center items-center rounded-[12px] border border-[#D0D5DD] bg-white font-TTNormsMedium text-[14px] leading-[14px] text-[#2D384B]",
        signButton:
          "px-1.5 mt-5 mb-6 flex justify-center items-center bg-[#0B3BEC] rounded-[16px] font-TTNormsMedium text-[18px] leading-[28px] text-[#FFFFFF]",
        signArrowButton:
          "rounded-full border border-[#333741] flex justify-center items-center",

        aiMessageTooltipButton:
          "flex items-center justify-start rounded-[8px] hover:bg-[#EDF2F6] dark:hover:bg-[#17181c] p-1.5",
        activeChatSettsSubpageButton:
          "border-b-[2px] border-b-template-item-text-active-lite dark:border-b-[#155EEF] text-template-item-text-active-lite dark:text-[#155EEF] font-TTNormsMedium text-[16px] leading-[19px] px-[4px] pb-[8px] vsm:text-[12px] whitespace-nowrap",
        activeChatModelsModalNavButton:
          " rounded-[10px]  bg-[#FFFFFF] dark:bg-[#21242C] text-[#2D384B] dark:text-[#94969C] font-TTNormsMedium text-[14px] leading-[20px] whitespace-nowrap py-[7px] px-[12px] vsm:text-[12px] vsm:px-[6px]",
        activeInsructionsToggleButton:
          "rounded-full bg-[#FFFFFF] dark:bg-[#000000] ",
        closeMobileMenuBtn:
          "md:sm:rounded-[10px] flex justify-end items-start",

        // activeTempBtnGrowed : "rounded-[12px] border-none bg-[#FFFFFF] font-TTNormsMedium text-[14px] text-active-btn-white font-[400] w-max px-[12px] py-[6px] flex-grow mr-[4px]",
      },
      // 0px 0px 9px 13px #EDF2F6
      size: {
        default: "w-[22px] h-[32px]",
        defaultNavBtn: "h-[40px] w-max md:h-[61px]",
        defaultCategoriesBtn:
          "h-[38px] xl:w-1/4 lg:whitespace-nowrap xl:px-4 xl:py-2 lg:min-w-[83px] md:w-1/4 md:sm:min-w-[106px] md:sm:vsm:min-w-[54px] vsm:h-[47px] vsm:flex-grow",
        defaultTempBtn: "w-max xl:h-[32px] lg:h-[30px]",
        defaultSendInput: "",
        roleSideBarBtn:
          "xl:w-[252px] xl:h-[48px] lg:w-full lg:h-[40px]  md:sm:w-[252px] md:sm:h-[48px] md:w-full md:h-[36px]",
        defaultSearchTempBtn:
          "xl:size-[44px] lg:size-[36px] md:size-[36px] md:sm:size-[44px]",
        defaultChatHeadingBtn: "xl:size-[40px] lg:size-[36px] sm:size-[32px]",
        defaultChatMenuBtn: "sm:w-10 sm:h-8 sm:vsm:size-[32px]",
        favoriteTempBtn:
          "xl:w-[248px] xl:h-[32px] lg:w-[192px] lg:h-[32px] md:w-[180px] md:h-[32px] md:sm:w-full",
        toggleBtn: "",

        sendEditMessage:
          "xl:w-[185px] xl:h-[34px] lg:w-[159px] lg:h-[30px] md:w-[159px] md:h-[30px]",
        cancelEditMessage:
          "xl:w-[84px] xl:h-[34px] lg:w-[72px] lg:h-[30px] md:w-[72px] md:h-[30px]",
        scrollToEnd: "xl:size-[40px] lg:size-[36px] md:size-[36px]",
        sublineChatBtn: "md:w-auto md:h-[22px]",
        closeAsideChatBtn: "md:sm:size-[36px]",
        stopGenerateMsg: "w-[109px] h-[36px]",
        back: "size-[40px]",
        TempBtnInTempsPage: "w-[237px] h-[56px]",
        tempSubPageBtn: "w-[78px] h-full",
        tempSidebarInfo: "size-[40px]",
        tempGenerate: "w-[178px] h-[44px]",
        tempResult: "w-auto h-[40px]",
        answerDropdownItem: "w-full h-[36px] ",
        editorModal: "w-[180px] h-[44px]",
        profileNavButton: "lg:size-full md:size-full",
        profileButton: "w-auto xl:h-[44px] lg:h-[40px] md:h-[40px]",
        profileChangeButton:
          "xl:w-[136px] h-[44px] lg:w-1/3 md:hidden md:sm:flex",
        profileReplaceButton:
          "xl:w-[136px] xl:h-[44px] lg:w-[119px] lg:h-[40px] md:h-[36px]",
        profileDeleteButton: "w-[72px] h-[44px] md:h-[36px]",
        profilePlanButton: "w-auto h-[18px]",
        planCategoriesButton: "h-[38px] w-auto",
        planToggleButton: "size-[16px] vsm:w-[14px] vsm:h-[12px]",
        singlePlanButton: "w-auto h-[32px] md:h-[30px]",
        multiplyPlanButton: "w-auto h-[32px] ",
        goToPlan: "w-auto xl:h-[52px] lg:h-[44px] md:h-[40px] md:w-[201px]",
        activePlan:
          " xl:h-[52px] xl:w-[156px] lg:h-[44px] lg:w-[152px] md:h-[40px] md:w-[135px]",
        requestButton:
          "xl:w-[189px] xl:h-[52px] lg:w-[185px] lg:h-[44px] md:w-[164px] md:h-[40px]",
        buyPackage: "w-[211px] h-[40px] planSm:w-[189px]",
        hostoryNewDoc: "w-[187px] h-[44px] md:w-[390px] md:h-[40px]",
        hostoryNewDocMob: "w-[108px] h-[36px]",
        historyPagintainBtn: "w-[86px] h-[36px]",
        pageButton: "size-10",
        signMethodButton: "w-[175px] h-11 vsm:w-[150px]",
        signButton: "w-full h-[60px]",
        signArrowButton: "size-[56px]",
        aiMessageTooltipButton: "w-full h-[30px]",
        chatSettsSubpageButton: "w-auto h-[27px]",
        ChatModelsModalNavButton: "w-auto h-[34px] grow",
        InsructionsToggleButton: "size-[16px]",
        closeMobileMenuBtn: "md:sm:size-[36px]",
        profileCancelPlanButton: "w-[100px] xl:h-[44px] lg:h-[40px] md:h-[40px]",
        // cancelEditMessage: "w-[84px] h-[34px]", TODO: Fix
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
