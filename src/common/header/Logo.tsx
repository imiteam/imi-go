import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import Logotip from "../../../public/assets/Logo_IMI.svg";

export const Logo = memo(function Logo(props: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "relative bottom-0 left-[-1px] block rounded-[20px] md:size-[55px] md:rounded-[16px] lg:mr-[7px] lg:size-[65px] xl:mr-[13px]",
        props.className,
      )}
    >
      <svg 
      width="65" 
      height="65" 
      viewBox="0 0 65 65" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="rounded-[20px] shadow-logo-shadow md:size-[55px] md:rounded-[16px] lg:mr-[7px] lg:size-[65px]">
        <g filter="url(#filter0_i_8680_2707)">
        <path d="M0 20C0 8.9543 8.95431 0 20 0H45C56.0457 0 65 8.95431 65 20V45C65 56.0457 56.0457 65 45 65H20C8.9543 65 0 56.0457 0 45V20Z" fill="#0B3BEC"/>
        </g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 24H35.5L32.5 36H34.5L37.25 25H37.9999V41H39.9999V24H38.9999H37.9999H37.5L37.5 24ZM44.9999 24H42.9999V41H44.9999V24Z" fill="white"/>
        <rect x="31" y="35" width="2" height="1" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 24H29.5L32.5 36H30.5L27.75 25H27.0001V41H25.0001V24H26.0001H27.0001H27.5L27.5 24ZM20.0001 24H22.0001V41H20.0001V24Z" fill="white"/>
        <defs>
        <filter id="filter0_i_8680_2707" x="0" y="0" width="85" height="65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="20"/>
        <feGaussianBlur stdDeviation="15"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.2125 0 0 0 0 0.95275 0 0 0 0 1 0 0 0 0.61 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8680_2707"/>
        </filter>
        </defs>
      </svg>
      {/* <Image
        src={logo}
        width={65}
        height={65}
        alt="logo"
        className="rounded-[20px] shadow-logo-shadow md:rounded-[16px]"
      /> */}
    </Link>
  );
});
