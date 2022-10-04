import type { NextPage } from 'next';
import {
	Box,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react';
import Fancybox from '../../components/Fancybox';
import useTranslation from 'next-translate/useTranslation';
import {
	faBuilding,
	faCalendar,
	faGlassMartiniAlt,
	faLifeRing,
	faShoppingBag,
	faTree,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/future/image';
import {
	brijuni,
	groznjan,
	momjan,
	momjanWine,
	motovun,
	motovunWalls,
} from '../../public/images/excursions/istra';
import {
	crkvaSvMarka,
	gardaland,
	plitvickaJezera,
	venecija,
	zagreb,
} from '../../public/images/excursions/other';

const Excursions: NextPage = () => {
	const { t } = useTranslation();
	return (
		<>
			<Box as="section" maxW="1200px" m="0 auto" p="30px">
				<Text mb="4">{t('excursions:section_text_1')}</Text>
				<Text>{t('excursions:section_text_2')}</Text>
				<Heading as="h3" fontWeight="semibold" my="8">
					{t('excursions:istria')}
				</Heading>
				<Text mb="4">{t('excursions:section_text_3')}</Text>
				<Text mb="4">{t('excursions:section_text_4')}</Text>
				<Fancybox options={{ infinite: false }}>
					<SimpleGrid
						columns={[1, 1, 2, 3, 4, 5]}
						spacing="10"
						justifyItems={{ base: 'center', md: 'start' }}
					>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/istra/leading_groznjan.jpeg"
						>
							<Image src={groznjan} alt="Grožnjan" fill placeholder="blur" />
						</Box>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/istra/momjan_wine.jpeg"
						>
							<Image src={momjanWine} alt="Momjan" fill placeholder="blur" />
						</Box>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/istra/momjan.jpeg"
						>
							<Image src={momjan} alt="Momjan" fill placeholder="blur" />
						</Box>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/istra/motovun_istria_walls.jpeg"
						>
							<Image src={motovunWalls} alt="Motovun" fill placeholder="blur" />
						</Box>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/istra/on-motovun.jpeg"
						>
							<Image src={motovun} alt="Motovun" fill placeholder="blur" />
						</Box>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/istra/brijuni.jpeg"
						>
							<Image src={brijuni} alt="Brijuni" fill placeholder="blur" />
						</Box>
					</SimpleGrid>
				</Fancybox>
				<Heading as="h3" fontWeight="semibold" my="8">
					{t('excursions:other_excursions')}
				</Heading>
				<Fancybox options={{ infinite: false }}>
					<SimpleGrid
						columns={[1, 1, 2, 3, 4, 5]}
						spacing="10"
						justifyItems={{ base: 'center', md: 'start' }}
					>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/other/plitvicka_jezera.jpeg"
						>
							<Image
								src={plitvickaJezera}
								alt="Plitvička jezera"
								fill
								placeholder="blur"
							/>
						</Box>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/other/gardaland.jpeg"
						>
							<Image src={gardaland} alt="Gardaland" fill placeholder="blur" />
						</Box>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/other/zagreb.jpeg"
						>
							<Image src={zagreb} alt="Grad Zagreb" fill placeholder="blur" />
						</Box>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/other/crkva_sv_marka.jpeg"
						>
							<Image
								src={crkvaSvMarka}
								alt="Crkva Sv. Marka"
								fill
								placeholder="blur"
							/>
						</Box>
						<Box
							as="a"
							height="200px"
							width="200px"
							position="relative"
							_hover={{ cursor: 'pointer' }}
							data-fancybox="gallery"
							data-src="/images/excursions/other/venecija.jpeg"
						>
							<Image src={venecija} alt="Venecija" fill placeholder="blur" />
						</Box>
					</SimpleGrid>
				</Fancybox>
			</Box>
			<Box as="section" maxW="1200px" m="0 auto" p="30px 30px 0 30px">
				<Divider maxW="100%" m="0 auto" />
				<SimpleGrid
					pb="30px"
					columns={[1, 2, 2, 3]}
					spacing="10"
					justifyItems="start"
				>
					<Flex
						justify={{ base: 'center', sm: 'initial' }}
						h="20"
						w="100%"
						gap="8"
						align="center"
					>
						<Flex w="10" justify="center" align="center">
							<FontAwesomeIcon
								icon={faTree}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('excursions:national_parks')}
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
						<Flex w="10" justify="center" align="center">
							<FontAwesomeIcon
								icon={faBuilding}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('excursions:cities')}
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
						<Flex w="10" justify="center" align="center">
							<FontAwesomeIcon
								icon={faCalendar}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('excursions:events')}
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
						<Flex w="10" justify="center" align="center">
							<FontAwesomeIcon
								icon={faLifeRing}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('excursions:weddings')}
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
						<Flex w="10" justify="center" align="center">
							<FontAwesomeIcon
								icon={faShoppingBag}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack spacing="2" alignItems="flex-start">
							<Text fontSize="xl" fontWeight="light">
								{t('excursions:shopping')}
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
						<Flex w="10" justify="center" align="center">
							<FontAwesomeIcon
								icon={faGlassMartiniAlt}
								size="2x"
								color="var(--chakra-colors-primary)"
							/>
						</Flex>
						<VStack
							spacing="2"
							alignItems={{ base: 'center', sm: 'flex-start' }}
						>
							<Text textAlign="left" fontSize="xl" fontWeight="light">
								{t('excursions:wine_and_olive_oil_tasing')}
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

export default Excursions;
