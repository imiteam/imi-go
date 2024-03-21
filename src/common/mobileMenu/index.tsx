"use client";
import { useQuery, useSubscription } from "@apollo/client";
import {
  DropdownSelect,
  DropdownSelectContent,
  DropdownSelectGroup,
  DropdownSelectItem,
  DropdownSelectTrigger,
} from "../UIkit/profileDropdownSelect";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DefaultIcon from "../../../public/assets/man-person-icon.png";
import { useHeaderStore } from "../header/lib/useHeaderStore";
import {
  SheetContentMobileMenu,
  SheetMobileMenu,
} from "../UIkit/sheetMobileMenu";
import { LogOutIcon } from "./icon_components/LogOutIcon";
import { CloseMobileMenu } from "./buttons/CloseMobileMenu";
import { TemplateButton } from "./buttons/TemplateButton";
import { ChatButton } from "./buttons/ChatButton";
import { LearningButton } from "./buttons/LearningButton";
import { HistoryButton } from "./buttons/HistoryButton";
import { SettingsButton } from "./buttons/SettingsButton";
// все запросы из generated описаны в src=>common=>header=>graphql=>client
import {
  GetPlanUserDocument,
  GetUserInfoDocument,
  UserWalletDocument,
  UserWalletSubscription,
  UserWalletSubscriptionVariables,
} from "generated";

export default function MobileMenu() {
  const { showMobileMenu, setShowMobileMenu } = useHeaderStore();

  const { data: session } = useSession();

  const sheetRef = useRef<HTMLDivElement>(null);

  const pathName = usePathname();

  let currentPath = pathName.split("/")[1] ? pathName.split("/")[1] : "/";

  const [activeButton, setActiveButton] = useState<string>(currentPath!);

  const { data: userWalletData } = useSubscription<
    UserWalletSubscription,
    UserWalletSubscriptionVariables
  >(UserWalletDocument, {
    variables: {
      userId: session?.user.id,
    },
  });

  const { data } = useQuery(GetPlanUserDocument, {
    variables: { id: session?.user.id },
  });
  const { data: GetUserInfoData  } = useQuery(GetUserInfoDocument, {
    variables: { userId: session?.user.id },
  });

  const planName = useCallback(
    (data: any | undefined) => {
      if (data) {
        switch (data.users_by_pk?.plan_id) {
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
    [data],
  );

  useEffect(() => {
    setActiveButton(currentPath!);
  }, [currentPath]);

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
    <SheetMobileMenu open={showMobileMenu}>
      <SheetContentMobileMenu side={"left"} ref={sheetRef} className="">
        <div className="flex size-full flex-col rounded-[20px] bg-[#101828] p-6 dark:bg-[#000]">
          <div className="mb-6 flex h-[51px] w-full items-center justify-between">
            <Link
              href="/lk/settings"
              className="flex items-center justify-center"
            >
              <Image
                src={session?.user?.image ? session.user.image : DefaultIcon}
                width={40}
                height={40}
                alt="avatar"
                className="rounded-[16px]"
              />
            </Link>
            <CloseMobileMenu closeChatSheet={setShowMobileMenu} />
          </div>
          <div className="flex size-full grow flex-col justify-between">
            <div className="flex h-auto w-full flex-col  items-start">
              <TemplateButton
                activeButton={activeButton}
                setShowMobileMenu={setShowMobileMenu}
              />
              <ChatButton
                activeButton={activeButton}
                setShowMobileMenu={setShowMobileMenu}
                userId={session?.user.id!}
              />
              <LearningButton activeButton={activeButton} />
              <HistoryButton
                activeButton={activeButton}
                setShowMobileMenu={setShowMobileMenu}
                userId={session?.user.id!}
              />
            </div>
            <SettingsButton
              activeButton={activeButton}
              setShowMobileMenu={setShowMobileMenu}
            />
          </div>
          <div className="flex h-[64px] w-full items-center justify-between">
            <div className="flex">
              <DropdownSelect>
                <Image
                  src={session?.user?.image ? session.user.image : DefaultIcon}
                  width={40}
                  height={40}
                  alt="avatar"
                  className="mr-[16px] rounded-[16px]  sm:mr-[15px]"
                />
                <div className="relative top-[-2px] flex flex-col">
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
                    className="relative right-[4px] flex  h-[20px] w-[75px] rounded-[20px] p-[0px] text-text-color-white 
                                                                        hover:bg-[#fff] hover:text-black"
                  >
                    <span
                      className=" font-regular relative right-[2px] top-[2px] px-[4px] font-TTNormsMedium text-[12px] text-[#c6c9cc]
                                                                        dark:text-[#98A2B3] md:right-[6px] md:top-[2px]"
                    >
                      {planName(data)}
                    </span>
                  </DropdownSelectTrigger>
                </div>

                <DropdownSelectContent className="">
                  <DropdownSelectGroup className="">
                    <DropdownSelectItem value="apple">
                      Sign Out
                    </DropdownSelectItem>
                    <DropdownSelectItem value="banana">
                      Banana
                    </DropdownSelectItem>
                    <DropdownSelectItem value="blueberry">
                      Blueberry
                    </DropdownSelectItem>
                    <DropdownSelectItem value="grapes">
                      Grapes
                    </DropdownSelectItem>
                    <DropdownSelectItem value="pineapple">
                      Pineapple
                    </DropdownSelectItem>
                  </DropdownSelectGroup>
                </DropdownSelectContent>
              </DropdownSelect>
            </div>

            <span
              onClick={() =>
                signOut({ callbackUrl: "/auth/sign-in", redirect: true })
              }
            >
              <LogOutIcon />
            </span>
          </div>
        </div>
      </SheetContentMobileMenu>
    </SheetMobileMenu>
  );
}
