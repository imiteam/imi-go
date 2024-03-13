'use client'

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '../../../../common/UIkit/historyTable'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'
import { TableSwitchIcon } from './TableSwitchIcon.tsx'
import { CardSwitchIcon } from '../HistoryCard/CardSwitchIcon'
import { mockHistoryType } from 'Account/History/index.jsx'


export default function HistoryTable({mockHistory}: {mockHistory: Array<mockHistoryType>}) {
  const [sortedData, setSortedData] = useState<Array<mockHistoryType>>(mockHistory)
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

  const sortByDate = (arr: Array<mockHistoryType>, ascending: boolean) => {
    return arr.sort((a, b) => {
      const dateA = new Date(a.date.split('.').reverse().join('-')).valueOf()
      const dateB = new Date(b.date.split('.').reverse().join('-')).valueOf()
      return ascending ? dateA - dateB : dateB - dateA
    })
  }

  const handleSumSort = () => {
    setAscendSum(!ascendSum)
    const newData = sortBySum(sortedData, ascendSum)
    setSortedData(newData)
  }

  const sortBySum = (arr: Array<mockHistoryType>, ascending: boolean) => {
    return arr.sort((a, b) => {
      return ascending ? a.sum - b.sum : b.sum - a.sum
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
          <TableHead className="flex cursor-pointer items-center md:hidden lg:visible" onClick={() => handleSumSort()}>
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
            <TableRow className="h-[72px] border-b border-b-[#DAE3E9] dark:border-b-[#17181C]" key={d.id}>
              <TableCell
                className="pl-[24px] font-TTNormsMedium text-[14px] leading-[14px] md:text-[12px]
                                                    md:planSm:text-[11px]
                                                     lg:text-[12px]
                                                     xl:text-[14px]"
              >
                <span className="md:hidden">{'#' + d.id}</span>
                <div className="flex h-[34px] flex-col justify-between lg:hidden">
                  <span className="">{'#' + d.id}</span>
                  <span className="font-TTNormsRegular text-[#475467] dark:text-[#98A2B3]">{d.date}</span>
                </div>
              </TableCell>
              <TableCell
                className="font-TTNormsRegular leading-[20px] text-[#475467] dark:text-[#98A2B3] md:hidden lg:visible
                                                    
                                                    xl:text-[14px]"
              >
                {d.date}
              </TableCell>
              <TableCell>
                <div className="flex h-[34px] flex-col justify-between ">
                  <span
                    className="font-TTNormsMedium leading-[14px] md:text-[12px]
                                                        md:planSm:text-[11px]
                                                        lg:text-[12px]
                                                        xl:text-[14px]"
                  >
                    {d.plan.title}
                  </span>
                  <span
                    className="font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px]
                                                        md:planSm:text-[11px]
                                                        lg:text-[12px]
                                                        xl:text-[12px]"
                  >
                    {d.plan.period}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex h-full items-center">
                  <div className="mr-[12px] planSm:hidden">
                    <CardSwitchIcon icon={d.card.type} />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-TTNormsRegular leading-[20px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px]
                                                            md:planSm:text-[11px]
                                                            lg:text-[12px]
                                                            xl:text-[14px]"
                    >
                      Visa ending in {d.card.ending}
                    </span>
                    <span
                      className="font-TTNormsRegular leading-[20px] text-[#667085] dark:text-[#98A2B3] md:text-[12px]
                                                            md:planSm:text-[11px]
                                                            lg:text-[12px]
                                                            xl:text-[14px]"
                    >
                      Expiry {d.card.expiry}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell
                className="font-TTNormsRegular text-[14px] leading-[20px] text-[#475467] dark:text-[#98A2B3]
                                                        planSm:font-TTNormsMedium planSm:text-[11px] planSm:text-[#101828] planSm:dark:text-[#98A2B3]"
              >
                {d.sum + ' ₽'}
              </TableCell>
              <TableCell>
                {d.promocode.code ? (
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
                )}
              </TableCell>
              <TableCell>
                {d.status ? (
                  <span
                    className="font-TTNormsRegular leading-[20px] text-[#079455] dark:text-[#47CD89] md:text-[12px]
                                                    md:planSm:text-[11px]
                                                    lg:text-[12px]
                                                    xl:text-[14px]"
                  >
                    Оплачен
                  </span>
                ) : (
                  <span
                    className="font-TTNormsRegular leading-[20px] text-[#D92D20] dark:text-[#F97066] md:text-[12px]
                                                    md:planSm:text-[11px]
                                                    lg:text-[12px]
                                                    xl:text-[14px]"
                  >
                    Отменен
                  </span>
                )}
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
