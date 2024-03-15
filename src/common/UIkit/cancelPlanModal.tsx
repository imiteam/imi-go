'use client'
// Использовано - 1) купить "доп пакет" на странице - настройки -> тарифы и оплата , 2) покупка тарифа на странице - настройки -> тарифы и оплата
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {Cross2Icon} from '@radix-ui/react-icons'
import * as React from 'react'

import cn from 'classnames'

const CancelPlanDialog = DialogPrimitive.Root

const CancelPlanDialogTrigger = DialogPrimitive.Trigger

const CancelPlanDialogPortal = DialogPrimitive.Portal

const CancelPlanDialogClose = DialogPrimitive.Close

const CancelPlanDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
))
CancelPlanDialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const CancelPlanDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({className, children, ...props}, ref) => (
  <CancelPlanDialogPortal>
    <CancelPlanDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'max-w-lg shadow-lg fixed left-[50%] top-[50%] z-50 grid h-[330px] w-[570px] translate-x-[-50%] translate-y-[-50%] gap-4 bg-background duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] vsm:overflow-auto vsm:pr-[3px] sm:rounded-lg planSm:w-[80%] planSm:h-[350px] planSm:vsm:h-[400px] planSm:vsm:w-[98%]',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        {/* <Cross2Icon className="size-4 " /> */}
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </CancelPlanDialogPortal>
))
CancelPlanDialogContent.displayName = DialogPrimitive.Content.displayName

const CancelPlanDialogHeader = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
)
CancelPlanDialogHeader.displayName = 'DialogHeader'

const CancelPlanDialogFooter = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)
CancelPlanDialogFooter.displayName = 'DialogFooter'

const CancelPlanDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
CancelPlanDialogTitle.displayName = DialogPrimitive.Title.displayName

const CancelPlanDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({className, ...props}, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
CancelPlanDialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  CancelPlanDialog,
  CancelPlanDialogClose,
  CancelPlanDialogContent,
  CancelPlanDialogDescription,
  CancelPlanDialogFooter,
  CancelPlanDialogHeader,
  CancelPlanDialogOverlay,
  CancelPlanDialogPortal,
  CancelPlanDialogTitle,
  CancelPlanDialogTrigger,
}
