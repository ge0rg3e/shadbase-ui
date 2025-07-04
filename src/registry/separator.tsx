'use client';

import { Separator } from '@base-ui-components/react/separator';
import { cn } from '@/lib/utils';
import * as React from 'react';

function SeparatorRoot({
	className,
	orientation = 'horizontal',
	decorative = true,
	...props
}: React.ComponentProps<typeof Separator> & {
	decorative?: boolean;
}) {
	return (
		<Separator
			data-slot="separator"
			orientation={orientation}
			className={cn('bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px', className)}
			{...props}
		/>
	);
}

export { SeparatorRoot as Separator };
