'use client';

import { Popover } from '@base-ui-components/react/popover';
import { cn } from '@/lib/utils';
import * as React from 'react';

function PopoverRoot({ ...props }: React.ComponentProps<typeof Popover.Root>) {
	return <Popover.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }: React.ComponentProps<typeof Popover.Trigger>) {
	return <Popover.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
	className,
	align = 'center',
	sideOffset = 4,
	children,
	...props
}: React.ComponentProps<typeof Popover.Popup> & {
	align?: 'center' | 'start' | 'end';
	sideOffset?: number;
}) {
	return (
		<Popover.Portal>
			<Popover.Positioner align={align} sideOffset={sideOffset}>
				<Popover.Popup
					data-slot="popover-content"
					className={cn(
						'bg-popover text-popover-foreground data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[open]:duration-200 data-[closed]:duration-150 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
						className
					)}
					{...props}
				>
					{children}
				</Popover.Popup>
			</Popover.Positioner>
		</Popover.Portal>
	);
}

function PopoverAnchor({ ...props }: React.ComponentProps<typeof Popover.Trigger>) {
	return <Popover.Trigger data-slot="popover-anchor" {...props} />;
}

function PopoverTitle({ className, ...props }: React.ComponentProps<typeof Popover.Title>) {
	return <Popover.Title data-slot="popover-title" className={cn('text-sm font-semibold', className)} {...props} />;
}

function PopoverDescription({ className, ...props }: React.ComponentProps<typeof Popover.Description>) {
	return <Popover.Description data-slot="popover-description" className={cn('text-sm text-muted-foreground', className)} {...props} />;
}

function PopoverClose({ className, ...props }: React.ComponentProps<typeof Popover.Close>) {
	return (
		<Popover.Close
			data-slot="popover-close"
			className={cn(
				'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[open]:bg-secondary',
				className
			)}
			{...props}
		/>
	);
}

function PopoverArrow({ className, ...props }: React.ComponentProps<typeof Popover.Arrow>) {
	return <Popover.Arrow data-slot="popover-arrow" className={cn('fill-popover', className)} {...props} />;
}

export { PopoverRoot as Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverTitle, PopoverDescription, PopoverClose, PopoverArrow };
