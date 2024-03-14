'use client'
import {useState} from 'react'
import Settings from './Settings'
import HistoryTable from './HistoryTable'

type HistoryType = {
    id: number
    format: string
    title: {
      title_name: string
      title_icon: string
      title_description: string
    }
    type: {
      type_name: string
      type_icon: string
      type_description: string
    }
    edited: {
      ago: string
      timestemp: {
        date: string
        time: string
      }
    }
  }
  type MocHistoryDataType = {
    history_id: number
    historyCategoty: string
    histors: Array<HistoryType>
  }
export default function TextHistoryPage({textHistory}: {textHistory: MocHistoryDataType}) {
  const [selectedType, setSelectedType] = useState<string>('all')

  function handleChange(value: string) {
    setSelectedType(value)
  }
  let filteredData = textHistory.histors.filter((d ) => (selectedType === 'all' ? d : d.format === selectedType))
  return (
    <div>
      <Settings handleChange={handleChange} />
      <HistoryTable textHistory={filteredData} />
    </div>
  )
}
