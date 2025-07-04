'use client';

import { Progress } from '@base-ui-components/react/progress';
import { cn } from '@/lib/utils';
import * as React from 'react';

function ProgressRoot({ className, value, ...props }: React.ComponentProps<typeof Progress.Root>) {
	return (
		<Progress.Root data-slot="progress" className={cn('relative', className)} value={value} {...props}>
			<Progress.Track className="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full">
				<Progress.Indicator data-slot="progress-indicator" className="bg-primary h-full w-full flex-1 transition-all" />
			</Progress.Track>
		</Progress.Root>
	);
}

function ProgressTrack({ className, ...props }: React.ComponentProps<typeof Progress.Track>) {
	return <Progress.Track data-slot="progress-track" className={cn('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className)} {...props} />;
}

function ProgressIndicator({ className, ...props }: React.ComponentProps<typeof Progress.Indicator>) {
	return <Progress.Indicator data-slot="progress-indicator" className={cn('bg-primary h-full w-full flex-1 transition-all', className)} {...props} />;
}

function ProgressValue({ className, ...props }: React.ComponentProps<typeof Progress.Value>) {
	return <Progress.Value data-slot="progress-value" className={cn('text-sm font-medium', className)} {...props} />;
}

function ProgressLabel({ className, ...props }: React.ComponentProps<typeof Progress.Label>) {
	return <Progress.Label data-slot="progress-label" className={cn('text-sm font-medium', className)} {...props} />;
}

export { ProgressRoot as Progress, ProgressTrack, ProgressIndicator, ProgressValue, ProgressLabel };
