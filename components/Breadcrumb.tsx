import {
	Breadcrumb as ChakraBreadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Divider,
	Heading,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ROUTES } from '../constants';
import { Pages } from '../types';
import { Locales } from '../enums';
import { useRouter } from 'next/router';

export const Breadcrumb = () => {
	const { t, lang } = useTranslation();
	const { pathname } = useRouter();

	if (pathname === '/') return null;

	const page = getPage();
	const localizedPath = ROUTES[page as Pages][lang as Locales];

	return (
		<VStack
			as="section"
			align="center"
			w="100%"
			py="10"
			m="0 auto"
			bgImage="url('/images/driver-image-gray.jpg')"
		>
			<Heading as="h4" fontWeight="semibold" textTransform="capitalize">
				{t(`common:${page}`)}
			</Heading>
			<Divider w="75px" variant="primary" />
			<ChakraBreadcrumb
				spacing="8px"
				separator={
					<FontAwesomeIcon
						icon={faChevronRight}
						size="xs"
						color="var(--chakra-colors-gray.600)"
					/>
				}
			>
				<BreadcrumbItem>
					<NextLink href="/" passHref>
						<BreadcrumbLink
							_focus={{ focus: 'none' }}
							textTransform="capitalize"
						>
							{t('common:home')}
						</BreadcrumbLink>
					</NextLink>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage>
					<NextLink href={localizedPath} passHref>
						<BreadcrumbLink
							_focus={{ focus: 'none' }}
							textTransform="capitalize"
						>
							{t(`common:${page}`)}
						</BreadcrumbLink>
					</NextLink>
				</BreadcrumbItem>
			</ChakraBreadcrumb>
		</VStack>
	);

	function getPage() {
		if (pathname === '/') return 'home';
		if (pathname === '/404') return 'error';

		return pathname.replace('/', '') as Pages;
	}
};
