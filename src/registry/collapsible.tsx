'use client';

import { Collapsible } from '@base-ui-components/react/collapsible';
import * as React from 'react';

function CollapsibleRoot({ ...props }: React.ComponentProps<typeof Collapsible.Root>) {
	return <Collapsible.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({ ...props }: React.ComponentProps<typeof Collapsible.Trigger>) {
	return <Collapsible.Trigger data-slot="collapsible-trigger" {...props} />;
}

function CollapsibleContent({ ...props }: React.ComponentProps<typeof Collapsible.Panel>) {
	return <Collapsible.Panel data-slot="collapsible-content" {...props} />;
}

export { CollapsibleRoot as Collapsible, CollapsibleTrigger, CollapsibleContent };
