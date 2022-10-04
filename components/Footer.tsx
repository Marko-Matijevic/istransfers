import {
	Box,
	Center,
	Divider,
	Flex,
	Grid,
	GridItem,
	HStack,
	Link,
	Text,
	VStack,
} from '@chakra-ui/react';
import {
	faFacebookSquare,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faLocationDot,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import NextLink from 'next/link';

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<Box
			as="footer"
			w="100%"
			backgroundColor="secondary"
			color="white"
			fontWeight="bold"
		>
			<Flex
				direction={{ base: 'column', md: 'row' }}
				maxW="1200px"
				m="0 auto"
				p="30px"
				gap={{ base: 8, md: 0 }}
			>
				<VStack align="start" flexBasis="50%" spacing="5">
					<Text as="h5" textTransform="uppercase" fontWeight="semibold">
						{t('common:contact')}
					</Text>
					<Divider w="100px" variant="primary" />
					<Flex align="center" gap="6">
						<FontAwesomeIcon width="25px" icon={faLocationDot} size="lg" />
						<Box>
							<Text>Baderna 35</Text>
							<Text>52440 Poreč</Text>
						</Box>
					</Flex>
					<Flex align="center" gap="6">
						<FontAwesomeIcon width="25px" icon={faPhone} size="lg" />
						<Box>
							<Link href="tel:00385989970957">00385989970957</Link>
							<Text>Ivan Pilar</Text>
						</Box>
					</Flex>
					<Flex align="center" gap="6">
						<FontAwesomeIcon width="25px" icon={faEnvelope} size="lg" />
						<Box>
							<Text>info@istransfers.com</Text>
							<Text>{t('common:respond_time')}</Text>
						</Box>
					</Flex>
				</VStack>
				<VStack align="start" flexBasis="50%" spacing="6">
					<Text as="h5" textTransform="uppercase" fontWeight="semibold">
						{t('common:social_networks')}
					</Text>
					<Divider w="100px" variant="primary" />
					<Flex gap="5">
						<NextLink href="https://www.facebook.com/istransfers/" passHref>
							<Link
								isExternal
								_hover={{
									color: 'var(--chakra-colors-primary)',
								}}
							>
								<FontAwesomeIcon icon={faFacebookSquare} size="lg" />
							</Link>
						</NextLink>
						<NextLink href="https://www.instagram.com/istransfers/" passHref>
							<Link
								isExternal
								_hover={{
									color: 'var(--chakra-colors-primary)',
								}}
							>
								<FontAwesomeIcon icon={faInstagram} size="lg" />
							</Link>
						</NextLink>
					</Flex>
				</VStack>
			</Flex>
			<Divider borderColor="gray.100" />
			<Center p="8" gap="1">
				<Text>© {new Date().getFullYear()} Istransfers.</Text>
				<Text>{t('common:all_rights_reserved')}</Text>
			</Center>
		</Box>
	);
};
