import { Box, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { Locales } from '../enums';
import { ROUTES } from '../constants';
import { Pages } from '../types';
import NextLink from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const NAVIGATION_FIXED_OFFSET = 115;

export const Navigation = () => {
	const { asPath } = useRouter();
	const { t, lang } = useTranslation();
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
		return Object.keys(ROUTES).map((route) => {
			if (route === 'error') return null;

			const localizedPath = ROUTES[route as Pages][lang as Locales];
			return (
				<ListItem key={route}>
					<NextLink href={localizedPath} passHref locale={lang}>
						<Link
							p="24px"
							fontWeight="bold"
							textTransform="capitalize"
							background={asPath === localizedPath ? 'primary' : 'secondary'}
							_hover={{ backgroundColor: 'primary', textDecoration: 'none' }}
						>
							{t(`common:${route}`)}
						</Link>
					</NextLink>
				</ListItem>
			);
		});
	}
};
