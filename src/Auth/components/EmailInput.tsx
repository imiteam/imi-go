"use client";

import { ChangeEvent, useState } from "react";
import SignIcon from "./SignIcon";

export default function EmailInput({
  type,
  label,
  icon,
  onEmailInputChange,
}: {
  type: string;
  label: string;
  icon: string;
  onEmailInputChange: (value: string) => void;
}) {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onEmailInputChange(e.target.value);
  };
  return (
    <div className="relative mb-5 flex h-[69px] flex-col justify-between xl:px-1.5">
      <label className="font-TTNormsMedium text-[16px] leading-[19px] text-[#2D384B]">
        {label}{" "}
        <span className="font-TTNormsMedium text-[14px] text-[#D92D20]">*</span>
      </label>
      <input
        type={type}
        value={value}
        onKeyDown={() => {}}
        onChange={(e) => handleChange(e)}
        className="h-[44px] w-full rounded-[12px] bg-[#EDF2F6] py-[12px] pl-[47px] pr-3 font-TTNormsRegular text-[14px]  text-[#101828]
                            focus:border-none "
        placeholder=""
      />
      <SignIcon icon={icon} />
    </div>
  );
}
