import {
	Box,
	Link as ChakraLink,
	ListItem,
	UnorderedList,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { routes } from '../constants';
import Link from 'next-translate-routes/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next-translate-routes/router';

const NAVIGATION_FIXED_OFFSET = 115;

export const Navigation = () => {
	const { pathname, query, locale } = useRouter();
	const { t } = useTranslation();
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const headerRef = document.getElementById('header');
		if (!headerRef) return;

		const handleStickyHeader = () => {
			const { top } = headerRef.getBoundingClientRect();
			if (Math.abs(top) > NAVIGATION_FIXED_OFFSET && !isFixed) setIsFixed(true);
			if (Math.abs(top) <= NAVIGATION_FIXED_OFFSET && isFixed)
				setIsFixed(false);
		};

		document.addEventListener('scroll', handleStickyHeader);
		return () => document.removeEventListener('scroll', handleStickyHeader);
	}, [isFixed]);

	return (
		<Box
			as="nav"
			position={isFixed ? 'fixed' : 'relative'}
			top={isFixed ? '0' : 'unset'}
			left={isFixed ? '0' : 'unset'}
			right={isFixed ? '0' : 'unset'}
			zIndex="2"
			maxW={isFixed ? '100%' : '1200px'}
			color="white"
			background="secondary"
		>
			<UnorderedList
				display="flex"
				alignItems="center"
				maxW="1200px"
				h="65px"
				m="0 auto"
				p={isFixed ? '0 30px' : '0'}
				listStyleType="none"
				overflow="hidden"
			>
				{renderRoutes()}
			</UnorderedList>
		</Box>
	);

	function renderRoutes() {
		return routes.map((route) => {
			const localizedRoute = route === '/' ? 'home' : route.replace('/', '');
			return (
				<ListItem key={route}>
					<Link href={{ pathname: route, query }} passHref locale={locale}>
						<ChakraLink
							p="24px"
							fontWeight="bold"
							textTransform="capitalize"
							background={pathname === route ? 'primary' : 'secondary'}
							_hover={{ backgroundColor: 'primary', textDecoration: 'none' }}
						>
							{t(`common:${localizedRoute}`)}
						</ChakraLink>
					</Link>
				</ListItem>
			);
		});
	}
};
