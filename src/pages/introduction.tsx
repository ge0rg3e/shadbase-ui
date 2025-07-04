const Introduction = () => {
	return (
		<div className="w-full max-w-3xl space-y-10">
			<div className="space-y-6">
				<h1 className="text-3xl font-bold text-left">Introduction</h1>

				<p className="text-base leading-relaxed">
					ShadBase UI is an enhanced implementation of{' '}
					<a href="https://ui.shadcn.com" target="_blank" className="underline text-primary">
						shadcn/ui
					</a>{' '}
					components, rebuilt using{' '}
					<a href="https://base-ui.com" target="_blank" className="underline text-primary">
						Base UI
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default Introduction;
