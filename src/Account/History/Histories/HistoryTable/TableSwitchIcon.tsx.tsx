import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../../../common/UIkit/tooltip'
import {useTheme} from 'next-themes'
import {memo, useEffect} from 'react'

export const TableSwitchIcon =  memo(function TableSwitchIcon({icon}: {icon: string}) {
  const {theme} = useTheme()
  useEffect(() => {
    document.documentElement.style.setProperty('--table-icon-hovered-color', theme === 'light' ? '#2D384B' : '#CECFD2')
    document.documentElement.style.setProperty('--table-icon-color', theme === 'light' ? '#98A2B3' : '#667085')
  }, [theme])
  switch (icon) {
    case 'show':
      return (
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild> 
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="tableShowIcon"
                className="cursor-pointer lg:mr-[5px] xl:mr-0 md:mr-[5px]"
              >
                <path
                  d="M9.66683 1.89063V5.33274C9.66683 5.79945 9.66683 6.03281 9.75766 6.21107C9.83755 6.36787 9.96504 6.49535 10.1218 6.57525C10.3001 6.66608 10.5335 6.66608 11.0002 6.66608H14.4423M11.3335 10.8327H4.66683M11.3335 14.166H4.66683M6.3335 7.49935H4.66683M9.66683 1.66602H5.3335C3.93336 1.66602 3.2333 1.66602 2.69852 1.9385C2.22811 2.17818 1.84566 2.56063 1.60598 3.03104C1.3335 3.56582 1.3335 4.26588 1.3335 5.66602V14.3327C1.3335 15.7328 1.3335 16.4329 1.60598 16.9677C1.84566 17.4381 2.22811 17.8205 2.69852 18.0602C3.2333 18.3327 3.93336 18.3327 5.3335 18.3327H10.6668C12.067 18.3327 12.767 18.3327 13.3018 18.0602C13.7722 17.8205 14.1547 17.4381 14.3943 16.9677C14.6668 16.4329 14.6668 15.7328 14.6668 14.3327V6.66602L9.66683 1.66602Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </TooltipTrigger>
            <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
              <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
                В разработке
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    case 'download':
      return (
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="tableDownloadIcon"
                className="cursor-pointer lg:mr-[5px] xl:mr-0 md:mr-[5px]"
              >
                <path
                  d="M9.66683 1.89063V5.33274C9.66683 5.79945 9.66683 6.03281 9.75766 6.21107C9.83755 6.36787 9.96504 6.49535 10.1218 6.57525C10.3001 6.66608 10.5335 6.66608 11.0002 6.66608H14.4423M5.50016 12.4993L8.00016 14.9993M8.00016 14.9993L10.5002 12.4993M8.00016 14.9993L8.00016 9.99935M9.66683 1.66602H5.3335C3.93336 1.66602 3.2333 1.66602 2.69852 1.9385C2.22811 2.17818 1.84566 2.56063 1.60598 3.03104C1.3335 3.56582 1.3335 4.26588 1.3335 5.66602V14.3327C1.3335 15.7328 1.3335 16.4329 1.60598 16.9677C1.84566 17.4381 2.22811 17.8205 2.69852 18.0602C3.2333 18.3327 3.93336 18.3327 5.3335 18.3327H10.6668C12.067 18.3327 12.767 18.3327 13.3018 18.0602C13.7722 17.8205 14.1547 17.4381 14.3943 16.9677C14.6668 16.4329 14.6668 15.7328 14.6668 14.3327V6.66602L9.66683 1.66602Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </TooltipTrigger>
            <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
              <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
              В разработке
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    case 'message':
      return (
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger asChild>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="tableMessageIcon"
                className="cursor-pointer lg:mr-[5px] xl:mr-0"
              >
                <path
                  d="M1.6665 3.83398L8.4706 8.59685C9.02158 8.98254 9.29707 9.17538 9.59672 9.25007C9.86142 9.31605 10.1383 9.31605 10.403 9.25007C10.7026 9.17538 10.9781 8.98254 11.5291 8.59685L18.3332 3.83398M5.6665 14.6673H14.3332C15.7333 14.6673 16.4334 14.6673 16.9681 14.3948C17.4386 14.1552 17.821 13.7727 18.0607 13.3023C18.3332 12.7675 18.3332 12.0674 18.3332 10.6673V5.33398C18.3332 3.93385 18.3332 3.23379 18.0607 2.69901C17.821 2.2286 17.4386 1.84615 16.9681 1.60647C16.4334 1.33398 15.7333 1.33398 14.3332 1.33398H5.6665C4.26637 1.33398 3.56631 1.33398 3.03153 1.60647C2.56112 1.84615 2.17867 2.2286 1.93899 2.69901C1.6665 3.23379 1.6665 3.93385 1.6665 5.33398V10.6673C1.6665 12.0674 1.6665 12.7675 1.93899 13.3023C2.17867 13.7727 2.56112 14.1552 3.03153 14.3948C3.56631 14.6673 4.26637 14.6673 5.6665 14.6673Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </TooltipTrigger>
            <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
              <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
              В разработке
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    case 'menu':
      return (
        <svg
          width="4"
          height="16"
          viewBox="0 0 4 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="tableMenu"
          className="cursor-pointer"
        >
          <path
            d="M1.99984 8.83398C2.46007 8.83398 2.83317 8.46089 2.83317 8.00065C2.83317 7.54041 2.46007 7.16732 1.99984 7.16732C1.5396 7.16732 1.1665 7.54041 1.1665 8.00065C1.1665 8.46089 1.5396 8.83398 1.99984 8.83398Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.99984 3.00065C2.46007 3.00065 2.83317 2.62755 2.83317 2.16732C2.83317 1.70708 2.46007 1.33398 1.99984 1.33398C1.5396 1.33398 1.1665 1.70708 1.1665 2.16732C1.1665 2.62755 1.5396 3.00065 1.99984 3.00065Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.99984 14.6673C2.46007 14.6673 2.83317 14.2942 2.83317 13.834C2.83317 13.3737 2.46007 13.0007 1.99984 13.0007C1.5396 13.0007 1.1665 13.3737 1.1665 13.834C1.1665 14.2942 1.5396 14.6673 1.99984 14.6673Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'sort':
      return (
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
          <path
            d="M0.666504 7.99935L3.99984 11.3327L7.33317 7.99935M0.666504 3.99935L3.99984 0.666016L7.33317 3.99935"
            stroke={theme === 'light' ? '#667085' : '#94969C'}
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
})
