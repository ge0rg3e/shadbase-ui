import { CodeBlock } from '@/components/code-block';

const Installation = () => {
	return (
		<div className="w-full max-w-3xl space-y-8">
			<div className="space-y-4">
				<h1 className="text-3xl font-bold text-left">Installation</h1>
				<p className="text-base leading-relaxed text-muted-foreground">Get started with ShadBase UI in a few simple steps.</p>
			</div>

			<div className="space-y-4">
				<h2 className="text-xl font-semibold text-left">1. Initialize shadcn/ui</h2>
				<CodeBlock language="bash" filename="bash" hideCodeLines code={`npx shadcn@latest init`} />
			</div>

			<div className="space-y-4">
				<h2 className="text-xl font-semibold text-left">2. Add components</h2>
				<CodeBlock language="bash" filename="bash" code="npx shadcn@latest add https://shadbase-ui.ge0rg3e.rest/r/button.json" />
			</div>

			<div className="space-y-4">
				<h2 className="text-xl font-semibold text-left">3. Use in your project</h2>
				<CodeBlock
					language="tsx"
					filename="example.tsx"
					code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return <Button>Click me</Button>
}`}
				/>
			</div>
		</div>
	);
};

export default Installation;
