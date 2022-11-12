import {
	HStack,
	Divider,
	Flex,
	Circle,
	Heading,
	Button,
	Text,
	Box,
} from '@chakra-ui/react';
import {
	faCar,
	faCircleCheck,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import { ROUTES } from '../../constants';
import { Locales } from '../../enums';
import { Navigation } from '../Navigation';

export const DesktopHeader = () => {
	const { t, lang } = useTranslation();
	const router = useRouter();

	const handleButtonClick = () => {
		router.push('/reservations', ROUTES.reservations[lang as Locales], {
			locale: lang,
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
			<HStack
				spacing="4"
				height="55px"
				divider={<Divider orientation="vertical" borderColor="gray.300" />}
				justifyContent="space-between"
				mb="8"
			>
				<Flex align="center" gap="2">
					<Circle bg="primary" size="10">
						<FontAwesomeIcon
							icon={faCar}
							size="lg"
							color="white"
							height="40px"
							width="40px"
						/>
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
		</Box>
	);
};
