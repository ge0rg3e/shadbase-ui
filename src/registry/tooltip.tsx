'use client';

import { Tooltip } from '@base-ui-components/react/tooltip';
import { cn } from '@/lib/utils';
import * as React from 'react';

function TooltipProvider({ delay = 0, ...props }: React.ComponentProps<typeof Tooltip.Provider> & { delay?: number }) {
	return <Tooltip.Provider data-slot="tooltip-provider" delay={delay} {...props} />;
}

function TooltipRoot({ ...props }: React.ComponentProps<typeof Tooltip.Root>) {
	return (
		<TooltipProvider>
			<Tooltip.Root data-slot="tooltip" {...props} />
		</TooltipProvider>
	);
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof Tooltip.Trigger>) {
	return <Tooltip.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({ className, sideOffset = 0, children, ...props }: React.ComponentProps<typeof Tooltip.Popup> & { sideOffset?: number }) {
	return (
		<Tooltip.Portal>
			<Tooltip.Positioner sideOffset={sideOffset}>
				<Tooltip.Popup
					data-slot="tooltip-content"
					className={cn(
						'bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
						className
					)}
					{...props}
				>
					{children}
				</Tooltip.Popup>
			</Tooltip.Positioner>
		</Tooltip.Portal>
	);
}

function TooltipPortal({ children, ...props }: React.ComponentProps<typeof Tooltip.Portal>) {
	return (
		<Tooltip.Portal data-slot="tooltip-portal" {...props}>
			{children}
		</Tooltip.Portal>
	);
}

function TooltipPositioner({ className, ...props }: React.ComponentProps<typeof Tooltip.Positioner>) {
	return <Tooltip.Positioner data-slot="tooltip-positioner" className={className} {...props} />;
}

function TooltipPopup({ className, ...props }: React.ComponentProps<typeof Tooltip.Popup>) {
	return (
		<Tooltip.Popup
			data-slot="tooltip-popup"
			className={cn(
				'bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance',
				className
			)}
			{...props}
		/>
	);
}

function TooltipArrow({ className, ...props }: React.ComponentProps<typeof Tooltip.Arrow>) {
	return <Tooltip.Arrow data-slot="tooltip-arrow" className={cn('bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]', className)} {...props} />;
}

export { TooltipRoot as Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipPortal, TooltipPositioner, TooltipPopup, TooltipArrow };
