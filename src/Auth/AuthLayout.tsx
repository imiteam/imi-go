"use client";
import { usePathname } from "next/navigation";
import Bullets from "./components/Bullets";
import LayoutImage from "./components/LayoutImage";
import SignIcon from "./components/SignIcon";
import { Fragment, ReactNode, useState } from "react";
import { signIn } from "next-auth/react";
import SignMethodButton from "./components/SignMethodButton";
import Link from "next/link";

export const AuthLayout = function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const method = pathname.substring(6);
  const [isLoading, setIsLoading] = useState(false);

  const signInHandler = async (provider: string) => {
    setIsLoading(true);
    signIn(provider, {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex size-full min-h-[683px] justify-between vsm:items-center md:h-screen md:justify-center md:bg-white  md:pt-10 lg:bg-black">
      <div className="md:w-[360px] md:vsm:w-full md:vsm:max-w-[310px] lg:w-[480px] xl:w-[658px] xl:p-6">
        <div className="md:pt-13 flex size-full flex-col justify-between bg-white xl:rounded-[32px]">
          <div className="flex size-full flex-col lg:relative lg:p-[58px] lg:pb-8 xl:p-[120px] xl:pb-0">
            <div className="mb-6 flex h-[65px] w-full items-center vsm:mt-[25px] vsm:h-[119px] vsm:flex-col">
              <SignIcon icon="imiLogo" />
              <span className="font-NeueMachinaBold text-[36px] leading-[44px] text-[#101828] vsm:text-[30px]">
                {method === "sign-up" ? `Регистрация` : `Авторизация`}
              </span>
            </div>
            {method !== "verify-request" && (
              <Fragment>
                <div className="mb-5 flex h-[29px] w-full items-center justify-start xl:px-1.5">
                  <span className="mr-2 w-[80px] border-b border-b-[#D0D5DD]"></span>
                  <span className="whitespace-nowrap font-TTNormsRegular text-[16px] leading-[19px] text-[#667085]">
                    {method === "sign-up"
                      ? `Создайте аккаунт в 1 клик, через:`
                      : `Войдите в 1 клик, через:`}
                  </span>
                  <span className="ml-2 w-[80px] border-b border-b-[#D0D5DD]"></span>
                </div>
                <div className="mb-8 flex h-11 w-full justify-between vsm:mb-6 xl:px-1.5">
                  <SignMethodButton
                    icon="google"
                    title="Google"
                    onClick={() => signInHandler("google")}
                    disabled={isLoading}
                  />
                  <SignMethodButton
                    icon="yandex"
                    title="Яндекс"
                    onClick={() => signInHandler("yandex")}
                    disabled={isLoading}
                  />
                </div>
              </Fragment>
            )}
            {children}
            {method !== "verify-request" && (
              <div className="flex h-[30px] w-full items-start justify-center px-1.5">
                <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#475467]">
                  {method === "sign-up"
                    ? `Уже есть аккаунт?`
                    : `Ещё нет аккаунта?`}
                </span>
                <Link
                  className="ml-1 font-TTNormsMedium text-[14px] leading-[20px] text-[#0B3BEC]"
                  href={
                    method === "sign-up" ? `/auth/sign-in` : `/auth/sign-up`
                  }
                >
                  {method === "sign-up" ? `Войдите здесь` : `Начните здесь`}
                </Link>
              </div>
            )}
          </div>
          <div className=" m-[20px] mb-[30px] flex justify-between md:mx-0 md:mb-[15px]">
            <span className="w-full font-TTNormsRegular text-[14px] leading-[20px] text-[#475467] ">
              © AiMind 2024
            </span>
            <span className="flex w-full items-center justify-end font-TTNormsRegular text-[14px] leading-[20px] text-[#475467] ">
              <SignIcon icon="footerEmail" /> help@imi.go
            </span>
          </div>
        </div>
      </div>
      <div className="h-screen grow items-start md:hidden lg:flex lg:flex-col lg:justify-between lg:pt-[48px] xl:relative xl:pt-20">
        <Bullets />
        <LayoutImage />
      </div>
    </div>
  );
};
