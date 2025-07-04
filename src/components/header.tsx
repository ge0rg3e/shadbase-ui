import { Github, Moon, Sun, Menu } from 'lucide-react';
import { Button } from '@/registry/button';
import { Link } from 'react-router';
import useTheme from '@/lib/theme';

const Header = ({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void }) => {
	const { theme, changeTheme } = useTheme();

	return (
		<header className="w-full flex justify-between items-center px-4 py-3">
			{/* Hamburger button for mobile */}
			<button className="md:hidden p-2 rounded focus:outline-none bg-background border mr-2" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
				<Menu className="w-6 h-6" />
			</button>
			<Link to="/">
				<span className="text-base font-medium">ShadBase UI</span>
			</Link>
			<div className="flex justify-end items-center gap-x-1">
				<Button variant="ghost" size="icon" asChild>
					<Link to="https://github.com/ge0rg3e/shadbase-ui" target="_blank">
						<Github className="size-4" />
					</Link>
				</Button>

				<Button variant="ghost" size="icon" onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
					{theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
				</Button>
			</div>
		</header>
	);
};

export default Header;
