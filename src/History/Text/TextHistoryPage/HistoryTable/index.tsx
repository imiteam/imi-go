'use client'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '../../../../common/UIkit/historyTable'
import {useTheme} from 'next-themes'
import {useCallback, useEffect, useState} from 'react'
import PageButton from '../common/PageButton'
import PaginationButton from '../common/PaginationButton'
import {SwitchHistoryTextIcon} from '../common/SwitchHistoryTextIcon'
import { GetMyChatsQuery } from 'generated'
import { deleteChatAction } from 'Chat/graphql/action'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function HistoryTable({textHistory}: {textHistory: GetMyChatsQuery["chats"]}) {
  const {theme} = useTheme()
  useEffect(() => {
    document.documentElement.style.setProperty('--table-icon-hovered-color', theme === 'light' ? '#2D384B' : '#CECFD2')
    document.documentElement.style.setProperty('--table-head-row-bg-color', theme === 'light' ? '#EDF2F6' : '#17181C')
  }, [theme])
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState<GetMyChatsQuery["chats"]>(textHistory)
  const itemsPerPage = 8
  const paginationData = Math.ceil(textHistory.length / itemsPerPage)
  const pageNumbers = Array.from({length: paginationData}, (_, i) => i + 1)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const [ascendName, setAscendName] = useState<boolean>(true)
  const [ascendDate, setAscendDate] = useState<boolean>(true)
  const session = useSession()
  const goBack = () => {
    if (currentPage === 1) {
      return
    }
    setCurrentPage(currentPage - 1)
  }
  const goNext = () => {
    if (currentPage === pageNumbers[pageNumbers.length - 1]) {
      return
    }
    setCurrentPage(currentPage + 1)
  }
  const goTo = (page: number) => {
    setCurrentPage(page)
  }

  const handleSortByTitle = () => {
    if (!data) {
      return
    }
    setAscendName(!ascendName)
    const newData = sortByTitle(data, ascendName)
    setData(newData!)
  }

  const sortByTitle = (arr: GetMyChatsQuery["chats"], ascending: boolean) => {
    if (!arr) {
      return
    }
    return arr.sort((a, b) => {
      if (a.title! < b.title!) {
        return ascending ? -1 : 1
      }
      if (a.title! > b.title!) {
        return ascending ? 1 : -1
      }
      return 0
    })
  }

  const handleDateSort = () => {
    if (!data) {
      return
    }
    setAscendDate(!ascendDate)
    const newData = sortByDate(data, ascendDate)
    setData(newData)
  }

  function formatDate(dateString : string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} в ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

  function getDifference(date : string){
    const createdDate = new Date(date);
    const now = new Date()
    const differenceInMilliseconds = now.getTime() - createdDate.getTime();
    const differenceInMinutes = differenceInMilliseconds / 1000 / 60;
    if(differenceInMinutes < 60){
      return `${Math.round(differenceInMinutes)} мин назад`
    } 
    const differenceInHours = differenceInMinutes / 60;
    if(differenceInHours < 24){
      return `${Math.round(differenceInHours)} ч назад`
    }
    const differenceInDays = differenceInHours / 24;
    if(differenceInDays < 30){
      return `${Math.floor(differenceInDays)} д назад`
    } else if((differenceInDays < 360) && (differenceInDays >= 30)) {
      const differenceInMonths = Math.round(differenceInDays / 30);
      return `${differenceInMonths} мес назад`;
    } else {
      const differenceInYears = Math.round(differenceInDays / 360);
      return `${differenceInYears} г назад`;
   }
  }

  const sortByDate = (arr: GetMyChatsQuery["chats"], ascending: boolean) => {
    return arr.sort((a, b) => {
       const dateA = new Date(a.createdAt).getTime();
       const dateB = new Date(b.createdAt).getTime();
       return ascending ? dateA - dateB : dateB - dateA;
    });
   };
  function truncateString(str: string) {
    if(!str){
      return
    } else {
      if (str.length > 44) {
        return str.slice(0, 44) + '...'
      } else {
        return str
      }
      
    }
    
  }

  const handleDeleteChat = useCallback(async (event: React.MouseEvent, chatId: string) => {
    event.stopPropagation()
    await deleteChatAction(chatId)
      .then(() => router.refresh())
  }, [])

  const handleOpenChat = useCallback((chatId: string) => {
    router.push(`/chat/${chatId}?userId=${session.data?.user?.id}`)
  },[session.data?.user?.id])

  const supportPromt = (promt: string) => {
    switch(promt){
      case "business" :
        return "С бизнес-ангелом"
      case "fitness" :
        return "С фитнес тренером"
      case "consultant" :
        return "С консультантом"  
      case "investor" :
        return "С инвестором"
      case "marketolog" :
        return "С маркетологом"
      case "seo" :
        return "С SEO-специалистом"
      case "whriter" :
        return "С писателем"
      default :
      return ""
    }
  }

  useEffect(() => {
    setData(textHistory)
  }, [textHistory])
  return currentItems.length ? (
    <div className="flex size-full flex-col">
      <Table className="sm:hidden" id="historiesPageTable">
        <TableHeader className="h-[44px]">
          <TableRow id="historyTableHeadRow">
            <TableHead className="flex cursor-pointer items-center " onClick={() => handleSortByTitle()}>
              <span>Название</span>
              <SwitchHistoryTextIcon icon="sort" />
            </TableHead>
            <TableHead>Тип</TableHead>
            <TableHead className="flex cursor-pointer items-center " onClick={() => handleDateSort()}>
              <span>Редактировался</span>
              <SwitchHistoryTextIcon icon="sort" />
            </TableHead>
            <TableHead className="">Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.length &&
            currentItems.map((d,index) => {
              if(pageNumbers.length === 1 && (index === currentItems.length-1)) {
                return (
                  <TableRow
                    className="border-b border-b-[#DAE3E9] dark:border-b-[#17181C]  md:h-[62px] lg:h-[62px] xl:h-[72px]"
                    key={d.id}
                    id=""
                  >
                    <TableCell className="w-[40%] pl-[24px] md:w-[60%] lastTableRowStyleLeft">
                      <div className="flex h-full items-center">
                        <div className="mr-3 flex h-full items-center justify-center">
                          <SwitchHistoryTextIcon icon="chat" />
                        </div>
                        <div className="flex h-full flex-col">
                          <span className=" font-TTNormsMedium leading-[14px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                            {d.title}
                          </span>
                          <span className=" font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px] lg:text-[12px] ">
                            {truncateString(d.description!)}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="w-[25%] md:w-[20%]">
                      {/* {d.format === 'doc' ? ( */}
                        <div className="flex h-full items-center">
                          {/* {d.type.type_icon ? (
                            <div className="mr-3 flex h-full items-center justify-center">
                              <SwitchHistoryTextIcon icon={d.type.type_icon} />
                            </div>
                          ) : (
                            <div className="w-8"></div>
                          )} */}
                          <div className="mr-3 flex h-full items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_11268_13175)">
                              <path d="M0.833496 9.63301C0.833496 5.48463 0.833496 3.41047 2.12223 2.12174C3.41096 0.833008 5.48512 0.833008 9.6335 0.833008H10.3668C14.5152 0.833008 16.5894 0.833008 17.8781 2.12174C19.1668 3.41047 19.1668 5.48463 19.1668 9.63301V10.3663C19.1668 14.5147 19.1668 16.5889 17.8781 17.8776C16.5894 19.1663 14.5152 19.1663 10.3668 19.1663H9.6335C5.48512 19.1663 3.41096 19.1663 2.12223 17.8776C0.833496 16.5889 0.833496 14.5147 0.833496 10.3663V9.63301Z" fill="#0B3BEC"/>
                              <rect x="13.3335" y="5.83301" width="1.66667" height="9.16667" fill="white"/>
                              <path d="M12.5 5.83301H11.6528L10 11.1306V11.6663H11.1453L12.5 7.8221V5.83301Z" fill="white"/>
                              <path d="M7.5 5.83301H8.34724L10 11.1306V11.6663H8.85468L7.5 7.8221V5.83301Z" fill="white"/>
                              <rect width="1.66667" height="9.16667" transform="matrix(-1 0 0 1 6.6665 5.83301)" fill="white"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_11268_13175">
                              <rect width="20" height="20" fill="white"/>
                              </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex h-full flex-col">
                            <span className=" font-TTNormsMedium leading-[14px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                              IMI чат
                            </span>
                            <span className=" font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px] lg:text-[12px]">
                              {supportPromt(d.system_promt!)}
                            </span>
                          </div>
                          </div>
                        {/* </div>
                      ) : (
                        <div className="flex h-full items-center">
                          <div className="mr-3 flex h-full items-center justify-center">
                            <SwitchHistoryTextIcon icon="imiChat" />
                          </div>
                          <span className=" font-TTNormsMedium leading-[14px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                            {d.type.type_description}
                          </span>
                        </div>
                      )} */}
                    </TableCell>
                    <TableCell className="w-[25%] md:w-[16%]">
                      <div className="flex h-full flex-col">
                        <span className="font-TTNormsRegular leading-[20px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                          {getDifference(d.createdAt)}
                        </span>
                        <span className="font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px] lg:text-[12px]">
                          {formatDate(d.createdAt)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="planSm:w-10px w-[137px] pr-6 lastTableRowStyleRight">
                      <div className="flex h-full items-center">
                        <SwitchHistoryTextIcon icon="copy" />
                        <SwitchHistoryTextIcon icon="edit" />
                        <SwitchHistoryTextIcon icon="delete" callBack={handleDeleteChat} id={d.id}/>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              } else {
                return (
                  <TableRow
                    className="border-b border-b-[#DAE3E9] dark:border-b-[#17181C]  md:h-[62px] lg:h-[62px] xl:h-[72px]"
                    key={d.id}
                    id="textHistoryTableRow"
                  >
                    <TableCell className="w-[40%] pl-[24px] md:w-[60%]">
                      <div className="flex h-full items-center">
                        <div className="mr-3 flex h-full items-center justify-center">
                          <SwitchHistoryTextIcon icon="chat" />
                        </div>
                        <div className="flex h-full flex-col">
                          <span className=" font-TTNormsMedium leading-[14px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                            {d.title}
                          </span>
                          <span className=" font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px] lg:text-[12px] ">
                            {truncateString(d.description!)}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="w-[25%] md:w-[20%]">
                      {/* {d.format === 'doc' ? ( */}
                        <div className="flex h-full items-center">
                          {/* {d.type.type_icon ? (
                            <div className="mr-3 flex h-full items-center justify-center">
                              <SwitchHistoryTextIcon icon={d.type.type_icon} />
                            </div>
                          ) : (
                            <div className="w-8"></div>
                          )} */}
                          <div className="mr-3 flex h-full items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_11268_13175)">
                              <path d="M0.833496 9.63301C0.833496 5.48463 0.833496 3.41047 2.12223 2.12174C3.41096 0.833008 5.48512 0.833008 9.6335 0.833008H10.3668C14.5152 0.833008 16.5894 0.833008 17.8781 2.12174C19.1668 3.41047 19.1668 5.48463 19.1668 9.63301V10.3663C19.1668 14.5147 19.1668 16.5889 17.8781 17.8776C16.5894 19.1663 14.5152 19.1663 10.3668 19.1663H9.6335C5.48512 19.1663 3.41096 19.1663 2.12223 17.8776C0.833496 16.5889 0.833496 14.5147 0.833496 10.3663V9.63301Z" fill="#0B3BEC"/>
                              <rect x="13.3335" y="5.83301" width="1.66667" height="9.16667" fill="white"/>
                              <path d="M12.5 5.83301H11.6528L10 11.1306V11.6663H11.1453L12.5 7.8221V5.83301Z" fill="white"/>
                              <path d="M7.5 5.83301H8.34724L10 11.1306V11.6663H8.85468L7.5 7.8221V5.83301Z" fill="white"/>
                              <rect width="1.66667" height="9.16667" transform="matrix(-1 0 0 1 6.6665 5.83301)" fill="white"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_11268_13175">
                              <rect width="20" height="20" fill="white"/>
                              </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="flex h-full flex-col">
                            <span className=" font-TTNormsMedium leading-[14px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                              IMI чат
                            </span>
                            <span className=" font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px] lg:text-[12px]">
                            {supportPromt(d.system_promt!)}
                            </span>
                          </div>
                          </div>
                        {/* </div>
                      ) : (
                        <div className="flex h-full items-center">
                          <div className="mr-3 flex h-full items-center justify-center">
                            <SwitchHistoryTextIcon icon="imiChat" />
                          </div>
                          <span className=" font-TTNormsMedium leading-[14px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                            {d.type.type_description}
                          </span>
                        </div>
                      )} */}
                    </TableCell>
                    <TableCell className="w-[25%] md:w-[16%]">
                      <div className="flex h-full flex-col">
                        <span className="font-TTNormsRegular leading-[20px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                          {getDifference(d.createdAt)}
                        </span>
                        <span className="font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px] lg:text-[12px]">
                          {formatDate(d.createdAt)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="planSm:w-10px w-[137px] pr-6">
                      <div className="flex h-full items-center">
                        <SwitchHistoryTextIcon icon="copy" />
                        <SwitchHistoryTextIcon icon="edit" openChat={handleOpenChat} id={d.id}/>
                        <SwitchHistoryTextIcon icon="delete" callBack={handleDeleteChat} id={d.id}/>
                      </div>
                    </TableCell>
                  </TableRow>
                  )
              }
            
            })}
        </TableBody>
      </Table>

      {pageNumbers.length === 1 ? (
        ""
      ) : (
        <div
          className="flex h-[68px] w-full items-center justify-between border-t border-t-[#DAE3E9]
                    bg-white px-6 pb-4 pt-3 dark:border-t-[#17181C] dark:bg-[#21242C] sm:hidden"
          id="historiesPageTableFooter"
        >
          <PaginationButton icon="goBack" isActive={currentPage > 1} title="Назад" callBack={goBack} />
          <div className="flex h-full w-auto items-center">
            {pageNumbers.map((p, index) => {
              return <PageButton callBack={goTo} isActive={p === currentPage} number={p} key={index} />
            })}
          </div>

          <PaginationButton
            icon="goNext"
            isActive={currentPage < pageNumbers[pageNumbers.length - 1]!}
            title="Далее"
            callBack={goNext}
          />
        </div>
      )}

      <div className="mt-[18px] flex-col md:hidden md:sm:flex lg:hidden">
        {data.length &&
          data.map((d) => {
            return (
              <div
                className="mb-2 flex h-[104px] w-full flex-col justify-between rounded-[16px] bg-[#FFFFFF] p-4 pb-2 dark:bg-[#21242C]"
                key={d.id}
              >
                <div className="flex w-full justify-between">
                  <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#101828] dark:text-[#F5F5F6]">
                    {d.title}
                  </span>
                  <span className="font-TTNormsRegular text-[10px] leading-[18px] text-[#667085] dark:text-[#98A2B3]">
                    {formatDate(d.createdAt)}
                  </span>
                </div>
                <span className="truncate font-TTNormsRegular text-[14px] leading-[20px] text-[#667085] dark:text-[#98A2B3]">
                  {d.description}
                </span>
                <div className="flex h-[36px] w-full items-center justify-between">
                  <div className="flex h-full items-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
                            <g clip-path="url(#clip0_11268_13175)">
                            <path d="M0.833496 9.63301C0.833496 5.48463 0.833496 3.41047 2.12223 2.12174C3.41096 0.833008 5.48512 0.833008 9.6335 0.833008H10.3668C14.5152 0.833008 16.5894 0.833008 17.8781 2.12174C19.1668 3.41047 19.1668 5.48463 19.1668 9.63301V10.3663C19.1668 14.5147 19.1668 16.5889 17.8781 17.8776C16.5894 19.1663 14.5152 19.1663 10.3668 19.1663H9.6335C5.48512 19.1663 3.41096 19.1663 2.12223 17.8776C0.833496 16.5889 0.833496 14.5147 0.833496 10.3663V9.63301Z" fill="#0B3BEC"/>
                            <rect x="13.3335" y="5.83301" width="1.66667" height="9.16667" fill="white"/>
                            <path d="M12.5 5.83301H11.6528L10 11.1306V11.6663H11.1453L12.5 7.8221V5.83301Z" fill="white"/>
                            <path d="M7.5 5.83301H8.34724L10 11.1306V11.6663H8.85468L7.5 7.8221V5.83301Z" fill="white"/>
                            <rect width="1.66667" height="9.16667" transform="matrix(-1 0 0 1 6.6665 5.83301)" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_11268_13175">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                  </svg>
                  <span className="font-TTNormsMedium text-[10px] leading-[14px] text-[#101828] dark:text-[#F5F5F6]">
                            IMI чат
                  </span>
                    {/* {d.type.type_icon && (
                      <div className="mr-2 flex h-full items-center justify-center">
                        <SwitchHistoryTextIcon icon={d.type.type_icon} />
                      </div>
                    )}

                    {d.format === 'doc' ? (
                      <div className="flex flex-col justify-center ">
                        <span className="font-TTNormsMedium text-[10px] leading-[14px] text-[#101828] dark:text-[#F5F5F6]">
                          {d.type.type_name}
                        </span>
                        <span className="font-TTNormsRegular text-[10px] leading-[11px] text-[#667085] dark:text-[#98A2B3]">
                          {d.type.type_description}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-center ">
                        <span className="font-TTNormsMedium text-[10px] leading-[14px] text-[#101828] dark:text-[#F5F5F6]">
                          {d.type.type_name}
                        </span>
                      </div>
                    )} */}
                  </div>
                  <div className="flex h-full items-center">
                    {/* <SwitchHistoryTextIcon icon="copy" /> */}
                    <SwitchHistoryTextIcon icon="edit" openChat={handleOpenChat} id={d.id}/>
                    <SwitchHistoryTextIcon icon="delete" callBack={handleDeleteChat} id={d.id}/>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  ) : (
    <div className="flex size-full items-center justify-center pt-10">
      <span className="font-TTNormsMedium text-[14px] leading-[28px] text-[#101828] dark:text-[#F5F5F6]">
        Список историй пуст
      </span>
    </div>
  )
}
