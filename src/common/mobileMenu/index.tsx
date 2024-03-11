'use client'
import {useQuery, useSubscription} from '@apollo/client'
import NavButton from 'components/NavButton'
import {
DropdownSelect,
DropdownSelectContent,
DropdownSelectGroup,
DropdownSelectItem,
DropdownSelectTrigger,
} from 'components/ui/DropdownSelect'
import {
GetPlanUserDocument,
UserWalletDocument,
UserWalletSubscription,
UserWalletSubscriptionVariables,
} from 'generated'
import {signOut, useSession} from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import DefaultIcon from '../../../assets/man-person-icon.png'
import {useHomeStore} from '../../../lib/store/homeStore'
import {SheetContentMobileMenu, SheetMobileMenu} from '../../components/ui/sheetMobileMenu'
import { SwitchIcon } from './icon_components/SwitchIcon'
import { SettingsMobIcon } from './icon_components/SettingsMobIcon'
import { LogOutIcon } from './icon_components/LogOutIcon'

    export default function MobileMenu() {
    const {showMobileMenu, setShowMobileMenu} = useHomeStore()

    const {data: session} = useSession()

    const sheetRef = useRef<HTMLDivElement>(null)

    const pathName = usePathname()

    let currentPath = pathName.split('/')[1] ? pathName.split('/')[1] : '/'

    const [activeButton, setActiveButton] = useState<string>(currentPath!)

    const {data: userWalletData} = useSubscription<UserWalletSubscription, UserWalletSubscriptionVariables>(
        UserWalletDocument,
        {
        variables: {
            userId: session?.user.id,
        },
        },
    )

    const {data} = useQuery(GetPlanUserDocument, {
        variables: {id: session?.user.id},
    })
    const planName = useCallback(
        (data: any | undefined) => {
        if (data) {
            switch (data.users_by_pk.plan_id) {
            case '8d035581-2209-4212-a4f2-6938bd0bf32a':
                return 'Бесплатный'
            default:
                return 'нету плана'
            }
        }
        },
        [data],
    )
    useEffect(() => {
        setActiveButton(currentPath!)
    }, [currentPath])
    const progress = useMemo(() => (userWalletData?.wallets[0]?.tokens! * 3) / 4, [userWalletData?.wallets])
    return (
        <SheetMobileMenu open={showMobileMenu}>
        <SheetContentMobileMenu side={'left'} ref={sheetRef} className="">
            <div className="flex size-full flex-col rounded-[20px] bg-[#101828] p-6 dark:bg-[#000]">
            <div className="mb-6 flex h-[51px] w-full items-center justify-between">
                <Link href="/lk/settings" className="flex items-center justify-center">
                <Image
                    src={session?.user?.image ? session.user.image : DefaultIcon}
                    width={40}
                    height={40}
                    alt="avatar"
                    className="rounded-[16px]"
                />
                </Link>
                <NavButton
                component="closeMobileMenu"
                icon="closeAsideChat"
                closeChatSheet={setShowMobileMenu}
                callBack={() => {}}
                />
            </div>
            <div className="flex size-full grow flex-col justify-between">
                <div className="flex h-auto w-full flex-col  items-start">

                <Link href="/templates" onClick={() => setShowMobileMenu(false)}>
                <div
                    className="relative flex h-10 w-full items-center justify-start"
                    style={{left: activeButton === 'templates' ? '-11px' : '0'}}
                >   
                    <SwitchIcon iconName='templatesMob' isActive={activeButton === 'templates'}/>
                    <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#98A2B3] dark:text-[#98A2B3]">
                    Шаблоны
                    </span>
                </div>
                </Link>

                <Link href={`/chat?userId=${session?.user.id}`} onClick={() => setShowMobileMenu(false)}>
                    <div
                    className="relative flex h-10 w-full items-center justify-start"
                    style={{left: activeButton === 'chat' ? '-11px' : '0'}}
                    >
                        <SwitchIcon iconName='chatMob' isActive={activeButton === 'chat'}/>
                        <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#98A2B3] dark:text-[#98A2B3]">
                            IMI чат
                        </span>
                    </div>
                </Link>

                <div
                    className="relative flex h-10 w-full items-center justify-start"
                    style={{left: activeButton === 'templates' ? '-11px' : '0'}}
                >
                    <SwitchIcon iconName='learningMob' isActive={activeButton === 'learning'}/>
                    <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#98A2B3] dark:text-[#98A2B3]">
                    Обучение
                    </span>
                </div>

                <Link href="/history/text" onClick={() => setShowMobileMenu(false)}>
                    <div
                    className="relative flex h-10 w-full items-center justify-start"
                    style={{left: activeButton === 'history' ? '-11px' : '0'}}
                    >
                        <SwitchIcon iconName='historyMob' isActive={activeButton === 'historyMob'}/>
                        <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#98A2B3] dark:text-[#98A2B3]">
                            История
                        </span>
                    </div>
                </Link>

                </div>

                <Link
                href="/lk/settings"
                className="flex h-10 w-full items-center pl-2"
                onClick={() => setShowMobileMenu(false)}
                >
                    <SettingsMobIcon/>
                    <span className="font-TTNormsMedium text-[14px] leading-[14px] text-[#98A2B3] dark:text-[#98A2B3]">
                        Настройки
                    </span>
                </Link>
            </div>
            <div className="flex h-[64px] w-full items-center justify-between">
                <div className="flex">
                <DropdownSelect>
                    <Image
                    src={session?.user?.image ? session.user.image : DefaultIcon}
                    width={40}
                    height={40}
                    alt="avatar"
                    className="mr-[16px] rounded-[16px]  sm:mr-[15px]"
                    />
                    <div className="relative top-[-2px] flex flex-col">
                    <span
                    className="relative right-[1px] top-[9px] font-TTNormsMedium text-[14px] font-medium text-active-text-color-white 
                    md:right-[7px] md:top-[6px] md:font-InterMedium md:text-[12px]"
                    >
                        {isNaN(progress) ? (
                        <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-4.5 w-4.5 border-b-2 border-gray-900" style={{width: '15px', height: '15px'}}></div>
                        </div>
                        ) : (
                        `${Math.round(progress)} слов`
                        )}
                    </span>
                    <DropdownSelectTrigger
                        className="relative right-[4px] flex  h-[20px] w-[75px] rounded-[20px] p-[0px] text-text-color-white 
                                                                    hover:bg-[#fff] hover:text-black"
                    >
                        <span
                        className=" font-regular relative right-[2px] top-[2px] px-[4px] font-TTNormsMedium text-[12px] text-[#c6c9cc]
                                                                    dark:text-[#98A2B3] md:right-[6px] md:top-[2px]"
                        >
                        {planName(data)}
                        </span>
                    </DropdownSelectTrigger>
                    </div>

                    <DropdownSelectContent className="">
                    <DropdownSelectGroup className="">
                        <DropdownSelectItem value="apple">Sign Out</DropdownSelectItem>
                        <DropdownSelectItem value="banana">Banana</DropdownSelectItem>
                        <DropdownSelectItem value="blueberry">Blueberry</DropdownSelectItem>
                        <DropdownSelectItem value="grapes">Grapes</DropdownSelectItem>
                        <DropdownSelectItem value="pineapple">Pineapple</DropdownSelectItem>
                    </DropdownSelectGroup>
                    </DropdownSelectContent>
                </DropdownSelect>
                </div>

                <span onClick={() => signOut({callbackUrl: '/auth/sign-in', redirect: true})}>
                <LogOutIcon/>
                </span>
            </div>
            </div>
        </SheetContentMobileMenu>
        </SheetMobileMenu>
    )
    }
