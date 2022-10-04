import {
	Box,
	Button,
	Circle,
	Divider,
	Flex,
	Heading,
	Hide,
	HStack,
	Link,
	ListItem,
	Show,
	Text,
	UnorderedList,
	useBoolean,
} from '@chakra-ui/react';
import {
	faBars,
	faCar,
	faChevronRight,
	faCircleCheck,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import router, { useRouter } from 'next/router';
import NextLink from 'next/link';
import React from 'react';
import { Locales } from '../enums';
import { ROUTES } from '../constants';
import { Pages } from '../types';
import { Navigation } from './Navigation';

export const Header = () => {
	const { asPath } = useRouter();
	const { lang, t } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useBoolean();

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
			{/* -- Header -- */}
			<Show above="lg">
				<HStack
					spacing="4"
					height="55px"
					divider={<Divider orientation="vertical" borderColor="gray.300" />}
					justifyContent="space-between"
					mb="8"
				>
					<Flex align="center" gap="2">
						<Circle bg="primary" size="10">
							<FontAwesomeIcon icon={faCar} color="white" height="25px" />
						</Circle>
						<Heading as="h1" fontWeight="medium">
							Istransfers.com
						</Heading>
					</Flex>
					<Flex align="center" gap="2">
						<FontAwesomeIcon
							icon={faCircleCheck}
							height="20px"
							color="var(--chakra-colors-primary)"
						/>
						<Text fontWeight="semibold">{t('common:safe')}</Text>
					</Flex>
					<Flex align="center" gap="2">
						<FontAwesomeIcon
							icon={faCircleCheck}
							height="20px"
							color="var(--chakra-colors-primary)"
						/>
						<Text fontWeight="semibold">{t('common:quick')}</Text>
					</Flex>
					<Flex align="center" gap="2">
						<FontAwesomeIcon
							icon={faCircleCheck}
							height="20px"
							color="var(--chakra-colors-primary)"
						/>
						<Text fontWeight="semibold">{t('common:reliable')}</Text>
					</Flex>
					<Button
						minW="200px"
						py="3"
						borderRadius="30px"
						bg="primary"
						color="white"
						rightIcon={<FontAwesomeIcon icon={faChevronRight} color="white" />}
						onClick={handleButtonClick}
					>
						{t('common:reserve_your_trip')}
					</Button>
				</HStack>
				<Navigation />
			</Show>
			{/* -- Responsive header -- */}
			<Show below="lg">
				<Flex align="center" justify="space-between">
					<Flex align="center" gap="3">
						<Circle bg="primary" size="60px">
							<FontAwesomeIcon icon={faCar} height="25px" color="white " />
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
					height={isMenuOpen ? '420px' : '0'}
					transform="auto"
					translateX={isMenuOpen ? '0' : '-100%'}
				>
					<UnorderedList listStyleType="none">
						{renderHamburgerMenuNavigation()}
					</UnorderedList>
				</Box>
			</Show>
		</Box>
	);

	function handleButtonClick() {
		router.push('/reservations', ROUTES.reservations[lang as Locales], {
			locale: lang,
		});
	}

	function renderHamburgerMenuNavigation() {
		return Object.keys(ROUTES).map((route) => {
			const localizedPath = ROUTES[route as Pages][lang as Locales];
			return (
				<ListItem key={localizedPath}>
					<NextLink href={localizedPath} passHref locale={lang}>
						<Link
							p="6"
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
	}
};
