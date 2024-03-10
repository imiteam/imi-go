"use client";

import { usePathname } from "next/navigation";
import {
  ChangeEvent,
  Fragment,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { cn } from "../../UIkit/lib/utils";
import SignIcon from "./SignIcon";

export default function PasswordInput({
  type,
  icon,
  label,
  method,
  onPasswordInputChange,
}: {
  type: string;
  icon: string;
  label: string;
  method: string;
  onPasswordInputChange: (value: string) => void;
}) {
  const [value, setValue] = useState<string>("");
  const [lengthCheck, setLengthCheck] = useState<boolean>(false);
  const [numCheck, setNumhCheck] = useState<boolean>(false);
  const [hideCheck, setHideCheck] = useState<boolean>(false);
  const pathName = usePathname();

  let currentPath = pathName.split("/")[2] ? pathName.split("/")[2] : "/";
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onPasswordInputChange(e.target.value);
  };

  function hasNumber(val: string) {
    let res = /\d/;
    return res.test(val);
  }

  function checkLength(val: string) {
    return val.length >= 8;
  }

  useEffect(() => {
    setLengthCheck(checkLength(value));
    setNumhCheck(hasNumber(value));
  }, [value]);
  useLayoutEffect(() => {
    if (currentPath === "in") {
      setHideCheck(true);
    } else {
      setHideCheck(false);
    }
  }, [currentPath]);
  return (
    <div
      className={cn("relative flex flex-col xl:px-1.5", {
        "h-[69px]": hideCheck,
        "h-auto": !hideCheck,
      })}
    >
      <label className="mb-1.5 font-TTNormsMedium text-[16px] leading-[19px] text-[#2D384B]">
        {label}{" "}
        <span className="font-TTNormsMedium text-[14px] text-[#D92D20]">*</span>
      </label>
      <input
        type={type}
        value={value}
        onKeyDown={() => {}}
        onChange={(e) => handleChange(e)}
        className="mb-5 h-[44px] w-full rounded-[12px] bg-[#EDF2F6] py-[12px] pl-[47px] pr-3 font-TTNormsRegular  text-[14px] text-[#101828] focus:border-none"
        placeholder=""
      />
      <SignIcon icon={icon} />
      {method === "sign-up" && (
        <Fragment>
          <div
            className={cn("mb-3 flex h-5 w-full", {
              "d-none": hideCheck,
              flex: !hideCheck,
            })}
          >
            <SignIcon icon="check" isActive={lengthCheck} />
            <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#475467]">
              Минимум 8 символов
            </span>
          </div>
          <div
            className={cn("mb-3 flex h-5 w-full", {
              "d-none": hideCheck,
              flex: !hideCheck,
            })}
          >
            <SignIcon icon="check" isActive={numCheck} />
            <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#475467]">
              Минимум 1 цифра или спецсимвол
            </span>
          </div>
        </Fragment>
      )}
    </div>
  );
}
