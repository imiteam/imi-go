"use client";

import { Button } from "../../common/UIkit/button";
import SignIcon from "./SignIcon";

export default function Bullets() {
  return (
    <div className="flex  w-full flex-col lg:px-[64px] ">
      <div
        className="flex size-full flex-col
                            "
      >
        <span
          className="font-NeueMachinaMedium leading-[38px] text-[#FFFFFF] lg:text-[24px]
                                lg:leading-[32px] xl:text-[30px]"
        >
          Присоединяйтесь к более 2000
        </span>
        <span
          className="font-NeueMachinaMedium leading-[38px] text-[#FFFFFF] lg:text-[24px]
                                lg:leading-[32px] xl:text-[30px]"
        >
          пользователей: команд, фрилансеров,
        </span>
        <span
          className="font-NeueMachinaMedium leading-[38px] text-[#FFFFFF] lg:text-[24px]
                                lg:leading-[32px] xl:text-[30px]"
        >
          студентов, предпринимателей и блогеров
        </span>
        <div
          className="flex h-[56px] w-[136px] items-center justify-between lg:mt-4 
                                xl:mt-6"
        >
          <Button size="signArrowButton" variant="signArrowButton">
            <SignIcon icon="arrowLeft" />
          </Button>
          <Button size="signArrowButton" variant="signArrowButton">
            <SignIcon icon="arrowRight" />
          </Button>
        </div>
      </div>
    </div>
  );
}
