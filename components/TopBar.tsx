import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Divider,
	Flex,
	Link as ChakraLink,
} from '@chakra-ui/react';
import { useRouter } from 'next-translate-routes/router';
import React from 'react';
import Link from 'next-translate-routes/link';
import useTranslation from 'next-translate/useTranslation';
import { routes } from '../constants';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TopBar = () => {
	const { query, pathname, locales, locale } = useRouter();
	const { t } = useTranslation();

	const renderLocales = () => {
		if (!locales) return null;

		const page = routes.find((route) => pathname === route) ?? '/';

		return locales.map((_locale) => {
			const isCurrentPage = locale === _locale;
			return (
				<BreadcrumbItem key={_locale} isCurrentPage={isCurrentPage}>
					<Link href={{ pathname, query }} locale={_locale} passHref>
						<BreadcrumbLink fontWeight={isCurrentPage ? 'bold' : 'normal'}>
							{t(`common:${_locale}`)}
						</BreadcrumbLink>
					</Link>
				</BreadcrumbItem>
			);
		});
	};

	return (
		<>
			<Flex
				direction={{ base: 'column', lg: 'row' }}
				align="center"
				justify="space-between"
				m="0 auto"
				p="16px 30px"
				maxW="1200px"
			>
				<Flex alignItems="center" gap="2">
					<FontAwesomeIcon icon={faPhoneSquare} />
					<ChakraLink href="tel:00385989970957">00385989970957</ChakraLink>
				</Flex>
				<Breadcrumb>{renderLocales()}</Breadcrumb>
			</Flex>
			<Divider />
		</>
	);
};
