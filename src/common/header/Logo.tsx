import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import logo from "../../../public/assets/Logotip.png";

export const Logo = memo(function Logo(props: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "relative bottom-0 left-[-1px] block rounded-[20px] md:size-[55px] md:rounded-[16px] lg:mr-[7px] lg:size-[65px] xl:mr-[13px]",
        props.className,
      )}
    >
      <Image
        src={logo}
        width={65}
        height={65}
        alt="logo"
        className="rounded-[20px] shadow-logo-shadow md:rounded-[16px]"
      />
    </Link>
  );
});
