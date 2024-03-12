"use client";

import { memo } from "react";
import { useWindowSize } from "react-use";

export const DescriptionIcon = memo(function DescriptionIcon(props: {
  icon: string;
}) {
  const { width } = useWindowSize();
  switch (props.icon) {
    case "roleDescription":
      return width <= 979 ? (
        <svg
          width="128"
          height="130"
          viewBox="0 0 128 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-white dark:fill-black"
            d="M0 16C0 7.16344 7.16344 0 16 0H87.7292C93.8482 0 99.4313 3.48986 102.112 8.99033L125.504 56.9865C128.232 62.5838 128.197 69.1324 125.41 74.7005L102.154 121.162C99.4429 126.579 93.9045 130 87.8466 130H16C7.16344 130 0 122.837 0 114V16Z"
            // fill="none"
          />
        </svg>
      ) : (
        <svg
          width="189"
          height="150"
          viewBox="0 0 189 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-white dark:fill-black"
            d="M0 20C0 8.9543 8.95431 0 20 0H138.132C145.49 0 152.254 4.03994 155.742 10.5183L185.826 66.3906C189.051 72.38 189.01 79.5979 185.718 85.5508L155.786 139.679C152.265 146.047 145.562 150 138.284 150H20C8.9543 150 0 141.046 0 130V20Z"
            // fill="none"
          />
        </svg>
      );

    case "roleDescriptionAI":
      return (
        <svg
          width="30"
          height="26"
          viewBox="0 0 30 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[31px] top-[28px] md:left-[16px] md:top-[22px] md:vsm:relative md:vsm:left-[0px] md:vsm:top-[6px]"
        >
          <path
            d="M21.2956 0H8.71935C3.25662 0 0 2.821 0 7.553V18.434C0 23.179 3.25662 26 8.71935 26H21.2806C26.7433 26 29.9999 23.179 29.9999 18.447V7.553C30.015 2.821 26.7583 0 21.2956 0Z"
            fill="#0B3BEC"
          />
        </svg>
      );
  }
});
