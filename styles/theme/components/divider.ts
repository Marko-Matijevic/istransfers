import { ComponentStyleConfig } from '@chakra-ui/react';

export const DividerStyles: ComponentStyleConfig = {
	// style object for base or default style
	baseStyle: {},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {
		defaultProps: { size: 'md' },
		sizes: {
			lg: { borderBottomWidth: '6px' },
			md: { borderBottomWidth: '4px' },
			sm: { borderBottomWidth: '2px' },
		},
	},
	// styles for different visual variants ("outline", "solid")
	variants: {
		primary: {
			borderColor: 'primary',
			borderStyle: 'solid',
			borderBottomWidth: '2px',
		},
	},
	// default values for 'size', 'variant' and 'colorScheme'
	defaultProps: {},
};
