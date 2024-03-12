"use client";

import { memo } from "react";
import { useWindowSize } from "react-use";

export const ArrowIcon = memo(function ArrowIcon(props: {
  icon: string;
  isActive: boolean;
}) {
  const { width } = useWindowSize();
  switch (props.icon) {
    case "arrow-l-60":
      return width <= 1280 && width >= 980 ? (
        <svg
          width="55"
          height="69"
          viewBox="0 0 55 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H35C46.0457 0 55 8.9543 55 20V49C55 60.0457 46.0457 69 35 69H20C8.95431 69 0 60.0457 0 49V20Z"
            className="fill-white dark:fill-black"
          />
          <g opacity={props.isActive ? "1" : "0.5"}>
            <path
              d="M30.5 40.5L24.5 34.5L30.5 28.5"
              stroke="#2D384B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ) : (
        <svg
          width="60"
          height="69"
          viewBox="0 0 60 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <g opacity={props.isActive ? "1" : "0.5"}>
            <path
              d="M0 20C0 8.9543 8.95431 0 20 0H40C51.0457 0 60 8.9543 60 20V49C60 60.0457 51.0457 69 40 69H20C8.9543 69 0 60.0457 0 49V20Z"
              className="fill-white dark:fill-black"
            />
            <g opacity={props.isActive ? "1" : "0.5"}>
              <path
                d="M33 40.5L27 34.5L33 28.5"
                stroke="#2D384B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      );
    case "arrow-r-60":
      return width <= 1280 && width >= 980 ? (
        <svg
          width="55"
          height="69"
          viewBox="0 0 55 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H35C46.0457 0 55 8.9543 55 20V49C55 60.0457 46.0457 69 35 69H20C8.95431 69 0 60.0457 0 49V20Z"
            className="fill-white dark:fill-black"
            opacity={props.isActive ? "1" : "0.5"}
          />
          <path
            d="M24.5 40.5L30.5 34.5L24.5 28.5"
            stroke="#2D384B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={props.isActive ? "1" : "0.5"}
          />
        </svg>
      ) : (
        <svg
          width="60"
          height="69"
          viewBox="0 0 60 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M0 20C0 8.9543 8.95431 0 20 0H40C51.0457 0 60 8.9543 60 20V49C60 60.0457 51.0457 69 40 69H20C8.9543 69 0 60.0457 0 49V20Z"
            className="fill-white dark:fill-black"
            opacity={props.isActive ? "1" : "0.5"}
          />
          <path
            d="M27 40.5L33 34.5L27 28.5"
            stroke="#2D384B"
            opacity={props.isActive ? "1" : "0.5"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
});
