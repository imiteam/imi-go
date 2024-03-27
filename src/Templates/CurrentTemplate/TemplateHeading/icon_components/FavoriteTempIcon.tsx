"use client"

import { useTheme } from "next-themes"
import { memo } from "react"

export const FavoriteTempIcon = memo(function FavoriteTempIcon(props: {
    // callBack: (value: string) => void
}){
    const {theme} = useTheme()
        return (
            <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            // onClick={() => (props.callBack ? props.callBack() : '')}
            >
            <path
                d="M8.40205 1.8778C8.59412 1.48869 8.69015 1.29413 8.82053 1.23197C8.93396 1.17789 9.06574 1.17789 9.17918 1.23197C9.30955 1.29413 9.40558 1.48869 9.59766 1.8778L11.4199 5.56944C11.4766 5.68432 11.5049 5.74176 11.5464 5.78635C11.5831 5.82584 11.6271 5.85783 11.6759 5.88056C11.7311 5.90623 11.7945 5.91549 11.9213 5.93402L15.9973 6.5298C16.4266 6.59253 16.6412 6.6239 16.7405 6.72874C16.8269 6.81995 16.8675 6.94529 16.8511 7.06985C16.8322 7.21302 16.6768 7.36436 16.3661 7.66702L13.4177 10.5387C13.3258 10.6282 13.2798 10.673 13.2502 10.7263C13.2239 10.7734 13.2071 10.8252 13.2006 10.8788C13.1933 10.9393 13.2041 11.0025 13.2258 11.129L13.9215 15.1851C13.9948 15.6129 14.0315 15.8269 13.9626 15.9538C13.9026 16.0642 13.796 16.1417 13.6724 16.1646C13.5304 16.1909 13.3383 16.0899 12.9541 15.8879L9.31015 13.9716C9.19661 13.9119 9.13985 13.882 9.08004 13.8703C9.02709 13.8599 8.97262 13.8599 8.91966 13.8703C8.85986 13.882 8.80309 13.9119 8.68955 13.9716L5.04561 15.8879C4.66143 16.0899 4.46935 16.1909 4.32731 16.1646C4.20374 16.1417 4.09711 16.0642 4.03712 15.9538C3.96817 15.8269 4.00486 15.6129 4.07823 15.1851L4.77391 11.129C4.7956 11.0025 4.80644 10.9393 4.7991 10.8788C4.79261 10.8252 4.77576 10.7734 4.74951 10.7263C4.71986 10.673 4.6739 10.6282 4.58199 10.5387L1.63364 7.66702C1.32289 7.36436 1.16752 7.21302 1.14861 7.06985C1.13216 6.94529 1.1728 6.81995 1.25921 6.72874C1.35853 6.6239 1.57315 6.59253 2.00237 6.5298L6.07843 5.93402C6.20519 5.91549 6.26857 5.90623 6.32377 5.88056C6.37264 5.85783 6.41664 5.82584 6.45333 5.78635C6.49476 5.74176 6.52311 5.68432 6.57982 5.56944L8.40205 1.8778Z"
                stroke={theme === 'light' ? '#98A2B3' : '#667085'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
        )
})

                  