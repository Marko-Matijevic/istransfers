import {
	Box,
	Divider,
	Flex,
	ListItem,
	SimpleGrid,
	Text,
	UnorderedList,
	VStack,
} from '@chakra-ui/react';
import {
	faBuilding,
	faCar,
	faChevronRight,
	faChild,
	faClock,
	faMale,
	faPlane,
	faStar,
	faSubway,
	faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

const Transfers: NextPage = () => {
	const { t } = useTranslation();
	return (
		<>
			<Box as="section" m="0 auto" p="30px 30px 0 30px" maxW="1200px">
				<Text pb="6">{t('transfers:section_text_1')}</Text>
				<UnorderedList listStyleType="none" m="0" pb="6">
					<ListItem>
						<FontAwesomeIcon
							icon={faChevronRight}
							size="xs"
							color="var(--chakra-colors-primary)"
						/>
						<Text as="span"> {t('transfers:rent_a_car_with_driver')}</Text>
					</ListItem>
					<ListItem>
						<FontAwesomeIcon
							icon={faChevronRight}
							size="xs"
							color="var(--chakra-colors-primary)"
						/>
						<Text as="span"> {t('transfers:vip_transfers')}</Text>
					</ListItem>
				</UnorderedList>
				<Text pb="6">{t('transfers:section_text_2')}</Text>
				<Text>{t('transfers:section_text_3')}</Text>
				<Text pb="30px">{t('transfers:section_text_4')}</Text>
				<Divider maxW="100%" m="0 auto" />
			</Box>
			<Box as="section" maxW="1200px" m="0 auto" p="30px 30px 0 30px">
				<SimpleGrid
					color="black"
					columns={[1, 2, 2, 3]}
					spacing="10"
					justifyItems="start"
					pb="30px"
				>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex
							width="40px"
							direction="column"
							justify="center"
							align="center"
						>
							<FontAwesomeIcon
								icon={faCar}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
							<FontAwesomeIcon
								icon={faMale}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('transfers:rent_a_car_with_driver')}
							</Text>
							<Divider w="50px" variant="primary" />
						</VStack>
					</Flex>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex width="40px" justify="center" align="center">
							<FontAwesomeIcon
								icon={faStar}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('transfers:vip_transfers')}
							</Text>
							<Divider w="50px" variant="primary" />
						</VStack>
					</Flex>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex width="40px" justify="center" align="center">
							<FontAwesomeIcon
								icon={faPlane}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('transfers:airport_transfers')}
							</Text>
							<Divider w="50px" variant="primary" />
						</VStack>
					</Flex>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex width="40px" justify="center" align="center">
							<FontAwesomeIcon
								icon={faSubway}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('transfers:train_station_transfers')}
							</Text>
							<Divider w="50px" variant="primary" />
						</VStack>
					</Flex>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex width="40px" justify="center" align="center">
							<FontAwesomeIcon
								icon={faBuilding}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('transfers:hotel_transfers')}
							</Text>
							<Divider w="50px" variant="primary" />
						</VStack>
					</Flex>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex width="40px" justify="center" align="center">
							<FontAwesomeIcon
								icon={faChild}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('transfers:we_care_for_kids')}
							</Text>
							<Divider w="50px" variant="primary" />
						</VStack>
					</Flex>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex width="40px" justify="center" align="center">
							<FontAwesomeIcon
								icon={faSuitcase}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('transfers:we_care_about_your_luggage')}
							</Text>
							<Divider w="50px" variant="primary" />
						</VStack>
					</Flex>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex width="40px" justify="center" align="center" gap="1">
							<FontAwesomeIcon
								icon={faMale}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
							<FontAwesomeIcon
								icon={faClock}
								size="1x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('transfers:waiting_time')}
							</Text>
							<Divider w="50px" variant="primary" />
						</VStack>
					</Flex>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex width="40px" justify="center" align="center">
							<FontAwesomeIcon
								icon={faCar}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('transfers:professional_driver')}
							</Text>
							<Divider w="50px" variant="primary" />
						</VStack>
					</Flex>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex width="40px" justify="center">
							<FontAwesomeIcon
								icon={faClock}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('transfers:available_24_7')}
							</Text>
							<Divider w="50px" variant="primary" />
						</VStack>
					</Flex>
				</SimpleGrid>
				<Divider maxW="100%" m="0 auto" />
			</Box>
		</>
	);
};

export default Transfers;
