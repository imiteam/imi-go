import SupportCard from "./SupportCard"


export type mockSupportDataType = {
  id: number
  icon: string
  title: string
  description: string
  event: {
    title: string
    icon: string
  }
}

export const SupportPage =  async function SupportPage() {
  const mockSupportData: Array<mockSupportDataType> = [
    {
      id: 1,
      icon: 'knowladge',
      title: 'База знаний',
      description: 'Возможно ответ на ваш вопрос есть у нас в базе знаний',
      event: {
        title: 'Перейти в базу знаний',
        icon: 'support_arrow',
      },
    },
    {
      id: 2,
      icon: 'support_chat',
      title: 'Чат с поддержкой',
      description: 'Вы можете связаться с нами в чате и задать ваш вопрос',
      event: {
        title: 'Открыть чат',
        icon: 'support_arrow',
      },
    },
    {
      id: 3,
      icon: 'support_founder',
      title: 'Связаться с руководством',
      description: 'Вы можете написать руководству IMI по вопросам сотрудничества',
      event: {
        title: 'Написать руководству',
        icon: 'support_arrow',
      },
    },
  ]
  return (
    <div className="flex size-full vsm:flex-col planSm:flex-wrap md:gap-2 lg:gap-4 xl:gap-6">
      {mockSupportData.map((s) => {
        return <SupportCard data={s} key={s.id} />
      })}
    </div>
  )
}
