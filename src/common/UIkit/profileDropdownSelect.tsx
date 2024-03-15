import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "../../UIkit/lib/utils";

const DropdownSelect = SelectPrimitive.Root;

const DropdownSelectGroup = SelectPrimitive.Group;

const DropdownSelectValue = SelectPrimitive.Value;

const DropdownSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "hover:rext-[#fff] dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus:ring-slate-300 relative top-[1px] flex h-10 w-full items-center justify-between rounded-md border-none px-3 pt-2 text-sm ring-offset-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild className="">
      <ChevronDown className="relative left-[1px] top-[5px] h-4 w-[36px] opacity-50 md:left-[-7px] md:top-[3px]" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
DropdownSelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const DropdownSelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      id="templateSelect"
      className={cn(
        "shadow-md relative z-50 max-h-[300px] w-[280px] overflow-y-auto rounded-[12px] border border-[#DAE3E9] bg-[#EDF2F6] py-1 pl-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out  data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-[#333741] dark:bg-[#17181C]",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
DropdownSelectContent.displayName = SelectPrimitive.Content.displayName;

const DropdownSelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      "py-1.5 pl-8 pr-2 text-sm font-semibold text-[black]",
      className,
    )}
    {...props}
  />
));
DropdownSelectLabel.displayName = SelectPrimitive.Label.displayName;

const DropdownSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex h-10 w-[98%] cursor-pointer select-none items-center rounded-[10px] border-none px-2 py-2.5 font-TTNormsMedium text-[16px] leading-[19px] text-[#101828] outline-none focus:bg-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-[#F5F5F6] dark:focus:bg-black",
      className,
    )}
    {...props}
  >
    {/* <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
            <Icon icon="checkSelect"/>
        </SelectPrimitive.ItemIndicator>
        </span> */}

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
DropdownSelectItem.displayName = SelectPrimitive.Item.displayName;

const DropdownSelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("bg-slate-100 dark:bg-slate-800 -mx-1 my-1 h-px", className)}
    {...props}
  />
));
DropdownSelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  DropdownSelect,
  DropdownSelectContent,
  DropdownSelectGroup,
  DropdownSelectItem,
  DropdownSelectLabel,
  DropdownSelectSeparator,
  DropdownSelectTrigger,
  DropdownSelectValue,
};
