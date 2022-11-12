import {
	Box,
	Text,
	Flex,
	Circle,
	Heading,
	UnorderedList,
	useBoolean,
	Link,
	ListItem,
} from '@chakra-ui/react';
import { faCar, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import { ROUTES } from '../../constants';
import { Locales } from '../../enums';
import { Pages } from '../../types';
import NextLink from 'next/link';

export const MobileHeader = () => {
	const { t, lang } = useTranslation();
	const { asPath } = useRouter();

	const [isMenuOpen, setIsMenuOpen] = useBoolean();

	const renderHamburgerMenuNavigation = () => {
		return Object.keys(ROUTES).map((route, index) => {
			if (route === 'error') return null;
			const lastIndex = Object.keys(ROUTES).length;
			const localizedPath = ROUTES[route as Pages][lang as Locales];
			return (
				<ListItem key={localizedPath} pt={index === lastIndex ? 0 : 6}>
					<NextLink href={localizedPath} passHref locale={lang}>
						<Link
							_focus={{ focus: 'none' }}
							fontWeight="bold"
							textTransform="capitalize"
							color={asPath === localizedPath ? 'primary' : 'secondary'}
							_hover={{ color: 'primary', textDecoration: 'none' }}
							onClick={setIsMenuOpen.toggle}
						>
							<Text as="h3" fontSize="2xl">
								{t(`common:${route}`)}
							</Text>
						</Link>
					</NextLink>
				</ListItem>
			);
		});
	};

	return (
		<Box
			as="header"
			position="relative"
			m="0 auto"
			zIndex="2"
			p={{ base: '30px', lg: '30px 30px 0 30px' }}
			maxW="1200px"
			id="header"
			boxShadow={{ base: 'xs', lg: 'none' }}
		>
			<Flex align="center" justify="space-between">
				<Flex align="center" gap="3">
					<Circle bg="primary" size="40px">
						<FontAwesomeIcon icon={faCar} color="white " />
					</Circle>
					<Heading as="h1" fontWeight="medium">
						Istransfers.com
					</Heading>
				</Flex>
				<Box _hover={{ cursor: 'pointer' }}>
					{isMenuOpen ? (
						<FontAwesomeIcon
							icon={faXmark}
							size="2x"
							onClick={setIsMenuOpen.off}
						/>
					) : (
						<FontAwesomeIcon
							icon={faBars}
							size="2x"
							onClick={setIsMenuOpen.on}
						/>
					)}
				</Box>
			</Flex>
			<Box
				as="nav"
				transition="all 200ms ease-in-out"
				height={isMenuOpen ? '300px' : '0'}
				transform="auto"
				translateX={isMenuOpen ? '0' : '-100%'}
			>
				<UnorderedList m="0" listStyleType="none">
					{renderHamburgerMenuNavigation()}
				</UnorderedList>
			</Box>
		</Box>
	);
};
