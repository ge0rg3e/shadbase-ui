'use client';

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { Select } from '@base-ui-components/react/select';
import { cn } from '@/lib/utils';
import * as React from 'react';

function SelectRoot({ ...props }: React.ComponentProps<typeof Select.Root>) {
	return <Select.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof Select.Group>) {
	return <Select.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof Select.Value>) {
	return <Select.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
	className,
	size = 'default',
	children,
	...props
}: React.ComponentProps<typeof Select.Trigger> & {
	size?: 'sm' | 'default';
}) {
	return (
		<Select.Trigger
			data-slot="select-trigger"
			data-size={size}
			className={cn(
				"border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		>
			{children}
			<Select.Icon>
				<ChevronDownIcon className="size-4 opacity-50" />
			</Select.Icon>
		</Select.Trigger>
	);
}

function SelectContent({
	className,
	children,
	position = 'popper',
	...props
}: React.ComponentProps<typeof Select.Popup> & {
	position?: 'popper' | 'item';
}) {
	return (
		<Select.Portal>
			<Select.Positioner>
				<Select.ScrollUpArrow>
					<ChevronUpIcon className="size-4" />
				</Select.ScrollUpArrow>
				<Select.Popup
					data-slot="select-content"
					className={cn(
						'bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[open]:duration-200 data-[closed]:duration-150 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md',
						position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
						className
					)}
					{...props}
				>
					{children}
				</Select.Popup>
				<Select.ScrollDownArrow>
					<ChevronDownIcon className="size-4" />
				</Select.ScrollDownArrow>
			</Select.Positioner>
		</Select.Portal>
	);
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof Select.GroupLabel>) {
	return <Select.GroupLabel data-slot="select-label" className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)} {...props} />;
}

function SelectItem({ className, children, ...props }: React.ComponentProps<typeof Select.Item>) {
	return (
		<Select.Item
			data-slot="select-item"
			className={cn(
				"focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
				className
			)}
			{...props}
		>
			<Select.ItemIndicator className="absolute right-2 flex size-3.5 items-center justify-center">
				<CheckIcon className="size-4" />
			</Select.ItemIndicator>
			<Select.ItemText>{children}</Select.ItemText>
		</Select.Item>
	);
}

function SelectSeparator({ className, ...props }: React.ComponentProps<typeof Select.Separator>) {
	return <Select.Separator data-slot="select-separator" className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)} {...props} />;
}

function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof Select.ScrollUpArrow>) {
	return (
		<Select.ScrollUpArrow data-slot="select-scroll-up-button" className={cn('flex cursor-default items-center justify-center py-1', className)} {...props}>
			<ChevronUpIcon className="size-4" />
		</Select.ScrollUpArrow>
	);
}

function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof Select.ScrollDownArrow>) {
	return (
		<Select.ScrollDownArrow data-slot="select-scroll-down-button" className={cn('flex cursor-default items-center justify-center py-1', className)} {...props}>
			<ChevronDownIcon className="size-4" />
		</Select.ScrollDownArrow>
	);
}

function SelectIcon({ className, ...props }: React.ComponentProps<typeof Select.Icon>) {
	return <Select.Icon data-slot="select-icon" className={cn('opacity-50', className)} {...props} />;
}

function SelectArrow({ className, ...props }: React.ComponentProps<typeof Select.Arrow>) {
	return <Select.Arrow data-slot="select-arrow" className={cn('fill-popover', className)} {...props} />;
}

export {
	SelectRoot as Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
	SelectIcon,
	SelectArrow
};
