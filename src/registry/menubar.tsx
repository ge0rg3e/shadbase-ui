'use client';

import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { Menubar } from '@base-ui-components/react/menubar';
import { Menu } from '@base-ui-components/react/menu';
import { cn } from '@/lib/utils';
import * as React from 'react';

function MenubarRoot({ className, ...props }: React.ComponentProps<typeof Menubar>) {
	return <Menubar data-slot="menubar" className={cn('bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs', className)} {...props} />;
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof Menu.Root>) {
	return <Menu.Root data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof Menu.Group>) {
	return <Menu.Group data-slot="menubar-group" {...props} />;
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof Menu.Portal>) {
	return <Menu.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof Menu.RadioGroup>) {
	return <Menu.RadioGroup data-slot="menubar-radio-group" {...props} />;
}

function MenubarTrigger({ className, ...props }: React.ComponentProps<typeof Menu.Trigger>) {
	return (
		<Menu.Trigger
			data-slot="menubar-trigger"
			className={cn(
				'focus:bg-accent focus:text-accent-foreground data-[open]:bg-accent data-[open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none',
				className
			)}
			{...props}
		/>
	);
}

function MenubarContent({
	className,
	align = 'start',
	alignOffset = -4,
	sideOffset = 8,
	...props
}: React.ComponentProps<typeof Menu.Popup> & { align?: string; alignOffset?: number; sideOffset?: number }) {
	return (
		<MenubarPortal>
			<Menu.Positioner align={align as any} alignOffset={alignOffset} sideOffset={sideOffset}>
				<Menu.Popup
					data-slot="menubar-content"
					className={cn(
						'bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[open]:duration-200 data-[closed]:duration-150 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md',
						className
					)}
					{...props}
				/>
			</Menu.Positioner>
		</MenubarPortal>
	);
}

function MenubarItem({
	className,
	inset,
	variant = 'default',
	...props
}: React.ComponentProps<typeof Menu.Item> & {
	inset?: boolean;
	variant?: 'default' | 'destructive';
}) {
	return (
		<Menu.Item
			data-slot="menubar-item"
			data-inset={inset}
			data-variant={variant}
			className={cn(
				"focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		/>
	);
}

function MenubarCheckboxItem({ className, children, checked, ...props }: React.ComponentProps<typeof Menu.CheckboxItem>) {
	return (
		<Menu.CheckboxItem
			data-slot="menubar-checkbox-item"
			className={cn(
				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			checked={checked}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">{checked && <CheckIcon className="size-4" />}</span>
			{children}
		</Menu.CheckboxItem>
	);
}

function MenubarRadioItem({ className, children, ...props }: React.ComponentProps<typeof Menu.RadioItem>) {
	return (
		<Menu.RadioItem
			data-slot="menubar-radio-item"
			className={cn(
				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<CircleIcon className="size-2 fill-current" />
			</span>
			{children}
		</Menu.RadioItem>
	);
}

function MenubarLabel({
	className,
	inset,
	...props
}: React.ComponentProps<typeof Menu.GroupLabel> & {
	inset?: boolean;
}) {
	return <Menu.GroupLabel data-slot="menubar-label" data-inset={inset} className={cn('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className)} {...props} />;
}

function MenubarSeparator({ className, ...props }: React.ComponentProps<typeof Menu.Separator>) {
	return <Menu.Separator data-slot="menubar-separator" className={cn('bg-border -mx-1 my-1 h-px', className)} {...props} />;
}

function MenubarShortcut({ className, ...props }: React.ComponentProps<'span'>) {
	return <span data-slot="menubar-shortcut" className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)} {...props} />;
}

function MenubarSub({ children, ...props }: React.ComponentProps<typeof Menu.SubmenuTrigger>) {
	return (
		<Menu.Root data-slot="menubar-sub" {...props}>
			{children}
		</Menu.Root>
	);
}

function MenubarSubTrigger({
	className,
	inset,
	children,
	...props
}: React.ComponentProps<typeof Menu.SubmenuTrigger> & {
	inset?: boolean;
}) {
	return (
		<Menu.SubmenuTrigger
			data-slot="menubar-sub-trigger"
			data-inset={inset}
			className={cn(
				'focus:bg-accent focus:text-accent-foreground data-[open]:bg-accent data-[open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8',
				className
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto h-4 w-4" />
		</Menu.SubmenuTrigger>
	);
}

function MenubarSubContent({ className, ...props }: React.ComponentProps<typeof Menu.Popup>) {
	return (
		<MenubarPortal>
			<Menu.Positioner>
				<Menu.Popup
					data-slot="menubar-sub-content"
					className={cn(
						'bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[open]:duration-200 data-[closed]:duration-150 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
						className
					)}
					{...props}
				/>
			</Menu.Positioner>
		</MenubarPortal>
	);
}

export {
	MenubarRoot as Menubar,
	MenubarPortal,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarGroup,
	MenubarSeparator,
	MenubarLabel,
	MenubarItem,
	MenubarShortcut,
	MenubarCheckboxItem,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSub,
	MenubarSubTrigger,
	MenubarSubContent
};
