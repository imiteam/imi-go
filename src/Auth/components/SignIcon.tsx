"use client";

export default function SignIcon({
  icon,
  isActive,
}: {
  icon: string;
  isActive?: boolean;
}) {
  switch (icon) {
    case "imiLogo":
      return (
        <svg
          width="79"
          height="78"
          viewBox="0 0 79 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-5"
        >
          <g filter="url(#filter0_dd_10453_75208)">
            <g filter="url(#filter1_i_10453_75208)">
              <path
                d="M7 24.5C7 13.4543 15.9543 4.5 27 4.5H52C63.0457 4.5 72 13.4543 72 24.5V49.5C72 60.5457 63.0457 69.5 52 69.5H27C15.9543 69.5 7 60.5457 7 49.5V24.5Z"
                fill="#0B3BEC"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44.5 28.5H42.5L39.5 40.5H41.5L44.25 29.5H44.9999V45.5H46.9999V28.5H45.9999H44.9999H44.5L44.5 28.5ZM51.9999 28.5H49.9999V45.5H51.9999V28.5Z"
              fill="white"
            />
            <rect x="38" y="39.5" width="2" height="1" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.5 28.5H36.5L39.5 40.5H37.5L34.75 29.5H34.0001V45.5H32.0001V28.5H33.0001H34.0001H34.5L34.5 28.5ZM27.0001 28.5H29.0001V45.5H27.0001V28.5Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_10453_75208"
              x="0.90625"
              y="0.4375"
              width="77.1875"
              height="77.1875"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2.03125" />
              <feGaussianBlur stdDeviation="2.03125" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_10453_75208"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2.03125" />
              <feGaussianBlur stdDeviation="3.04688" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_10453_75208"
                result="effect2_dropShadow_10453_75208"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_10453_75208"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_i_10453_75208"
              x="7"
              y="4.5"
              width="85"
              height="65"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="20" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.2125 0 0 0 0 0.95275 0 0 0 0 1 0 0 0 0.61 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_10453_75208"
              />
            </filter>
          </defs>
        </svg>
      );
    case "google":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-3"
        >
          <g clip-path="url(#clip0_11367_65639)">
            <path
              d="M24.2663 12.7765C24.2663 11.9608 24.2001 11.1406 24.059 10.3381H12.7402V14.9591H19.222C18.953 16.4495 18.0888 17.7679 16.8233 18.6056V21.604H20.6903C22.9611 19.514 24.2663 16.4274 24.2663 12.7765Z"
              fill="#4285F4"
            />
            <path
              d="M12.7401 24.5008C15.9766 24.5008 18.7059 23.4382 20.6945 21.6039L16.8276 18.6055C15.7517 19.3375 14.3627 19.752 12.7445 19.752C9.61388 19.752 6.95946 17.6399 6.00705 14.8003H2.0166V17.8912C4.05371 21.9434 8.2029 24.5008 12.7401 24.5008Z"
              fill="#34A853"
            />
            <path
              d="M6.00277 14.8002C5.50011 13.3099 5.50011 11.696 6.00277 10.2057V7.11475H2.01674C0.314734 10.5055 0.314734 14.5004 2.01674 17.8912L6.00277 14.8002Z"
              fill="#FBBC04"
            />
            <path
              d="M12.7401 5.24966C14.4509 5.2232 16.1044 5.86697 17.3434 7.04867L20.7695 3.62262C18.6001 1.5855 15.7208 0.465534 12.7401 0.500809C8.2029 0.500809 4.05371 3.05822 2.0166 7.11481L6.00264 10.2058C6.95064 7.36173 9.60947 5.24966 12.7401 5.24966Z"
              fill="#EA4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_11367_65639">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "yandex":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-3"
        >
          <g clip-path="url(#clip0_11367_4003)">
            <path
              d="M0.5 12.5C0.5 5.8724 5.8712 0.5 12.5 0.5C19.1264 0.5 24.5 5.8724 24.5 12.5C24.5 19.1276 19.1264 24.5 12.5 24.5C5.8712 24.5 0.5 19.1276 0.5 12.5Z"
              fill="#FC3F1D"
            />
            <path
              d="M14.0363 7.29915H12.9275C10.8947 7.29915 9.82548 8.32875 9.82548 9.84675C9.82548 11.5627 10.5647 12.3667 12.0827 13.3975L13.3367 14.2423L9.73308 19.6267H7.04028L10.2743 14.8099C8.41428 13.4767 7.37028 12.1819 7.37028 9.99195C7.37028 7.24635 9.28428 5.37195 12.9143 5.37195H16.5179V19.6135H14.0363V7.29915Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_11367_4003">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "email":
      return (
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-5 top-[38px]"
        >
          <path
            d="M1.66675 3.33337L8.47085 8.09624C9.02182 8.48193 9.29731 8.67477 9.59697 8.74946C9.86166 8.81544 10.1385 8.81544 10.4032 8.74946C10.7029 8.67477 10.9783 8.48193 11.5293 8.09624L18.3334 3.33337M5.66675 14.1667H14.3334C15.7335 14.1667 16.4336 14.1667 16.9684 13.8942C17.4388 13.6545 17.8212 13.2721 18.0609 12.8017C18.3334 12.2669 18.3334 11.5668 18.3334 10.1667V4.83337C18.3334 3.43324 18.3334 2.73318 18.0609 2.1984C17.8212 1.72799 17.4388 1.34554 16.9684 1.10586C16.4336 0.833374 15.7335 0.833374 14.3334 0.833374H5.66675C4.26662 0.833374 3.56655 0.833374 3.03177 1.10586C2.56137 1.34554 2.17892 1.72799 1.93923 2.1984C1.66675 2.73318 1.66675 3.43324 1.66675 4.83337V10.1667C1.66675 11.5668 1.66675 12.2669 1.93923 12.8017C2.17892 13.2721 2.56137 13.6545 3.03177 13.8942C3.56655 14.1667 4.26662 14.1667 5.66675 14.1667Z"
            stroke="#667085"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "password":
      return (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-5 top-[38px]"
        >
          <path
            d="M12.1666 6.83333V5.16667C12.1666 2.86548 10.3011 1 7.99992 1C5.69873 1 3.83325 2.86548 3.83325 5.16667V6.83333M7.99992 10.5833V12.25M5.33325 16H10.6666C12.0667 16 12.7668 16 13.3016 15.7275C13.772 15.4878 14.1544 15.1054 14.3941 14.635C14.6666 14.1002 14.6666 13.4001 14.6666 12V10.8333C14.6666 9.4332 14.6666 8.73314 14.3941 8.19836C14.1544 7.72795 13.772 7.3455 13.3016 7.10582C12.7668 6.83333 12.0667 6.83333 10.6666 6.83333H5.33325C3.93312 6.83333 3.23306 6.83333 2.69828 7.10582C2.22787 7.3455 1.84542 7.72795 1.60574 8.19836C1.33325 8.73314 1.33325 9.4332 1.33325 10.8333V12C1.33325 13.4001 1.33325 14.1002 1.60574 14.635C1.84542 15.1054 2.22787 15.4878 2.69828 15.7275C3.23306 16 3.93312 16 5.33325 16Z"
            stroke="#667085"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M0 10.5C0 4.97715 4.47715 0.5 10 0.5C15.5228 0.5 20 4.97715 20 10.5C20 16.0228 15.5228 20.5 10 20.5C4.47715 20.5 0 16.0228 0 10.5Z"
            fill={isActive ? "#155EEF" : "#D0D5DD"}
          />
          <path
            d="M6.25 10.5L8.75 13L13.75 8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "footerEmail":
      return (
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M1.3335 3.66675L6.77678 7.47704C7.21756 7.78559 7.43795 7.93986 7.67767 7.99962C7.88943 8.0524 8.1109 8.0524 8.32265 7.99962C8.56238 7.93986 8.78277 7.78559 9.22355 7.47704L14.6668 3.66675M4.5335 12.3334H11.4668C12.5869 12.3334 13.147 12.3334 13.5748 12.1154C13.9511 11.9237 14.2571 11.6177 14.4488 11.2414C14.6668 10.8136 14.6668 10.2535 14.6668 9.13341V4.86675C14.6668 3.74664 14.6668 3.18659 14.4488 2.75877C14.2571 2.38244 13.9511 2.07648 13.5748 1.88474C13.147 1.66675 12.5869 1.66675 11.4668 1.66675H4.5335C3.41339 1.66675 2.85334 1.66675 2.42552 1.88474C2.04919 2.07648 1.74323 2.38244 1.55148 2.75877C1.3335 3.18659 1.3335 3.74664 1.3335 4.86675V9.13341C1.3335 10.2535 1.3335 10.8136 1.55148 11.2414C1.74323 11.6177 2.04919 11.9237 2.42552 12.1154C2.85334 12.3334 3.41339 12.3334 4.5335 12.3334Z"
            stroke="#667085"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrowRight":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8H15M15 8L8 1M15 8L8 15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrowLeft":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 8H1M1 8L8 15M1 8L8 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
