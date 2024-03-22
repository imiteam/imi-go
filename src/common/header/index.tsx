"use client";

import DefaultIcon from "../../../public/assets/man-person-icon.png";
import { Logo } from "./Logo";
import ProfileDropDown from "./ProfileDropdown";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { useHeaderStore } from "./lib/useHeaderStore";
import { ThemeIcon } from "./icon_components/ThemeIcon";
import { MobileMenuIcon } from "./icon_components/MobileMenuIcon";
import { HeaderNavButton } from "./HeaderNavButton";
import { SettingsIcon } from "./icon_components/SettingsIcon";
import { NotifyIcon } from "./icon_components/NotifyIcon";

export default function Header() {
  
  const pathName = usePathname();

  const { data: session } = useSession();

  let currentPath = pathName.split("/")[1] ? pathName.split("/")[1] : "/";

  const [activeButton, setActiveButton] = useState<string>(currentPath!);

  const [hideHeader, setHideHeader] = useState<boolean>(false);

  const { setShowMobileMenu } = useHeaderStore();

  const handleClickMenu = () => {
    setShowMobileMenu(true);
  };
  useEffect(() => {
    setActiveButton(currentPath!);
  }, [currentPath]);

  useLayoutEffect(() => {
    if (currentPath === "sign") {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  }, [currentPath]);

  if (session) {
    return (
      <header
        style={{ display: hideHeader ? "none" : "flex" }}
        className="flex w-full items-center justify-center bg-bg-lite dark:bg-bg-dark md:py-[8px] md:sm:py-[6px] lg:py-[8px] xl:py-[12px]"
      >
        <nav className="flex w-full max-w-[1920px] items-center justify-between rounded-[20px] bg-header-bg-lite dark:bg-header-bg-dark md:mx-[6px] md:h-[55px] md:rounded-[16px] lg:mx-[8px] lg:h-[65px] xl:mx-[12px]">
          <div className="flex items-center md:w-[302px] md:vsm:w-[200px]">
            <Logo />
            <MobileMenuIcon handleClickMenu={handleClickMenu} />
            {/* <Link href={"/templates"}> */}
              <HeaderNavButton
                activeButtonName={activeButton}
                buttonName="templates"
                title="Шаблоны"
              />
            {/* </Link> */}
            {session?.user && (
              <Link href={`/chat?userId=${session?.user.id}`}>
                <HeaderNavButton
                  activeButtonName={activeButton}
                  buttonName="chat"
                  title="IMI чат"
                />
              </Link>
            )}
            <HeaderNavButton
              activeButtonName={activeButton}
              buttonName="learning"
              title="Обучение"
            />
            <Link href={`/history/text?userId=${session?.user.id}`}>
              <HeaderNavButton
                activeButtonName={activeButton}
                buttonName="history"
                title="История"
              />
            </Link>
          </div>
          <div className="flex w-auto">
            {session?.user && (
              <ProfileDropDown
                icon={session?.user?.image ? session.user.image : DefaultIcon}
                userId={session?.user.id}
              />
            )}
            <div className="flex w-[148px] items-center justify-between md:w-[103px] md:justify-end lg:ml-[20px] xl:ml-[28px]">
              <ThemeIcon />
              <SettingsIcon userId={session?.user.id}/>
              <NotifyIcon />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
