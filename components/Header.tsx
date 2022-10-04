import {
	Box,
	Button,
	Circle,
	Divider,
	Flex,
	Heading,
	HStack,
	Link as ChakraLink,
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
import router, { useRouter } from 'next-translate-routes/router';
import Link from 'next-translate-routes/link';
import React from 'react';
import { routes } from '../constants';
import { Navigation } from './Navigation';
import { translatePath } from 'next-translate-routes';

export const Header = () => {
	const { pathname, locale, query } = useRouter();
	const { t } = useTranslation();
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
						variant="primary"
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
					display="flex"
					height={isMenuOpen ? 'auto' : '0'}
					transform="auto"
					translateX={isMenuOpen ? '0' : '-100%'}
				>
					<UnorderedList
						display="flex"
						flexDirection="column"
						gap="4"
						listStyleType="none"
						ml="0"
						mt="4"
					>
						{renderHamburgerMenuNavigation()}
					</UnorderedList>
				</Box>
			</Show>
		</Box>
	);

	function handleButtonClick() {
		if (locale) router.push(`${translatePath('/reservations', locale)}`);
	}

	function renderHamburgerMenuNavigation() {
		return routes.map((route) => {
			const localizedRoute = route === '/' ? 'home' : route.replace('/', '');
			return (
				<ListItem display="list-item" key={route}>
					<Link href={{ pathname: route, query }} locale={locale} passHref>
						<ChakraLink
							_focus={{ focus: 'none' }}
							fontWeight="bold"
							textTransform="capitalize"
							color={pathname === route ? 'primary' : 'secondary'}
							_hover={{ color: 'primary', textDecoration: 'none' }}
							onClick={setIsMenuOpen.toggle}
							fontSize="2xl"
						>
							{t(`common:${localizedRoute}`)}
						</ChakraLink>
					</Link>
				</ListItem>
			);
		});
	}
};
