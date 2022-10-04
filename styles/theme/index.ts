import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { ButtonStyles as Button, DividerStyles as Divider } from './components';
const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const breakpoints = {
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px',
	xxl: '1400px',
};

const theme = extendTheme({
	breakpoints,
	config,
	colors: {
		primary: '#b19f6a',
		'primary-darken': '#8d7f54',
		secondary: '#1c1c1c',
		tertiary: '#838383',
	},
	components: {
		Divider,
		Button,
	},
});

export default theme;
