import { ScrollArea } from '@/registry/scroll-area';
import { Link, useLocation } from 'react-router';
import docsRegistry from '@/lib/docs-registry';
import { XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const Sidebar = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
	const location = useLocation();
	const current = location.pathname.split('/').pop();

	// Close sidebar on route change (mobile only)
	useEffect(() => {
		onClose();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname]);

	return (
		<aside
			className={
				`py-4 pl-4 w-64 h-screen bg-background md:bg-transparent z-30 fixed top-0 left-0 transition-transform duration-200 md:static md:translate-x-0 ` +
				(open ? 'translate-x-0' : '-translate-x-full') +
				' md:block'
			}
		>
			{/* Close button for mobile */}
			<button className="md:hidden absolute top-2 right-4 p-2 rounded focus:outline-none cursor-pointer z-40" onClick={onClose} aria-label="Close sidebar">
				<XIcon className="size-4" />
			</button>
			<ScrollArea className="h-full max-h-[calc(100vh-70px)] pr-4">
				<div className="text-xs text-muted-foreground mb-3 font-semibold">Get Started</div>

				<div className="flex flex-col gap-1">
					<Link to="/" className={cn('px-3 py-1.5 rounded-lg text-sm font-medium', location.pathname === '/' && 'bg-muted')}>
						Introduction
					</Link>

					<Link to="/installation" className={cn('px-3 py-1.5 rounded-lg text-sm font-medium', location.pathname === '/installation' && 'bg-muted')}>
						Installation
					</Link>
				</div>

				<div className="my-5" />

				<div className="text-xs text-muted-foreground mb-3 font-semibold">Components</div>
				<div className="flex flex-col gap-1">
					{docsRegistry.map((item) => {
						const isActive = current === item.name;
						return (
							<Link to={`/components/${item.name}`} key={item.name} className={cn('px-3 py-1.5 rounded-lg text-sm font-medium', isActive && 'bg-muted')}>
								{item.title}
							</Link>
						);
					})}
				</div>
			</ScrollArea>
		</aside>
	);
};

export default Sidebar;
