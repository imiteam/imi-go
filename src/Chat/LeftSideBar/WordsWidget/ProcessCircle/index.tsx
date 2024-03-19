import {useTheme} from 'next-themes'
import {memo} from 'react'

type ProgressCircleBarPropsType = {
  percentage: number
}

export const ProgressCircleBar = memo(function ProgressCircleBar(props: {percentage: number}) {
  const {theme} = useTheme()
  const percentage = props.percentage
  const radius = 85
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * percentage) / 100
  return (
    <svg className="mr-[14px] size-[44px]" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="gradient">
          <stop offset="35%" stopColor="#0017E4" />
          <stop offset="100%" stopColor="#3793FF" />
        </linearGradient>
      </defs>
      <circle cx={100} cy={100} strokeWidth={20} r={radius} fill="none" className="stroke-[#fff] dark:stroke-[black]" />
      <circle
        cx={100}
        cy={100}
        strokeWidth={20}
        r={radius}
        fill="none"
        className=""
        style={{strokeDasharray: dashArray, strokeDashoffset: dashOffset}}
        transform="rotate(-90 100 100)"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#gradient)"
      />

      <text
        x="51%"
        y="55%"
        dy="0.3rem"
        textAnchor="middle"
        className="font-TTNormsMedium text-[3rem]"
        fill={theme === 'light' ? '#101828' : theme === 'dark' ? '#F5F5F6' : 'ss'}
      >
        {Math.floor(percentage)}%
      </text>
    </svg>
  )
})
