import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'common/UIkit/tooltip'
import {useTheme} from 'next-themes'
import {memo, useEffect} from 'react'

export const SwitchHistoryTextIcon = memo(function SwitchHistoryTextIcon({icon, callBack,id,openChat}: {
  icon: string
  id ?: string
  callBack ?: (event: React.MouseEvent, chatId: string) => Promise<void>
  openChat?: (chatId: string) => void
}) {
  const {theme} = useTheme()
  useEffect(() => {
    document.documentElement.style.setProperty('--table-icon-hovered-color', theme === 'light' ? '#2D384B' : '#CECFD2')
    document.documentElement.style.setProperty('--table-icon-color', theme === 'light' ? '#98A2B3' : '#667085')
  }, [theme])
  switch (icon) {
    case 'chat':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="tableShowIcon"
        >
          <path
            d="M6.08333 9.41667C6.08333 9.41667 7.17708 10.6667 9 10.6667C10.8229 10.6667 11.9167 9.41667 11.9167 9.41667M11.2917 5.25H11.3M6.70833 5.25H6.71667M4.83333 14V15.9463C4.83333 16.3903 4.83333 16.6123 4.92436 16.7263C5.00352 16.8255 5.12356 16.8832 5.25045 16.8831C5.39636 16.8829 5.56973 16.7442 5.91646 16.4668L7.90434 14.8765C8.31043 14.5517 8.51347 14.3892 8.73957 14.2737C8.94017 14.1712 9.15369 14.0963 9.37435 14.051C9.62306 14 9.88308 14 10.4031 14H12.5C13.9001 14 14.6002 14 15.135 13.7275C15.6054 13.4878 15.9878 13.1054 16.2275 12.635C16.5 12.1002 16.5 11.4001 16.5 10V5.5C16.5 4.09987 16.5 3.3998 16.2275 2.86502C15.9878 2.39462 15.6054 2.01217 15.135 1.77248C14.6002 1.5 13.9001 1.5 12.5 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V10.6667C1.5 11.4416 1.5 11.8291 1.58519 12.147C1.81635 13.0098 2.49022 13.6836 3.35295 13.9148C3.67087 14 4.05836 14 4.83333 14ZM11.7083 5.25C11.7083 5.48012 11.5218 5.66667 11.2917 5.66667C11.0615 5.66667 10.875 5.48012 10.875 5.25C10.875 5.01988 11.0615 4.83333 11.2917 4.83333C11.5218 4.83333 11.7083 5.01988 11.7083 5.25ZM7.125 5.25C7.125 5.48012 6.93845 5.66667 6.70833 5.66667C6.47821 5.66667 6.29167 5.48012 6.29167 5.25C6.29167 5.01988 6.47821 4.83333 6.70833 4.83333C6.93845 4.83333 7.125 5.01988 7.125 5.25Z"
            stroke={theme === 'light' ? '#98A2B3' : '#667085'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'doc':
      return (
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="tableShowIcon"
          className="cursor-pointer lg:mr-[5px] xl:mr-0"
        >
          <path
            d="M9.66683 1.89063V5.33274C9.66683 5.79945 9.66683 6.03281 9.75766 6.21107C9.83755 6.36787 9.96504 6.49535 10.1218 6.57525C10.3001 6.66608 10.5335 6.66608 11.0002 6.66608H14.4423M11.3335 10.8327H4.66683M11.3335 14.166H4.66683M6.3335 7.49935H4.66683M9.66683 1.66602H5.3335C3.93336 1.66602 3.2333 1.66602 2.69852 1.9385C2.22811 2.17818 1.84566 2.56063 1.60598 3.03104C1.3335 3.56582 1.3335 4.26588 1.3335 5.66602V14.3327C1.3335 15.7328 1.3335 16.4329 1.60598 16.9677C1.84566 17.4381 2.22811 17.8205 2.69852 18.0602C3.2333 18.3327 3.93336 18.3327 5.3335 18.3327H10.6668C12.067 18.3327 12.767 18.3327 13.3018 18.0602C13.7722 17.8205 14.1547 17.4381 14.3943 16.9677C14.6668 16.4329 14.6668 15.7328 14.6668 14.3327V6.66602L9.66683 1.66602Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={theme === 'light' ? '#98A2B3' : '#667085'}
          />
        </svg>
      )
    case 'imiChat':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11268_13175)">
            <path
              d="M0.833496 9.63301C0.833496 5.48463 0.833496 3.41047 2.12223 2.12174C3.41096 0.833008 5.48512 0.833008 9.6335 0.833008H10.3668C14.5152 0.833008 16.5894 0.833008 17.8781 2.12174C19.1668 3.41047 19.1668 5.48463 19.1668 9.63301V10.3663C19.1668 14.5147 19.1668 16.5889 17.8781 17.8776C16.5894 19.1663 14.5152 19.1663 10.3668 19.1663H9.6335C5.48512 19.1663 3.41096 19.1663 2.12223 17.8776C0.833496 16.5889 0.833496 14.5147 0.833496 10.3663V9.63301Z"
              fill="#0B3BEC"
            />
            <rect x="13.3335" y="5.83301" width="1.66667" height="9.16667" fill="white" />
            <path d="M12.5 5.83301H11.6528L10 11.1306V11.6663H11.1453L12.5 7.8221V5.83301Z" fill="white" />
            <path d="M7.5 5.83301H8.34724L10 11.1306V11.6663H8.85468L7.5 7.8221V5.83301Z" fill="white" />
            <rect width="1.66667" height="9.16667" transform="matrix(-1 0 0 1 6.6665 5.83301)" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_11268_13175">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'copy':
      return (
        <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-5 cursor-pointer"
              id="hoveredTextHistoryTableEventIcon"
            >
              <g clip-path="url(#clip0_11268_38821)">
                <path
                  d="M8.74984 1.66932C8.1873 1.67695 7.84959 1.70951 7.57652 1.84865C7.26292 2.00844 7.00795 2.2634 6.84816 2.57701C6.70903 2.85007 6.67646 3.18778 6.66883 3.75033M16.2498 1.66932C16.8124 1.67695 17.1501 1.70951 17.4232 1.84865C17.7368 2.00844 17.9917 2.2634 18.1515 2.57701C18.2906 2.85007 18.3232 3.18778 18.3308 3.75032M18.3308 11.2503C18.3232 11.8129 18.2907 12.1506 18.1515 12.4236C17.9917 12.7372 17.7368 12.9922 17.4232 13.152C17.1501 13.2911 16.8124 13.3237 16.2498 13.3313M18.3332 6.66699V8.33365M11.6665 1.66699H13.3331M4.33317 18.3337H10.6665C11.5999 18.3337 12.0666 18.3337 12.4232 18.152C12.7368 17.9922 12.9917 17.7372 13.1515 17.4236C13.3332 17.0671 13.3332 16.6004 13.3332 15.667V9.33366C13.3332 8.40024 13.3332 7.93353 13.1515 7.57701C12.9917 7.2634 12.7368 7.00844 12.4232 6.84865C12.0666 6.66699 11.5999 6.66699 10.6665 6.66699H4.33317C3.39975 6.66699 2.93304 6.66699 2.57652 6.84865C2.26292 7.00844 2.00795 7.2634 1.84816 7.57701C1.6665 7.93353 1.6665 8.40024 1.6665 9.33366V15.667C1.6665 16.6004 1.6665 17.0671 1.84816 17.4236C2.00795 17.7372 2.26292 17.9922 2.57652 18.152C2.93304 18.3337 3.39975 18.3337 4.33317 18.3337Z"
                  stroke={theme === 'light' ? '#98A2B3' : '#667085'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_11268_38821">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
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
    case 'edit':
      return (
        <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-5 cursor-pointer"
              id="hoveredTextHistoryTableEventIcon"
              onClick={() => openChat!(id!)}
            >
              <path
                d="M17.5 14.9995L16.6666 15.9112C16.2245 16.3946 15.6251 16.6662 15.0001 16.6662C14.3751 16.6662 13.7757 16.3946 13.3337 15.9112C12.891 15.4288 12.2916 15.1579 11.6668 15.1579C11.042 15.1579 10.4426 15.4288 9.99998 15.9112M2.5 16.6662H3.89545C4.3031 16.6662 4.50693 16.6662 4.69874 16.6202C4.8688 16.5793 5.03138 16.512 5.1805 16.4206C5.34869 16.3175 5.49282 16.1734 5.78107 15.8852L16.25 5.4162C16.9404 4.72585 16.9404 3.60656 16.25 2.9162C15.5597 2.22585 14.4404 2.22585 13.75 2.9162L3.28105 13.3852C2.9928 13.6734 2.84867 13.8175 2.7456 13.9857C2.65422 14.1348 2.58688 14.2974 2.54605 14.4675C2.5 14.6593 2.5 14.8631 2.5 15.2708V16.6662Z"
                stroke={theme === 'light' ? '#98A2B3' : '#667085'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </TooltipTrigger>
          <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
            <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
              Открыть документ
            </span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      )
    case 'delete':
      return (
        <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              id="hoveredTextHistoryTableEventIcon"
              onClick={(e) => callBack!(e,id!)}
            >
              <path
                d="M13.3333 5.00033V4.33366C13.3333 3.40024 13.3333 2.93353 13.1517 2.57701C12.9919 2.2634 12.7369 2.00844 12.4233 1.84865C12.0668 1.66699 11.6001 1.66699 10.6667 1.66699H9.33333C8.39991 1.66699 7.9332 1.66699 7.57668 1.84865C7.26308 2.00844 7.00811 2.2634 6.84832 2.57701C6.66667 2.93353 6.66667 3.40024 6.66667 4.33366V5.00033M8.33333 9.58366V13.7503M11.6667 9.58366V13.7503M2.5 5.00033H17.5M15.8333 5.00033V14.3337C15.8333 15.7338 15.8333 16.4339 15.5608 16.9686C15.3212 17.439 14.9387 17.8215 14.4683 18.0612C13.9335 18.3337 13.2335 18.3337 11.8333 18.3337H8.16667C6.76654 18.3337 6.06647 18.3337 5.53169 18.0612C5.06129 17.8215 4.67883 17.439 4.43915 16.9686C4.16667 16.4339 4.16667 15.7338 4.16667 14.3337V5.00033"
                stroke={theme === 'light' ? '#98A2B3' : '#667085'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </TooltipTrigger>
          <TooltipContent className="rounded-[8px] bg-[black] dark:bg-[#ffffff]">
            <span className="font-TTNormsRegular text-[14px] leading-[20px] text-[#FFFFFF] dark:text-[#000000]">
              Удалить
            </span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
    case 'goBack':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path
            d="M15.8334 10.0003H4.16675M4.16675 10.0003L10.0001 15.8337M4.16675 10.0003L10.0001 4.16699"
            stroke={theme === 'light' ? '#98A2B3' : '#85888E'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'goNext':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
          <path
            d="M4.1665 10.0003H15.8332M15.8332 10.0003L9.99984 4.16699M15.8332 10.0003L9.99984 15.8337"
            stroke={theme === 'light' ? '#98A2B3' : '#85888E'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'vk':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11367_38653)">
            <path
              d="M0.833496 9.63301C0.833496 5.48463 0.833496 3.41047 2.12223 2.12174C3.41096 0.833008 5.48512 0.833008 9.6335 0.833008H10.3668C14.5152 0.833008 16.5894 0.833008 17.8781 2.12174C19.1668 3.41047 19.1668 5.48463 19.1668 9.63301V10.3663C19.1668 14.5147 19.1668 16.5889 17.8781 17.8776C16.5894 19.1663 14.5152 19.1663 10.3668 19.1663H9.6335C5.48512 19.1663 3.41096 19.1663 2.12223 17.8776C0.833496 16.5889 0.833496 14.5147 0.833496 10.3663V9.63301Z"
              fill="#0077FF"
            />
            <path
              d="M10.5883 14.0404C6.40985 14.0404 4.02655 11.1758 3.92725 6.40918H6.0203C6.08905 9.90779 7.63207 11.3897 8.85429 11.6953V6.40918H10.8252V9.42654C12.0321 9.29668 13.3 7.92168 13.7278 6.40918H15.6987C15.3702 8.27307 13.9952 9.64807 13.0174 10.2133C13.9952 10.6717 15.5613 11.871 16.1571 14.0404H13.9876C13.5216 12.589 12.3606 11.4661 10.8252 11.3133V14.0404H10.5883Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_11367_38653">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
  }
})
