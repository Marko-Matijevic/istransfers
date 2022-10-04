import { ComponentStyleConfig } from '@chakra-ui/react';

export const SelectStyles: ComponentStyleConfig = {
	baseStyle: {},
	sizes: {},
	variants: {
		primary: {
			field: {
				backgroundColor: '#ffffff',
				color: '#000000',
			},
			icon: {
				color: '#000000',
			},
		},
	},
	defaultProps: {
		variant: 'primary',
	},
};
