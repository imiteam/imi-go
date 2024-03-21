"use client";
import { useQuery, useSubscription } from "@apollo/client";
import {
  DropdownSelect,
  DropdownSelectContent,
  DropdownSelectGroup,
  DropdownSelectItem,
  DropdownSelectTrigger,
} from "../UIkit/profileDropdownSelect";
import { Button } from "../../common/UIkit/button";
import {
  GetPlanUserDocument,
  GetUserInfoDocument,
  UserWalletDocument,
  UserWalletSubscription,
  UserWalletSubscriptionVariables,
} from "../../../generated/index";
import { signOut } from "next-auth/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useCallback, useMemo } from "react";

export default function ProfileDropDown({
  icon,
  userId,
}: {
  icon: StaticImageData | string;
  userId: string;
}) {
  const { data: userWalletData } = useSubscription<
    UserWalletSubscription,
    UserWalletSubscriptionVariables
  >(UserWalletDocument, {
    variables: {
      userId: userId,
    },
  });

  const { data } = useQuery(GetPlanUserDocument, {
    variables: { id: userId },
  });
  const { data: GetUserInfoData  } = useQuery(GetUserInfoDocument, {
    variables: { userId: userId },
  });

  const planName = useCallback(
    (PlanData: any | undefined) => {
      if (PlanData) {
        switch (PlanData.users_by_pk?.plan_id) {
          case "8d035581-2209-4212-a4f2-6938bd0bf32a":
            return "Бесплатный";
          case "6a7c060b-1d7c-414a-88a5-f43edc9b6aee":
            return "Базовый"
          case "07428e4f-6d8f-41ee-95fb-1a11180f5877" :
            return "PRO"
          default:
            return <div className="flex justify-center items-center">
            <div
              className="animate-spin rounded-full h-4.5 w-4.5 border-b-2 border-gray-900"
              style={{ width: "15px", height: "15px" }}
            ></div>
          </div>;
        }
      }
    },
    [],
  );

  const progress = useMemo(
    () => {
      if(GetUserInfoData?.users[0].ai_text_model !== "gpt-4"){
        return ((userWalletData?.wallets[0]?.tokens! + userWalletData?.wallets[0]?.additional_tokens!) * 3) / 4
      } else {
        return (((userWalletData?.wallets[0]?.tokens! + userWalletData?.wallets[0]?.additional_tokens!) * 3) / 4) / 8
      }
    },
    [userWalletData?.wallets, GetUserInfoData],
  );
  
  return (
    <DropdownSelect>
      <Link href="/" className="flex items-center justify-center">
        <Image
          src={icon}
          width={40}
          height={40}
          alt="avatar"
          className="mr-[16px] vsm:hidden sm:mr-[3px] md:rounded-[12px] lg:rounded-[16px] "
        />
      </Link>
      <div className="flex flex-col sm:hidden">
        <span
          className="relative right-[1px] top-[9px] font-TTNormsMedium text-[14px] font-medium text-active-text-color-white 
            md:right-[7px] md:top-[6px] md:font-InterMedium md:text-[12px]"
        >
          {isNaN(progress) ? (
            <div className="flex justify-center items-center">
              <div
                className="animate-spin rounded-full h-4.5 w-4.5 border-b-2 border-gray-900"
                style={{ width: "15px", height: "15px" }}
              ></div>
            </div>
          ) : (
            `${Math.round(progress)} слов`
          )}
        </span>
        <DropdownSelectTrigger
          className="relative right-[4px] flex  h-[20px] w-[75px] rounded-[20px] p-[0px] text-text-color-white"
          // hover:bg-[#fff] hover:text-black"
          disabled
        >
          <span
            className="font-regular relative right-[2px] top-[4px] px-[4px] font-TTNormsMedium text-[12px] text-[#c6c9cc]
                dark:text-[#98A2B3] md:right-[6px] md:top-[2px]"
          >
            {planName(data)}
          </span>
        </DropdownSelectTrigger>
      </div>

      <DropdownSelectContent className="">
        <DropdownSelectGroup className="">
          <DropdownSelectItem value="apple">Sign Out</DropdownSelectItem>
          <Button
            className="ml-2 w-auto px-4 py-5 "
            onClick={() =>
              signOut({ callbackUrl: "/auth/sign-in", redirect: true })
            }
          >
            Выход
          </Button>
          <DropdownSelectItem value="banana">Banana</DropdownSelectItem>
          <DropdownSelectItem value="blueberry">Blueberry</DropdownSelectItem>
          <DropdownSelectItem value="grapes">Grapes</DropdownSelectItem>
          <DropdownSelectItem value="pineapple">Pineapple</DropdownSelectItem>
        </DropdownSelectGroup>
      </DropdownSelectContent>
    </DropdownSelect>
  );
}
