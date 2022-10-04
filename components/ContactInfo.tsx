import {
	VStack,
	Heading,
	Divider,
	HStack,
	Link as ChakraLink,
	Box,
	Flex,
	StackDivider,
	Text,
} from '@chakra-ui/react';
import {
	faFacebookSquare,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
	faLocationDot,
	faPhone,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Link from 'next-translate-routes/link';

export const ContactInfo = () => {
	const { t } = useTranslation();

	return (
		<Box as="aside" w="100%">
			<VStack
				align="start"
				w="100%"
				mb="10"
				spacing="4"
				divider={<StackDivider />}
			>
				<Flex direction="column" gap="2">
					<Heading as="h5" fontSize="3xl" fontWeight="normal">
						{t('common:contacts')}
					</Heading>
					<Divider w="100px" variant="primary" />
				</Flex>
				<Flex gap="5" align="center">
					<Box w="25px">
						<FontAwesomeIcon
							icon={faLocationDot}
							color="var(--chakra-colors-primary)"
							size="lg"
						/>
					</Box>
					<Box>
						<Text>Baderna 35</Text>
						<Text>52440 Poreč</Text>
					</Box>
				</Flex>
				<Flex gap="5" align="center">
					<Box w="25px">
						<FontAwesomeIcon
							icon={faPhone}
							color="var(--chakra-colors-primary)"
							size="lg"
						/>
					</Box>
					<Box>
						<ChakraLink href="tel:00385989970957">00385989970957</ChakraLink>
						<Text color="tertiary">Ivan Pilar</Text>
					</Box>
				</Flex>
				<Flex gap="5" align="center">
					<Box w="25px">
						<FontAwesomeIcon
							icon={faEnvelope}
							color="var(--chakra-colors-primary)"
							size="lg"
						/>
					</Box>
					<Box>
						<Text>info@istransfers.com</Text>
						<Text color="tertiary">{t('common:respond_time')}</Text>
					</Box>
				</Flex>
			</VStack>
			<Box>
				<Heading as="h5" mb="2" fontSize="3xl" fontWeight="normal">
					{t('common:social_networks')}
				</Heading>
				<Divider w="100px" variant="primary" />
				<HStack spacing="5" pt="20px">
					<Link href="https://www.facebook.com/istransfers/" passHref>
						<ChakraLink isExternal>
							<FontAwesomeIcon
								icon={faFacebookSquare}
								size="lg"
								color="var(--chakra-colors-primary)"
							/>
						</ChakraLink>
					</Link>
					<Link href="https://www.instagram.com/istransfers/" passHref>
						<ChakraLink isExternal>
							<FontAwesomeIcon
								icon={faInstagram}
								size="lg"
								color="var(--chakra-colors-primary)"
							/>
						</ChakraLink>
					</Link>
				</HStack>
			</Box>
		</Box>
	);
};
