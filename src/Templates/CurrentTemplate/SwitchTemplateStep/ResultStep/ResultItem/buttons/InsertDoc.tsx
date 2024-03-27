"use client"

import { Button } from "common/UIkit/button"
import { useTheme } from "next-themes"
import { memo } from "react"

export const InsertDoc = memo(function InsertDoc(props: {
    callBack: () => void
}){

    const {theme} = useTheme()

        return (
            <Button variant={'tempResult'} size="tempResult" onClick={() => props.callBack()}>
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.6666 8.75033V5.66699C14.6666 4.26686 14.6666 3.5668 14.3941 3.03202C14.1544 2.56161 13.772 2.17916 13.3016 1.93948C12.7668 1.66699 12.0667 1.66699 10.6666 1.66699H5.33325C3.93312 1.66699 3.23306 1.66699 2.69828 1.93948C2.22787 2.17916 1.84542 2.56161 1.60574 3.03202C1.33325 3.5668 1.33325 4.26686 1.33325 5.66699V14.3337C1.33325 15.7338 1.33325 16.4339 1.60574 16.9686C1.84542 17.439 2.22787 17.8215 2.69828 18.0612C3.23306 18.3337 3.93312 18.3337 5.33325 18.3337H7.99992M9.66659 9.16699H4.66659M6.33325 12.5003H4.66659M11.3333 5.83366H4.66659M12.9999 17.5003V12.5003M10.4999 15.0003H15.4999"
                    stroke={theme === 'light' ? '#2D384B' : '#CECFD2'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            <span className="ml-[6px]">Вставить в документ</span>
            </Button>
        )
})