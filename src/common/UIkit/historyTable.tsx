import * as React from 'react'

import cn from 'classnames'

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({className, ...props}, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn('w-full caption-bottom text-sm', className)} {...props} />
    </div>
  ),
)
Table.displayName = 'Table'

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({className, ...props}, ref) => <thead ref={ref} className={cn('', className)} {...props} />,
)
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({className, children, ...props}, ref) => (
    <tbody ref={ref} className={cn('bg-white dark:bg-[#21242C] ', className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child)
        }
        return child
      })}
    </tbody>
  ),
)
TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({className, ...props}, ref) => (
    <tfoot
      ref={ref}
      className={cn(' bg-white font-medium dark:bg-[#21242C] [&>tr]:last:border-b-0', className)}
      {...props}
    />
  ),
)
TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({className, ...props}, ref) => (
    <tr
      ref={ref}
      className={cn(
        ' transition-colors hover:bg-[#F9FAFB] data-[state=selected]:bg-muted dark:hover:bg-[#2A2F3A]',
        className,
      )}
      {...props}
    />
  ),
)
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({className, ...props}, ref) => (
    <th
      ref={ref}
      className={cn(
        'h-10 px-2 text-left align-middle font-TTNormsMedium text-[12px] leading-[14px] text-[#475467] dark:text-[#98A2B3] [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  ),
)
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({className, ...props}, ref) => (
    <td
      ref={ref}
      className={cn('p-2 align-middle  [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className)}
      {...props}
    />
  ),
)
TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({className, ...props}, ref) => (
    <caption ref={ref} className={cn('mt-4 text-sm text-muted-foreground', className)} {...props} />
  ),
)
TableCaption.displayName = 'TableCaption'

export {Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow}
