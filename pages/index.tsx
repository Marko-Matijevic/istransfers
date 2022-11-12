import {
	Box,
	Divider,
	Flex,
	Heading,
	VStack,
	Text,
	Button,
	HStack,
	Link,
	Stack,
} from '@chakra-ui/react';

import type { NextPage } from 'next';
import Image from 'next/future/image';
import NextLink from 'next/link';

import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
	sliderImgOne,
	sliderImgTwo,
	sliderImgThree,
	sliderImgFour,
	istransfersCar,
} from '../public/images/home';
import useTranslation from 'next-translate/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home: NextPage = () => {
	const { t } = useTranslation();

	return (
		<>
			<Box
				as="section"
				w="100%"
				sx={{
					'.swiper': {
						'--swiper-navigation-color': '#fff',
					},
				}}
			>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					navigation={true}
					autoplay={{ delay: 5000 }}
					modules={[Autoplay, Navigation]}
				>
					<SwiperSlide>
						<Box maxHeight="650px" width="100%">
							<Image
								alt="Mercedes van front picture"
								src={sliderImgOne}
								placeholder="blur"
								priority
								style={{ minWidth: '100%' }}
							/>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						<Box maxHeight="650px" width="100%">
							<Image
								placeholder="blur"
								src={sliderImgTwo}
								alt="Mercedes van back picture"
								width="100%"
								height="100%"
								style={{ minWidth: '100%' }}
							/>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						<Box maxHeight="650px" width="100%">
							<Image
								placeholder="blur"
								src={sliderImgThree}
								alt="Mercedes van top picture"
								width="100%"
								height="100%"
								style={{ minWidth: '100%' }}
							/>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						<Box maxHeight="650px" width="100%">
							<Image
								placeholder="blur"
								src={sliderImgFour}
								alt="Mercedes van interior"
								width="100%"
								height="100%"
								style={{ minWidth: '100%' }}
							/>
						</Box>
					</SwiperSlide>
				</Swiper>
			</Box>
			<Flex
				as="section"
				align="center"
				maxW="1200px"
				m="0 auto"
				p="30px"
				gap="8"
			>
				<VStack w={{ base: '100%', md: '50%' }} spacing="6" align="start">
					<Heading as="h3" fontWeight="semibold">
						Istransfers
					</Heading>
					<Divider w="100px" variant="primary" />
					<Text>{t('home:section_text_1')}</Text>
					<Text>{t('home:section_text_2')}</Text>
				</VStack>
				<Box display={{ base: 'none', md: 'flex' }} w="50%">
					<Image src={istransfersCar} alt="Mercedes auto" />
				</Box>
			</Flex>
			<VStack
				as="section"
				color="white"
				w="100%"
				bgImage="url('/images/home/driver-image.jpg')"
				p="80px 16px"
				spacing="6"
			>
				<Heading as="h3">
					<Text align="center" fontWeight="normal">
						{t('home:get_in_touch_with_us')}
						{t('home:travel_in_style')}
					</Text>
				</Heading>
				<Divider w="100px" variant="primary" />
				<Stack
					direction={{ base: 'column', sm: 'row' }}
					spacing="5"
					align="center"
				>
					<Link href="tel:00385989970957">
						<Button
							color="white"
							w="150px"
							borderRadius="30px"
							variant="primary"
							rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
						>
							{t('home:call_us')}
						</Button>
					</Link>
					<NextLink href="/reservations" passHref>
						<Button
							as="a"
							color="white"
							w="200px"
							borderRadius="30px"
							variant="primary"
							rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
						>
							{t('home:check_availability')}
						</Button>
					</NextLink>
				</Stack>
			</VStack>
		</>
	);
};

export default Home;
