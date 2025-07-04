import { CodeBlock } from '@/components/code-block';
import docsRegistry from '@/lib/docs-registry';
import { Link, useParams } from 'react-router';
import { Button } from '@/registry/button';
import { Link2 } from 'lucide-react';
import { useMemo } from 'react';

const Component = () => {
	const { name } = useParams();

	const component = useMemo(() => {
		return docsRegistry.find((component) => component.name === name);
	}, [name]);

	return component ? (
		<div className="w-full max-w-3xl space-y-10">
			<div>
				<h1 className="text-2xl font-bold text-left">{component.title}</h1>
				<p className="text-sm text-muted-foreground text-left">{component.description}</p>

				<div className="flex flex-row gap-2">
					<Button className="mt-4" size="sm" variant="ghost" asChild>
						<Link to={component.apiReference} target="_blank">
							API Reference <Link2 />
						</Link>
					</Button>
				</div>
			</div>

			<div className="space-y-3 mt-6">
				<h1 className="text-xl font-medium text-left">Preview</h1>
				<div className="border rounded-lg p-3">{component.preview}</div>
			</div>

			<div className="space-y-3">
				<h1 className="text-xl font-medium text-left">Installation</h1>
				<CodeBlock language="bash" filename="bash" hideCodeLines code={`npx shadcn@latest add https://shadbase-ui.ge0rg3e.rest/r/${component.name}.json`} />
			</div>

			<div className="space-y-3">
				<h1 className="text-xl font-medium text-left">Usage</h1>
				<CodeBlock language="tsx" filename={`${component.name}.tsx`} code={component.usage} />
			</div>
		</div>
	) : (
		<div className="text-center mt-10">Component not found.</div>
	);
};

export default Component;
