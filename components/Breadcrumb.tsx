import {
	Breadcrumb as ChakraBreadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Divider,
	Heading,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next-translate-routes/link';
import useTranslation from 'next-translate/useTranslation';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useRouter } from 'next-translate-routes/router';
import { Pages } from '../types';

export const Breadcrumb = () => {
	const { pathname, locale, query } = useRouter();
	const { t } = useTranslation();

	if (pathname === '/') return null;

	const getPage = () => {
		if (pathname === '/404' || pathname === '/500') return 'error';

		return pathname.replace('/', '') as Pages;
	};

	const localizedPage = getPage();

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
				{t(`common:${localizedPage}`)}
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
					<Link href="/" locale={locale} passHref>
						<BreadcrumbLink
							_focus={{ focus: 'none' }}
							textTransform="capitalize"
						>
							{t('common:home')}
						</BreadcrumbLink>
					</Link>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage>
					<Link href={{ pathname, query }} locale={locale} passHref>
						<BreadcrumbLink
							_focus={{ focus: 'none' }}
							textTransform="capitalize"
						>
							{t(`common:${localizedPage}`)}
						</BreadcrumbLink>
					</Link>
				</BreadcrumbItem>
			</ChakraBreadcrumb>
		</VStack>
	);
};
