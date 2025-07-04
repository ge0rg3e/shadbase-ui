'use client';

import { RadioGroup } from '@base-ui-components/react/radio-group';
import { Radio } from '@base-ui-components/react/radio';
import { CircleIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import * as React from 'react';

function RadioGroupRoot({ className, ...props }: React.ComponentProps<typeof RadioGroup>) {
	return <RadioGroup data-slot="radio-group" className={cn('grid gap-3', className)} {...props} />;
}

function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof Radio.Root>) {
	return (
		<Radio.Root
			data-slot="radio-group-item"
			className={cn(
				'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		>
			<Radio.Indicator data-slot="radio-group-indicator" className="relative flex items-center justify-center">
				<CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
			</Radio.Indicator>
		</Radio.Root>
	);
}

function RadioRoot({ className, ...props }: React.ComponentProps<typeof Radio.Root>) {
	return (
		<Radio.Root
			data-slot="radio"
			className={cn(
				'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		/>
	);
}

function RadioIndicator({ className, ...props }: React.ComponentProps<typeof Radio.Indicator>) {
	return (
		<Radio.Indicator data-slot="radio-indicator" className={cn('relative flex items-center justify-center', className)} {...props}>
			<CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
		</Radio.Indicator>
	);
}

export { RadioGroupRoot as RadioGroup, RadioGroupItem, RadioRoot as Radio, RadioIndicator };
