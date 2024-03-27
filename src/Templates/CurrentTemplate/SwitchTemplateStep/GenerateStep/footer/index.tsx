"use client"
import {memo, useState} from 'react'
import { Info } from './buttons/Info'
import { Generate } from './buttons/Generate'
import { VariantsCountInput } from './VariantsCountInput'


export const Footer = memo(function Footer() {
  const [variantsCount, setVariantsCount] = useState<number>(1)

  const incrementCount = () => {
    if (variantsCount >= 10) {
      return
    }
    setVariantsCount(variantsCount + 1)
  }
  const decrementCount = () => {
    if (variantsCount <= 1) {
      return
    }
    setVariantsCount(variantsCount - 1)
  }

  return (
    <div className="flex h-[77px] w-full items-center border-t-[2px] border-t-bg-lite px-[24px] py-[16px] dark:border-t-bg-dark">
      <Info/>
      <VariantsCountInput
        variantsCount={variantsCount}
        decrementCount={decrementCount}
        incrementCount={incrementCount}
      />
      <Generate />
    </div>
  )
}
)