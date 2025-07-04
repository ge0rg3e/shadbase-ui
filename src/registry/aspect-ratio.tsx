'use client';

import { cn } from '@/lib/utils';
import * as React from 'react';

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
	ratio?: number;
	children?: React.ReactNode;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(({ className, ratio = 16 / 9, children, ...props }, ref) => {
	return (
		<div ref={ref} data-slot="aspect-ratio" className={cn('relative w-full', className)} style={{ aspectRatio: ratio }} {...props}>
			{children}
		</div>
	);
});

AspectRatio.displayName = 'AspectRatio';

export { AspectRatio };
