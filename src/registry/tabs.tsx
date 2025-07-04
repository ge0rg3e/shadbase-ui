'use client';

import { Tabs } from '@base-ui-components/react/tabs';
import { cn } from '@/lib/utils';
import * as React from 'react';

function TabsRoot({ className, ...props }: React.ComponentProps<typeof Tabs.Root>) {
	return <Tabs.Root data-slot="tabs" className={cn('flex flex-col gap-2', className)} {...props} />;
}

function TabsList({ className, ...props }: React.ComponentProps<typeof Tabs.List>) {
	return <Tabs.List data-slot="tabs-list" className={cn('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className)} {...props} />;
}

function TabsTab({ className, ...props }: React.ComponentProps<typeof Tabs.Tab>) {
	return (
		<Tabs.Tab
			data-slot="tabs-tab"
			className={cn(
				"data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		/>
	);
}

function TabsPanel({ className, ...props }: React.ComponentProps<typeof Tabs.Panel>) {
	return <Tabs.Panel data-slot="tabs-panel" className={cn('flex-1 outline-none', className)} {...props} />;
}

function TabsIndicator({ className, ...props }: React.ComponentProps<typeof Tabs.Indicator>) {
	return <Tabs.Indicator data-slot="tabs-indicator" className={cn('bg-primary absolute transition-all duration-200', className)} {...props} />;
}

export { TabsRoot as Tabs, TabsList, TabsTab as TabsTrigger, TabsPanel as TabsContent, TabsIndicator };
