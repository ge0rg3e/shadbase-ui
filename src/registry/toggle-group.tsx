'use client';

import { ToggleGroup } from '@base-ui-components/react/toggle-group';
import { type VariantProps } from 'class-variance-authority';
import { Toggle } from '@base-ui-components/react/toggle';
import { toggleVariants } from '@/registry/toggle';
import { cn } from '@/lib/utils';
import * as React from 'react';

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
	size: 'default',
	variant: 'default'
});

function ToggleGroupRoot({ className, variant, size, children, ...props }: React.ComponentProps<typeof ToggleGroup> & VariantProps<typeof toggleVariants>) {
	return (
		<ToggleGroup
			data-slot="toggle-group"
			data-variant={variant}
			data-size={size}
			className={cn('group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs', className)}
			{...props}
		>
			<ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
		</ToggleGroup>
	);
}

function ToggleGroupItem({ className, children, variant, size, ...props }: React.ComponentProps<typeof Toggle> & VariantProps<typeof toggleVariants>) {
	const context = React.useContext(ToggleGroupContext);

	return (
		<Toggle
			data-slot="toggle-group-item"
			data-variant={context.variant || variant}
			data-size={context.size || size}
			className={cn(
				toggleVariants({
					variant: context.variant || variant,
					size: context.size || size
				}),
				'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
				className
			)}
			{...props}
		>
			{children}
		</Toggle>
	);
}

export { ToggleGroupRoot as ToggleGroup, ToggleGroupItem };
