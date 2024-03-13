import Histories from './Histories'

export type mockHistoryType = {
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
export const HistoryPage = async function HistoryPage() {
  const mockHistory: Array<mockHistoryType> = [
    {
      id: 2,
      date: '23.11.2026',
      plan: {
        title: 'Продвинутый',
        period: '1 год',
      },
      card: {
        type: 'Visa',
        ending: 1234,
        expiry: '01/02/2025',
      },
      sum: 1349,
      promocode: {
        code: null,
        description: null,
      },
      status: false,
    },
    {
      id: 1,
      date: '12.10.2023',
      plan: {
        title: 'Продвинутый',
        period: '1 месяц',
      },
      card: {
        type: 'Visa',
        ending: 1234,
        expiry: '01/02/2025',
      },
      sum: 4999,
      promocode: {
        code: 11111,
        description: '10',
      },
      status: true,
    },
  ]
  return (
    <div className="size-full">
      <Histories mockHistory={mockHistory} />
    </div>
  )
}
