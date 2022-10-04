import { Box } from '@chakra-ui/react';
import React, { FC, PropsWithChildren } from 'react';
import { Breadcrumb, Footer, Header, Services, TopBar } from '../components';

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<>
			<TopBar />
			<Header />
			<Box as="main">
				<Breadcrumb />
				{children}
				<Services />
			</Box>
			<Footer />
		</>
	);
};
