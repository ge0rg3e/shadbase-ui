import { useEffect, useState } from 'react';

const useTheme = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const changeTheme = (theme: 'light' | 'dark') => {
		setTheme(theme);
		localStorage.setItem('theme', theme);

		if (theme === 'dark') {
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
			document.head.style.colorScheme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			document.head.style.colorScheme = 'light';
		}
	};

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme) changeTheme(theme as 'light' | 'dark');
	}, []);

	return { theme, changeTheme };
};

export default useTheme;
