'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import cn from 'classnames'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, ...props}, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative mb-[15px] flex w-full cursor-pointer touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[#0B3BEC]">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="shadow relative block size-6 rounded-[10px] border border-[#0B3BEC] bg-[white] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-[#17181C]">
      <span className="absolute left-1/2 top-1/2 size-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0B3BEC]"></span>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export {Slider}
