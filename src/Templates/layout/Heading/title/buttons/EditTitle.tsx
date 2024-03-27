"use client"
import { memo } from "react"

export const EditTitle = memo(function EditTitle(props: {

}){
    return (
        <div
        className="relative ml-[4px] flex size-[32px] cursor-pointer items-end justify-center p-[6px] md:top-[-4px] md:vsm:top-[-2px] lg:top-[-2px] xl:top-[1px]"
        // onClick={props.callBack}
        >
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M16.5 13.9995L15.6666 14.9112C15.2245 15.3946 14.6251 15.6662 14.0001 15.6662C13.3751 15.6662 12.7757 15.3946 12.3337 14.9112C11.891 14.4288 11.2916 14.1579 10.6668 14.1579C10.042 14.1579 9.44261 14.4288 8.99998 14.9112M1.5 15.6662H2.89545C3.3031 15.6662 3.50693 15.6662 3.69874 15.6202C3.8688 15.5793 4.03138 15.512 4.1805 15.4206C4.34869 15.3175 4.49282 15.1734 4.78107 14.8852L15.25 4.4162C15.9404 3.72585 15.9404 2.60656 15.25 1.9162C14.5597 1.22585 13.4404 1.22585 12.75 1.9162L2.28105 12.3852C1.9928 12.6734 1.84867 12.8175 1.7456 12.9857C1.65422 13.1348 1.58688 13.2974 1.54605 13.4675C1.5 13.6593 1.5 13.8631 1.5 14.2708V15.6662Z"
            // stroke={theme === 'light' ? '#667085' : '#fff'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
        </div>
    )})