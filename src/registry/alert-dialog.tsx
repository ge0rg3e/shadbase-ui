'use client';

import { AlertDialog } from '@base-ui-components/react/alert-dialog';
import { cn } from '@/lib/utils';
import * as React from 'react';

function AlertDialogRoot({ ...props }: React.ComponentProps<typeof AlertDialog.Root>) {
	return <AlertDialog.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({ ...props }: React.ComponentProps<typeof AlertDialog.Trigger>) {
	return <AlertDialog.Trigger data-slot="alert-dialog-trigger" {...props} />;
}

function AlertDialogPortal({ ...props }: React.ComponentProps<typeof AlertDialog.Portal>) {
	return <AlertDialog.Portal data-slot="alert-dialog-portal" {...props} />;
}

function AlertDialogBackdrop({ className, ...props }: React.ComponentProps<typeof AlertDialog.Backdrop>) {
	return (
		<AlertDialog.Backdrop
			data-slot="alert-dialog-backdrop"
			className={cn(
				'data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[open]:duration-200 data-[closed]:duration-150 fixed inset-0 z-50 bg-black/50',
				className
			)}
			{...props}
		/>
	);
}

function AlertDialogPopup({ className, ...props }: React.ComponentProps<typeof AlertDialog.Popup>) {
	return (
		<AlertDialog.Popup
			data-slot="alert-dialog-popup"
			className={cn(
				'bg-background data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[open]:duration-200 data-[closed]:duration-150 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg sm:max-w-lg',
				className
			)}
			{...props}
		/>
	);
}

function AlertDialogContent({ className, ...props }: React.ComponentProps<typeof AlertDialog.Popup>) {
	return (
		<AlertDialogPortal keepMounted>
			<AlertDialogBackdrop />
			<AlertDialogPopup className={className} {...props} />
		</AlertDialogPortal>
	);
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="alert-dialog-header" className={cn('flex flex-col gap-2 text-center sm:text-left', className)} {...props} />;
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="alert-dialog-footer" className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)} {...props} />;
}

function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialog.Title>) {
	return <AlertDialog.Title data-slot="alert-dialog-title" className={cn('text-lg font-semibold', className)} {...props} />;
}

function AlertDialogDescription({ className, ...props }: React.ComponentProps<typeof AlertDialog.Description>) {
	return <AlertDialog.Description data-slot="alert-dialog-description" className={cn('text-muted-foreground text-sm', className)} {...props} />;
}

function AlertDialogAction({ className, ...props }: React.ComponentProps<typeof AlertDialog.Close>) {
	return (
		<AlertDialog.Close
			className={cn(
				'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2',
				className
			)}
			{...props}
		/>
	);
}

function AlertDialogCancel({ className, ...props }: React.ComponentProps<typeof AlertDialog.Close>) {
	return (
		<AlertDialog.Close
			className={cn(
				'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2',
				className
			)}
			{...props}
		/>
	);
}

export {
	AlertDialogRoot as AlertDialog,
	AlertDialogPortal,
	AlertDialogBackdrop,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogPopup,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogCancel
};
