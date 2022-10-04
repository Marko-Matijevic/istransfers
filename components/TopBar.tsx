import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Divider,
	Flex,
	Link,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import NextLink from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Locales } from '../enums';
import { ROUTES } from '../constants';
import { Pages } from '../types';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TopBar = () => {
	const router = useRouter();
	const { t, lang } = useTranslation();

	const getPage = () => {
		if (router.pathname === '/') return 'home';
		if (router.pathname === '/404') return 'error';

		return router.pathname.replace('/', '') as Pages;
	};

	const page = getPage();

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
					<Link href="tel:00385989970957">00385989970957</Link>
				</Flex>
				<Breadcrumb>
					<BreadcrumbItem isCurrentPage={lang === Locales.EN_GB}>
						<NextLink
							href={ROUTES[page][Locales.EN_GB]}
							locale={Locales.EN_GB}
							passHref
						>
							<BreadcrumbLink
								fontWeight={lang === Locales.EN_GB ? 'bold' : 'normal'}
							>
								{t('common:english')}
							</BreadcrumbLink>
						</NextLink>
					</BreadcrumbItem>
					<BreadcrumbItem isCurrentPage={lang === Locales.HR}>
						<NextLink
							href={ROUTES[page][Locales.HR]}
							locale={Locales.HR}
							passHref
						>
							<BreadcrumbLink
								fontWeight={lang === Locales.HR ? 'bold' : 'normal'}
							>
								{t('common:croatian')}
							</BreadcrumbLink>
						</NextLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Flex>
			<Divider />
		</>
	);
};
