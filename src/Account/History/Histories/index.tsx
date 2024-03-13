'use client'
import {Fragment} from 'react'
import HistoryTable from './HistoryTable'
import HistoryCard from './HistoryCard'
type mockHistoryType = {
    id: number
    date: string
    plan: {
      title: string
      period: string
    }
    card: {
      type: string
      ending: number
      expiry: string
    }
    sum: number
    promocode: {
      code: number | null
      description: string | null
    }
    status: boolean
  }
export default function Histories({mockHistory}: {mockHistory: Array<mockHistoryType>}) {
  return (
    <Fragment>
      <HistoryTable mockHistory={mockHistory} />
      <HistoryCard mockHistory={mockHistory} />
    </Fragment>
  )
}
