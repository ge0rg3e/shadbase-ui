import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import Introduction from './pages/introduction';
import Installation from './pages/installation';
import { createRoot } from 'react-dom/client';
import Sidebar from './components/sidebar';
import Component from './pages/component';
import Header from './components/header';
import { useState } from 'react';
import './styles.css';

const Layout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<main className="w-screen h-screen overflow-hidden bg-card/50">
			<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			<div className="flex flex-row size-full">
				<Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
				{sidebarOpen && <div className="fixed inset-0 bg-black/40 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />}
				<div className="w-full h-screen p-10 pb-20 bg-background rounded-tl-xl border border-dashed overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center">
					<Outlet />
				</div>
			</div>
		</main>
	);
};

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Introduction />
			},
			{
				path: '/installation',
				element: <Installation />
			},
			{
				path: '/components/:name',
				element: <Component />
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
