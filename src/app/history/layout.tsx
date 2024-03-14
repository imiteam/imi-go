import HistoryCategories from '../../History/History-categories'

export default function HistoryLayout({children}: {children: React.ReactNode}) {
  return (
    <div
      className="flex size-full grow justify-center bg-bg-lite dark:bg-bg-dark md:px-5 md:pt-1.5
                        md:vsm:px-1.5 lg:px-6
                        lg:pt-1.5 xl:pt-2"
    >
      <div className="flex size-full flex-col xl:max-w-1216">
        <HistoryCategories />
        {children}
      </div>
    </div>
  )
}
