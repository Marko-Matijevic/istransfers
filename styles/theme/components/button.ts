import { ComponentStyleConfig } from '@chakra-ui/react';

export const ButtonStyles: ComponentStyleConfig = {
	// style object for base or default style
	baseStyle: {},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {},
	// styles for different visual variants ("outline", "solid")
	variants: {
		primary: {
			bg: 'primary',
			color: 'white',
			_hover: {
				bg: 'primary-darken',
			},
		},
	},
	// default values for 'size', 'variant' and 'colorScheme'
	defaultProps: {},
};
