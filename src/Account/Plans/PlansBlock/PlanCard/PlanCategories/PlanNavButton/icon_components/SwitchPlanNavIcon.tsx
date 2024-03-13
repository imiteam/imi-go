'use client'

import { memo } from "react"



export const SwitchPlanNavIcon = memo(function SwitchPlanNavIcon(props: {
    icon: string
    isActive: boolean

}) {

  switch (props.icon) {
    case 'text':
      return (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative right-[3px] vsm:left-[1px]"
        >
          <path
            d="M13.8333 8.33333H3M17.1667 5H3M17.1667 11.6667H3M13.8333 15H3"
            stroke={props.isActive ? 'white' : 'rgba(11, 59, 236, 1)'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
      case 'mix':
        return (
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.5 5.70898H11.5M16.5 1.33398H1.5M16.5 10.2923H11.5M16.5 14.6673H1.5M2.83333 11.334H6.83333C7.30004 11.334 7.5334 11.334 7.71166 11.2432C7.86846 11.1633 7.99594 11.0358 8.07584 10.879C8.16667 10.7007 8.16667 10.4674 8.16667 10.0007V6.00065C8.16667 5.53394 8.16667 5.30059 8.07584 5.12233C7.99594 4.96552 7.86846 4.83804 7.71166 4.75815C7.5334 4.66732 7.30004 4.66732 6.83333 4.66732H2.83333C2.36662 4.66732 2.13327 4.66732 1.95501 4.75815C1.79821 4.83804 1.67072 4.96552 1.59083 5.12233C1.5 5.30059 1.5 5.53394 1.5 6.00065V10.0007C1.5 10.4674 1.5 10.7007 1.59083 10.879C1.67072 11.0358 1.79821 11.1633 1.95501 11.2432C2.13327 11.334 2.36662 11.334 2.83333 11.334Z"
              stroke={props.isActive ? 'white' : '#0B3BEC'}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
        case 'pic':
            return (
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative right-[2px] vsm:left-[1px]"
              >
                <path
                  d="M16.3333 17.5H17.1753C17.9846 17.5 18.3892 17.5 18.6123 17.3313C18.8066 17.1843 18.9269 16.9596 18.9414 16.7163C18.958 16.4371 18.7336 16.1004 18.2847 15.4271L15.776 11.6641C15.4051 11.1077 15.2196 10.8295 14.9858 10.7325C14.7815 10.6478 14.5518 10.6478 14.3474 10.7325C14.1136 10.8295 13.9282 11.1077 13.5572 11.6641L12.9371 12.5943M16.3333 17.5L9.92954 8.25015C9.56126 7.71818 9.37712 7.4522 9.1471 7.3587C8.94589 7.2769 8.72069 7.2769 8.51947 7.3587C8.28946 7.4522 8.10531 7.71818 7.73703 8.25015L2.78179 15.4077C2.3126 16.0854 2.078 16.4243 2.09136 16.7061C2.10299 16.9515 2.22234 17.1793 2.41751 17.3286C2.64162 17.5 3.05376 17.5 3.87804 17.5H16.3333ZM18 5C18 6.38071 16.8807 7.5 15.5 7.5C14.1192 7.5 13 6.38071 13 5C13 3.61929 14.1192 2.5 15.5 2.5C16.8807 2.5 18 3.61929 18 5Z"
                  stroke={props.isActive ? 'white' : '#0B3BEC'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )
  }
})