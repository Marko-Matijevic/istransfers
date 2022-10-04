import {
	Container,
	SimpleGrid,
	HStack,
	VStack,
	Divider,
	Flex,
	Box,
	Text,
} from '@chakra-ui/react';
import {
	faWifi,
	faBattery,
	faBaby,
	faStar,
	faThumbsUp,
	faHandPointUp,
	faMale,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

export const Services = () => {
	const { t } = useTranslation();

	return (
		<SimpleGrid
			as="section"
			maxW="1200px"
			m="0 auto"
			p="30px"
			color="secondary"
			columns={[1, 2, 2, 3]}
			spacing="10"
			justifyItems="start"
		>
			<Flex
				justify={{ base: 'center', sm: 'initial' }}
				align="center"
				h="20"
				gap="8"
				w="100%"
			>
				<Box width="40px">
					<FontAwesomeIcon
						icon={faWifi}
						size="2x"
						color="var(--chakra-colors-primary)"
					/>
				</Box>
				<VStack spacing="2" alignItems="flex-start">
					<Text fontSize="xl" fontWeight="light">
						{t('common:free_wifi')}
					</Text>
					<Divider w="50px" variant="primary" />
				</VStack>
			</Flex>
			<Flex
				align="center"
				justify={{ base: 'center', sm: 'initial' }}
				h="20"
				gap="8"
				w="100%"
			>
				<Box width="40px">
					<FontAwesomeIcon
						icon={faBattery}
						size="2x"
						color="var(--chakra-colors-primary)"
					/>
				</Box>
				<VStack spacing="2" alignItems="flex-start">
					<Text fontSize="xl" fontWeight="light">
						{t('common:phone_charger')}
					</Text>
					<Divider w="50px" variant="primary" />
				</VStack>
			</Flex>
			<Flex
				align="center"
				justify={{ base: 'center', sm: 'initial' }}
				h="20"
				gap="8"
				w="100%"
			>
				<Box width="40px">
					<FontAwesomeIcon
						size="2x"
						icon={faBaby}
						color="var(--chakra-colors-primary)"
					/>
				</Box>
				<VStack spacing="2" alignItems="flex-start">
					<Text fontSize="xl" fontWeight="light">
						{t('common:baby_chair')}
					</Text>
					<Divider w="50px" variant="primary" />
				</VStack>
			</Flex>
			<Flex
				align="center"
				justify={{ base: 'center', sm: 'initial' }}
				h="20"
				gap="8"
				w="100%"
			>
				<Flex direction="column" align="center" gap="1" w="40px">
					<FontAwesomeIcon
						icon={faStar}
						size="xs"
						color="var(--chakra-colors-primary)"
					/>
					<FontAwesomeIcon
						icon={faThumbsUp}
						size="2x"
						color="var(--chakra-colors-primary)"
					/>
				</Flex>
				<VStack spacing="2" alignItems="flex-start">
					<Text fontSize="xl" fontWeight="light">
						{t('common:tidines')}
					</Text>
					<Divider w="50px" variant="primary" />
				</VStack>
			</Flex>
			<Flex
				align="center"
				justify={{ base: 'center', sm: 'initial' }}
				h="20"
				gap="8"
				w="100%"
			>
				<Box width="40px">
					<FontAwesomeIcon
						size="2x"
						icon={faHandPointUp}
						color="var(--chakra-colors-primary)"
					/>
				</Box>
				<VStack spacing="2" alignItems="flex-start">
					<Text fontSize="xl" fontWeight="light">
						{t('common:discretion')}
					</Text>
					<Divider w="50px" variant="primary" />
				</VStack>
			</Flex>
			<Flex
				align="center"
				justify={{ base: 'center', sm: 'initial' }}
				h="20"
				gap="8"
				w="100%"
			>
				<Flex gap="2" alignItems="flex-start" w="40px">
					<FontAwesomeIcon
						size="2x"
						icon={faMale}
						color="var(--chakra-colors-primary)"
					/>
					<Text color="primary" fontWeight="bold">
						7
					</Text>
				</Flex>
				<VStack spacing="2" alignItems="flex-start">
					<Text fontSize="xl" fontWeight="light">
						{t('common:max_7_passengers')}
					</Text>
					<Divider w="50px" variant="primary" />
				</VStack>
			</Flex>
		</SimpleGrid>
	);
};
