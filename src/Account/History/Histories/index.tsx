'use client'
import {Fragment} from 'react'
import HistoryCard from './HistoryCard'
import { GetUserHistoryQuery } from 'generated'
import HistoryTable from './HistoryTable'


export default function Histories(props: {historyData: GetUserHistoryQuery["payment_history"]}) {
  return (
    <Fragment>
      <HistoryTable historyData={props.historyData} />
      <HistoryCard historyData={props.historyData} />
    </Fragment>
  )
}
