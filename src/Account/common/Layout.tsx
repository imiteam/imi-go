import {ProfileCategories} from './ProfileCategories'

export const LkLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div
      className="flex size-full grow justify-center bg-bg-lite dark:bg-bg-dark md:px-[20px] md:vsm:px-[16px] 
                        lg:px-[24px] 
                        xl:p-0"
    >
      <div className="flex size-full flex-col xl:max-w-1216">
        <ProfileCategories />
        {children}
      </div>
    </div>
  )
}
