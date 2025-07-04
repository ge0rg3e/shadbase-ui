'use client';

import { ScrollArea } from '@base-ui-components/react/scroll-area';
import { cn } from '@/lib/utils';
import * as React from 'react';

function ScrollAreaRoot({ className, children, ...props }: React.ComponentProps<typeof ScrollArea.Root>) {
	return (
		<ScrollArea.Root data-slot="scroll-area" className={cn('relative group', className)} {...props}>
			<ScrollArea.Viewport
				data-slot="scroll-area-viewport"
				className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
			>
				<ScrollArea.Content>{children}</ScrollArea.Content>
			</ScrollArea.Viewport>
			<ScrollBar />
			<ScrollArea.Corner />
		</ScrollArea.Root>
	);
}

function ScrollBar({ className, orientation = 'vertical', ...props }: React.ComponentProps<typeof ScrollArea.Scrollbar>) {
	return (
		<ScrollArea.Scrollbar
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			className={cn(
				'flex touch-none p-px transition-colors select-none opacity-0 hover:opacity-100 group-hover:opacity-100',
				orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent',
				orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent',
				className
			)}
			{...props}
		>
			<ScrollArea.Thumb data-slot="scroll-area-thumb" className="bg-border relative flex-1 rounded-full" />
		</ScrollArea.Scrollbar>
	);
}

function ScrollAreaViewport({ className, ...props }: React.ComponentProps<typeof ScrollArea.Viewport>) {
	return (
		<ScrollArea.Viewport
			data-slot="scroll-area-viewport"
			className={cn('focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1', className)}
			{...props}
		/>
	);
}

function ScrollAreaContent({ className, ...props }: React.ComponentProps<typeof ScrollArea.Content>) {
	return <ScrollArea.Content data-slot="scroll-area-content" className={className} {...props} />;
}

function ScrollAreaThumb({ className, ...props }: React.ComponentProps<typeof ScrollArea.Thumb>) {
	return <ScrollArea.Thumb data-slot="scroll-area-thumb" className={cn('bg-border relative flex-1 rounded-full', className)} {...props} />;
}

function ScrollAreaCorner({ className, ...props }: React.ComponentProps<typeof ScrollArea.Corner>) {
	return <ScrollArea.Corner data-slot="scroll-area-corner" className={className} {...props} />;
}

export { ScrollAreaRoot as ScrollArea, ScrollBar, ScrollAreaViewport, ScrollAreaContent, ScrollAreaThumb, ScrollAreaCorner };
