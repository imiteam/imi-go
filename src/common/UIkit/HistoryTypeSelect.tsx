import * as SelectPrimitive from '@radix-ui/react-select'
import {ChevronDown} from 'lucide-react'
import * as React from 'react'

import cn from 'classnames'

const HistoryTypeSelect = SelectPrimitive.Root

const HistoryTypeSelectGroup = SelectPrimitive.Group

const HistoryTypeSelectValue = SelectPrimitive.Value

const HistoryTypeSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({className, children, ...props}, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      ' focus:shadow-tempGenerateInput hover:rext-[#fff] flex h-[36px]  w-[151px] items-center justify-between whitespace-nowrap rounded-[12px] border-[1px] border-[#D0D5DD] bg-bg-lite px-[14px] py-[8px] font-TTNormsMedium leading-[19px] text-heading-text-lite outline-none ring-offset-white disabled:cursor-not-allowed dark:border-[#333741] dark:bg-bg-dark dark:text-heading-text-dark md:text-[12px] lg:text-[12px] xl:text-[14px]',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild className="">
      <ChevronDown className="relative top-[2px]  h-4 w-[36px]  opacity-50 md:left-[14px] lg:left-[14px] xl:left-[10px] " />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
HistoryTypeSelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const HistoryTypeSelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({className, children, position = 'popper', ...props}, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'shadow-md relative z-50 max-h-[300px] w-full overflow-y-auto rounded-[12px] border border-[#DAE3E9] bg-[#EDF2F6] py-1 pl-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out  data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-[#333741] dark:bg-[#17181C]',
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
HistoryTypeSelectContent.displayName = SelectPrimitive.Content.displayName

const HistoryTypeSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({className, children, ...props}, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex h-8 w-[98%] cursor-pointer select-none items-center rounded-[10px] border-none px-2 py-2.5 font-TTNormsMedium text-[16px] leading-[19px] text-[#101828] outline-none focus:bg-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-[#F5F5F6] dark:focus:bg-black lg:text-[12px] xl:text-[14px]',
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.6666 1L5.49998 10.1667L1.33331 6"
                stroke="#0B3BEC"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
HistoryTypeSelectItem.displayName = SelectPrimitive.Item.displayName

const HistoryTypeSelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({className, ...props}, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('bg-slate-100 dark:bg-slate-800 -mx-1 my-1 h-px', className)}
    {...props}
  />
))
HistoryTypeSelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  HistoryTypeSelect,
  HistoryTypeSelectContent,
  HistoryTypeSelectGroup,
  HistoryTypeSelectItem,
  HistoryTypeSelectSeparator,
  HistoryTypeSelectTrigger,
  HistoryTypeSelectValue,
}
