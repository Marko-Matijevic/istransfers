import { Box } from '@chakra-ui/react';
import React, { FC, PropsWithChildren } from 'react';
import { Breadcrumb, Footer, Header, Services, TopBar } from '../components';
import { UserAgent } from 'next-useragent';
interface Props {
	userAgent: UserAgent;
}

export const Layout: FC<PropsWithChildren<Props>> = ({
	children,
	userAgent,
}) => {
	return (
		<>
			<TopBar />
			<Header userAgent={userAgent} />
			<Box as="main">
				<Breadcrumb />
				{children}
				<Services />
			</Box>
			<Footer />
		</>
	);
};
