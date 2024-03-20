'use client'
import {Fragment} from 'react'
import HistoryCard from './HistoryCard'
import { GetUserHistoryQuery } from 'generated'
import HistoryTable from './HistoryTable'


export default function Histories(props: {historyData: GetUserHistoryQuery["payment_history"]}) {
  let reversedHistory = props.historyData.reverse()
  return (
    <Fragment>
      <HistoryTable historyData={reversedHistory} />
      <HistoryCard historyData={reversedHistory} />
    </Fragment>
  )
}
