'use client'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '../../../../common/UIkit/historyTable'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'
import { HistoryType } from 'History/Text'
import PageButton from '../common/PageButton'
import PaginationButton from '../common/PaginationButton'
import {SwitchHistoryTextIcon} from '../common/SwitchHistoryTextIcon'

export default function HistoryTable({textHistory}: {textHistory: Array<HistoryType>}) {
  const {theme} = useTheme()
  useEffect(() => {
    document.documentElement.style.setProperty('--table-icon-hovered-color', theme === 'light' ? '#2D384B' : '#CECFD2')
    document.documentElement.style.setProperty('--table-head-row-bg-color', theme === 'light' ? '#EDF2F6' : '#17181C')
  }, [theme])

  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState<Array<HistoryType>>(textHistory)
  const itemsPerPage = 8
  const paginationData = Math.ceil(textHistory.length / itemsPerPage)
  const pageNumbers = Array.from({length: paginationData}, (_, i) => i + 1)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const [ascendName, setAscendName] = useState<boolean>(true)
  const [ascendDate, setAscendDate] = useState<boolean>(true)

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

  const sortByTitle = (arr: Array<HistoryType>, ascending: boolean) => {
    if (!arr) {
      return
    }
    return arr.sort((a, b) => {
      if (a.title.title_name < b.title.title_name) {
        return ascending ? -1 : 1
      }
      if (a.title.title_name > b.title.title_name) {
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

  const sortByDate = (arr: Array<HistoryType>, ascending: boolean) => {
    return arr.sort((a, b) => {
      const dateA = new Date(a.edited.timestemp.date.split('.').reverse().join('-')).valueOf()
      const dateB = new Date(b.edited.timestemp.date.split('.').reverse().join('-')).valueOf()
      return ascending ? dateA - dateB : dateB - dateA
    })
  }
  function truncateString(str: string) {
    if (str.length > 44) {
      return str.slice(0, 44) + '...'
    }
    return str
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
            currentItems.map((d) => {
              return (
                <TableRow
                  className="border-b border-b-[#DAE3E9] dark:border-b-[#17181C]  md:h-[62px] lg:h-[62px] xl:h-[72px]"
                  key={d.id}
                  id="textHistoryTableRow"
                >
                  <TableCell className="w-[40%] pl-[24px] md:w-[60%]">
                    <div className="flex h-full items-center">
                      <div className="mr-3 flex h-full items-center justify-center">
                        <SwitchHistoryTextIcon icon={d.title.title_icon} />
                      </div>
                      <div className="flex h-full flex-col">
                        <span className=" font-TTNormsMedium leading-[14px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                          {d.title.title_name}
                        </span>
                        <span className=" font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px] lg:text-[12px] ">
                          {truncateString(d.title.title_description)}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-[25%] md:w-[20%]">
                    {d.format === 'doc' ? (
                      <div className="flex h-full items-center">
                        {d.type.type_icon ? (
                          <div className="mr-3 flex h-full items-center justify-center">
                            <SwitchHistoryTextIcon icon={d.type.type_icon} />
                          </div>
                        ) : (
                          <div className="w-8"></div>
                        )}

                        <div className="flex h-full flex-col">
                          <span className=" font-TTNormsMedium leading-[14px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                            {d.type.type_name}
                          </span>
                          <span className=" font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px] lg:text-[12px]">
                            {d.type.type_description}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-full items-center">
                        <div className="mr-3 flex h-full items-center justify-center">
                          <SwitchHistoryTextIcon icon="imiChat" />
                        </div>
                        <span className=" font-TTNormsMedium leading-[14px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                          {d.type.type_description}
                        </span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="w-[25%] md:w-[16%]">
                    <div className="flex h-full flex-col">
                      <span className=" font-TTNormsRegular leading-[20px] text-[#101828] dark:text-[#F5F5F6] md:text-[12px] lg:text-[12px] xl:text-[14px]">
                        {d.edited.ago}
                      </span>
                      <span className=" font-TTNormsRegular leading-[18px] text-[#667085] dark:text-[#98A2B3] md:text-[12px] lg:text-[12px]">
                        {d.edited.timestemp.date} {d.edited.timestemp.time}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="planSm:w-10px w-[137px] pr-6">
                    <div className="flex h-full items-center">
                      <SwitchHistoryTextIcon icon="copy" />
                      <SwitchHistoryTextIcon icon="edit" />
                      <SwitchHistoryTextIcon icon="delete" />
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>

      {pageNumbers.length === 1 ? (
        <div
          className="flex h-[68px] w-full items-center justify-between border-t border-t-[#DAE3E9]
                    bg-white px-6 pb-4 pt-3 dark:border-t-[#17181C] dark:bg-[#21242C] sm:hidden"
          id="historiesPageTableFooter"
        ></div>
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
                className="mb-2 flex h-[104px] w-full flex-col rounded-[16px] bg-[#FFFFFF] p-4 pb-2 dark:bg-[#21242C]"
                key={d.id}
              >
                <div className="flex w-full justify-between">
                  <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#101828] dark:text-[#F5F5F6]">
                    {d.title.title_name}
                  </span>
                  <span className="font-TTNormsRegular text-[10px] leading-[18px] text-[#667085] dark:text-[#98A2B3]">
                    {d.edited.timestemp.date}
                  </span>
                </div>
                <span className="truncate font-TTNormsRegular text-[14px] leading-[20px] text-[#667085] dark:text-[#98A2B3]">
                  {d.title.title_description}
                </span>
                <div className="flex h-[36px] w-full items-center justify-between">
                  <div className="flex h-full">
                    {d.type.type_icon && (
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
                    )}
                  </div>
                  <div className="flex h-full items-center">
                    <SwitchHistoryTextIcon icon="copy" />
                    <SwitchHistoryTextIcon icon="edit" />
                    <SwitchHistoryTextIcon icon="delete" />
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
