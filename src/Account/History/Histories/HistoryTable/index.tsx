'use client'

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '../../../../common/UIkit/historyTable'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'
import { TableSwitchIcon } from './TableSwitchIcon.tsx'
import { CardSwitchIcon } from '../HistoryCard/CardSwitchIcon'
import { GetUserHistoryQuery } from 'generated'


export default function HistoryTable(props: {historyData: GetUserHistoryQuery["payment_history"]}) {
  const [sortedData, setSortedData] = useState<GetUserHistoryQuery["payment_history"]>(props.historyData)
  const [ascendDate, setAscendDate] = useState<boolean>(true)
  const [ascendSum, setAscendSum] = useState<boolean>(true)
  const {theme} = useTheme()
  useEffect(() => {
    document.documentElement.style.setProperty('--table-head-row-bg-color', theme === 'light' ? '#EDF2F6' : '#17181C')
  }, [theme])
  const handleDateSort = () => {
    setAscendDate(!ascendDate)
    const newData = sortByDate(sortedData, ascendDate)
    setSortedData(newData)
  }
  function formatDate(dateString : string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
  }
  const sortByDate = (arr: GetUserHistoryQuery["payment_history"], ascending: boolean) => {
    return arr.sort((a, b) => {
      const A = formatDate(a.date)
      const B = formatDate(b.date)
      const dateA = new Date(A.split('.').reverse().join('-')).valueOf()
      const dateB = new Date(B.split('.').reverse().join('-')).valueOf()
      return ascending ? dateA - dateB : dateB - dateA
    })
  }

  const handleSumSort = () => {
    setAscendSum(!ascendSum)
    const newData = sortBySum(sortedData, ascendSum)
    setSortedData(newData)
  }

  const sortBySum = (arr: GetUserHistoryQuery["payment_history"], ascending: boolean) => {
    return arr.sort((a, b) => {
      return ascending ? a.amount! - b.amount! : b.amount! - a.amount!
    })
  }
  return (
    <Table className="vsm:hidden">
      <TableHeader className="h-[44px]">
        <TableRow id="historyTableHeadRow">
          <TableHead className="pl-[24px] md:hidden lg:visible">ID транзакции</TableHead>
          <TableHead className="pl-[24px] md:visible lg:hidden">ID и дата</TableHead>
          <TableHead className="flex cursor-pointer items-center md:hidden lg:visible" onClick={() => handleDateSort()}>
            <span>Дата</span>
            <TableSwitchIcon icon="sort" />
          </TableHead>
          <TableHead>Тариф</TableHead>
          <TableHead>Карта</TableHead>
          <TableHead className="flex cursor-pointer items-center lg:visible" onClick={() => handleSumSort()}>
            <span>Сумма</span>
            <TableSwitchIcon icon="sort" />
          </TableHead>
          <TableHead>Промокод</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead className="planSm:hidden">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.map((d) => {
          return (
            <TableRow className="h-[72px] border-b border-b-[#DAE3E9] dark:border-b-[#17181C]" key={d.transaction_id}>
              <TableCell
                className="pl-[24px] font-TTNormsMedium text-[14px] leading-[14px] md:text-[12px]
                                                    md:planSm:text-[11px]
                                                     lg:text-[12px]
                                                     xl:text-[14px]"
              >
                <span className="md:hidden">{'#' + d.transaction_id}</span>
                <div className="flex h-[34px] flex-col justify-between lg:hidden">
                  <span className="">{'#' + d.transaction_id}</span>
                  <span className="font-TTNormsRegular text-[#475467] dark:text-[#98A2B3]"> {formatDate(d.date)}</span>
                </div>
              </TableCell>
              <TableCell
                className="font-TTNormsRegular leading-[20px] text-[#475467] dark:text-[#98A2B3] md:hidden lg:visible
                                                    
                                                    xl:text-[14px]"
              >
                {formatDate(d.date)}
              </TableCell>
              <TableCell>
                <div className="flex h-[34px] flex-col justify-between ">
                  <span
                    className="font-TTNormsMedium leading-[14px] md:text-[12px]
                                                        md:planSm:text-[11px]
                                                        lg:text-[12px]
                                                        xl:text-[14px]"
                  >
                    {d.plan}
                  </span>
                  <span
                    className="font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px]
                                                        md:planSm:text-[11px]
                                                        lg:text-[12px]
                                                        xl:text-[12px]"
                  >
                    период
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex h-full items-center">
                  <div className="mr-[12px] planSm:hidden">
                    <CardSwitchIcon icon={d.card!} />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-TTNormsRegular leading-[20px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px]
                                                            md:planSm:text-[11px]
                                                            lg:text-[12px]
                                                            xl:text-[14px]"
                    >
                      Visa ending in {d.four_last}
                    </span>
                    <span
                      className="font-TTNormsRegular leading-[20px] text-[#667085] dark:text-[#98A2B3] md:text-[12px]
                                                            md:planSm:text-[11px]
                                                            lg:text-[12px]
                                                            xl:text-[14px]"
                    >
                      Expiry {d.card_exp_date}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell
                className="font-TTNormsRegular text-[14px] leading-[20px] text-[#475467] dark:text-[#98A2B3]
                                                        planSm:font-TTNormsMedium planSm:text-[11px] planSm:text-[#101828] planSm:dark:text-[#98A2B3]"
              >
                {d.amount + ' ₽'}
              </TableCell>
              <TableCell>
                {/* {d.promocode.code ? (
                  <div className="flex h-[34px] flex-col justify-between  ">
                    <span
                      className="font-TTNormsMedium leading-[14px] text-[#667085] dark:text-[#F5F5F6] md:text-[12px]
                                                        md:planSm:text-[11px]
                                                        lg:text-[12px]
                                                        xl:text-[14px]"
                    >
                      {d.promocode.code}
                    </span>
                    <span
                      className="font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px]
                                                        md:planSm:text-[11px]
                                                        lg:text-[12px]
                                                        xl:text-[12px]"
                    >
                      {d.promocode.description + '% скидка'}
                    </span>
                  </div>
                ) : (
                  <span>-</span>
                )} */}
                <span>-</span>
              </TableCell>
              <TableCell>
                {d.status === 1 ? (
                  <span
                    className="font-TTNormsRegular leading-[20px] text-[#079455] dark:text-[#47CD89] md:text-[12px]
                                                    md:planSm:text-[11px]
                                                    lg:text-[12px]
                                                    xl:text-[14px]"
                  >
                    Оплачен
                  </span>
                ) :
                d.status === 0 ?
                (
                  <span
                    className="font-TTNormsRegular leading-[20px] text-[#D92D20] dark:text-[#F97066] md:text-[12px]
                                                    md:planSm:text-[11px]
                                                    lg:text-[12px]
                                                    xl:text-[14px]"
                  >
                    Отменен
                  </span>
                )
                  :
                  <span
                    className="font-TTNormsRegular leading-[20px] text-[#3959af] dark:text-[#57699c] md:text-[12px]
                                                    md:planSm:text-[11px]
                                                    lg:text-[12px]
                                                    xl:text-[14px]"
                  >
                    Возврат
                  </span>
                }
              </TableCell>
              <TableCell className="planSm:w-10px">
                <div
                  className="flex h-full items-center justify-between 
                                            planSm:hidden 
                                            md:pr-[5px]
                                            lg:pr-[18px]"
                >
                  <TableSwitchIcon icon="show" />
                  <TableSwitchIcon icon="download" />
                  <TableSwitchIcon icon="message" />
                </div>
                <div className="md:hidden md:planSm:block lg:hidden ">
                  <TableSwitchIcon icon="menu" />
                </div>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
