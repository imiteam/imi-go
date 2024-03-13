"use client"
import { memo } from "react"

export const SwitchGoToPlanIcon = memo(function SwitchGoToPlanIcon(props: {
    icon : string
}){

    switch(props.icon){
        case "activePlan" :
            return (
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[10px]"
                >
                  <path
                    d="M14.3333 1L5.16667 10.1667L1 6"
                    stroke="#0B3BEC"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )
        case "goToPlan" :
            return (
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-[10px]"
                >
                  <path
                    d="M8.8333 1.66602L1.41118 10.5726C1.12051 10.9214 0.975169 11.0958 0.972948 11.2431C0.971017 11.3711 1.02808 11.4929 1.12768 11.5734C1.24226 11.666 1.46928 11.666 1.92333 11.666H7.99997L7.16663 18.3327L14.5888 9.42614C14.8794 9.07733 15.0248 8.90293 15.027 8.75563C15.0289 8.62758 14.9719 8.50576 14.8723 8.42527C14.7577 8.33268 14.5307 8.33268 14.0766 8.33268H7.99997L8.8333 1.66602Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )
    }
})
