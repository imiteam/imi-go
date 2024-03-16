import {getProfileCategories} from './graphql/action'
import Link from 'next/link'
import {ProfileNavButton} from './ProfileNavButton/index'
import { getServerSession } from 'next-auth'
import { authOptions } from 'app/api/auth/[...nextauth]/route'

export const ProfileCategories = async () => {
  const {profile_categories} = await getProfileCategories()
  const session = await getServerSession(authOptions)
  return (
    <div
      className="flex w-full items-center vsm:overflow-x-auto vsm:px-[0px] sm:flex-col
                        sm:items-start md:my-[14px]
                        md:h-[44px] md:sm:h-[76px]
                        lg:my-[18px] lg:h-[44px] xl:mb-[18px]
                        xl:mt-[8px] xl:h-[68px]"
    >
      <span
        className="mr-[24px] h-full font-NeueMachinaBold text-[#101828] dark:text-[#F5F5F6] md:h-[44px]
                            md:text-[24px] md:leading-[39px] lg:h-[44px]
                            lg:text-[30px] lg:leading-[39px] xl:text-[36px]"
      >
        Настройки
      </span>
      <div
        id="profileNavBar"
        className=" flex h-[44px] items-center rounded-[16px] bg-[#DAE3E9] dark:bg-[#000000] sm:h-[40px] 
                            md:mr-[51px] 
                            md:rounded-[12px] md:px-[2px] md:sm:mr-[51px]
                            md:sm:vsm:m-[0] lg:w-auto
                            lg:px-[4px]"
      >
        {profile_categories.map((category) => {
          if (category.name === 'team' || category.name === 'partners') {
            return (
              <div
                className="md:flex md:h-[40px] md:w-1/6 md:items-center md:sm:h-[32px] lg:h-[36px] lg:w-auto"
                key={category.id}
              >
                <ProfileNavButton id={category.id} title={category.title} key={category.id} name={category.name} />
              </div>
            )
          } else if(category.name === 'history'){
            return (
              <Link
                key={category.id}
                href={`/lk/${category.name}?userId=${session?.user.id}`}
                className="md:flex md:h-[40px] 
                                      md:w-1/6 md:items-center md:sm:h-[32px] lg:h-[36px]
                                      lg:w-auto"
              >
                <ProfileNavButton id={category.id} title={category.title} key={category.id} name={category.name} />
              </Link>
            )
          } else {
            return (
              <Link
              key={category.id}
              href={`/lk/${category.name}`}
              className="md:flex md:h-[40px] 
                                    md:w-1/6 md:items-center md:sm:h-[32px] lg:h-[36px]
                                    lg:w-auto"
            >
              <ProfileNavButton id={category.id} title={category.title} key={category.id} name={category.name} />
            </Link>
            )
          }
        })}
      </div>
    </div>
  )
}
