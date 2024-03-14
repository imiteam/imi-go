import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'

import cn from 'classnames'
import { ChevronDown } from 'lucide-react'

const HistoryCategorySelect = SelectPrimitive.Root

const HistoryCategorySelectGroup = SelectPrimitive.Group

const HistoryCategorySelectValue = SelectPrimitive.Value

const HistoryCategorySelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({className, children, ...props}, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'focus:shadow-tempGenerateInput hover:rext-[#fff] flex h-[40px] w-full min-w-[214px] grow items-center justify-between whitespace-nowrap border-[2px] border-template-item-text-active-lite bg-bg-lite px-[14px] py-[12px] font-TTNormsMedium text-[16px] leading-[19px] text-heading-text-lite outline-none ring-offset-white disabled:cursor-not-allowed dark:bg-bg-dark dark:text-heading-text-dark vsm:min-w-[100px] vsm:px-2 sm:text-[14px] md:rounded-[16px] lg:rounded-[12px] xl:rounded-[16px]',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild className="">
      <ChevronDown className="relative left-[1px] top-[2px] h-4 w-[36px] opacity-50 md:left-[13px] md:top-[2px]" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
HistoryCategorySelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const HistoryCategorySelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({className, children, position = 'popper', ...props}, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'border-slate-200 text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-black',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
HistoryCategorySelectContent.displayName = SelectPrimitive.Content.displayName

const HistoryCategorySelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({className, children, ...props}, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center whitespace-nowrap border-none font-TTNormsMedium text-[16px] leading-[19px] text-[#101828] outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-[#F5F5F6] sm:text-[14px]',
      className,
    )}
    {...props}
  >
    {/* <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span> */}

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
HistoryCategorySelectItem.displayName = SelectPrimitive.Item.displayName

const HistoryCategorySelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({className, ...props}, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('bg-slate-100 dark:bg-slate-800 -mx-1 my-1 h-px', className)}
    {...props}
  />
))
HistoryCategorySelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  HistoryCategorySelect,
  HistoryCategorySelectContent,
  HistoryCategorySelectGroup,
  HistoryCategorySelectItem,
  HistoryCategorySelectSeparator,
  HistoryCategorySelectTrigger,
  HistoryCategorySelectValue,
}
