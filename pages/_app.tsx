import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import theme from '../styles/theme';
import { useRouter } from 'next/router';
import { Pages } from '../types';
import { HEAD_TITLES } from '../constants';
import useTranslation from 'next-translate/useTranslation';
import { Locales } from '../enums';
config.autoAddCss = false;

function Istransfers({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter();
	const { lang } = useTranslation();

	const getPage = () => {
		if (pathname === '/') return 'home';
		if (pathname === '/404' || pathname === '/500') return 'error';

		return pathname.replace('/', '') as Pages;
	};

	const page = getPage();
	const headTitle: string = `${
		HEAD_TITLES[page][lang as Locales]
	} - safe, quick, reliable. Airport transfers, hotels, vip
    transfers`;

	return (
		<>
			<Head>
				{/* <!-- HTML Meta Tags --> */}
				<title>{headTitle}</title>
				<link rel="icon" href="/icons/favicon.ico" />
				<meta
					name="keywords"
					content="VIP transfers, Private transfers, Rent a car with the driver, Airport transfers, Train station transfers, Hotel transfers, Baby chair, Excursions, Professional drivers, Taxi Rovinj, Istria transfers, Rovinj, Events, Excursions"
				></meta>
				<meta
					name="description"
					content="We provide a taxi service to the area of Rovinj and the surrounding area, we are here for you with the Mercedes E class black limousine class. Transfers are done in a luxurious van for the 7-passenger Mercedes V class black."
				></meta>

				{/* <!-- Facebook Meta Tags --> */}
				<meta property="og:url" content="https://www.istransfers.com/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Istransfers - safe, quick, reliable. Airport transfers, hotels, vip transfers"
				/>
				<meta
					property="og:description"
					content="We provide a taxi service to the area of Rovinj and the surrounding area, we are here for you with the Mercedes E class black limousine class. Transfers are done in a luxurious van for the 7-passenger Mercedes V class black."
				/>
				<meta
					property="og:image"
					content="/images/home/slider/slider-img-1.jpg"
				/>

				{/* <!-- Twitter Meta Tags --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="istransfers.com" />
				<meta property="twitter:url" content="https://www.istransfers.com/" />
				<meta
					name="twitter:title"
					content="Istransfers - safe, quick, reliable. Airport transfers, hotels, vip transfers"
				/>
				<meta
					name="twitter:description"
					content="We provide a taxi service to the area of Rovinj and the surrounding area, we are here for you with the Mercedes E class black limousine class. Transfers are done in a luxurious van for the 7-passenger Mercedes V class black."
				/>
				<meta
					name="twitter:image"
					content="/images/home/slider/slider-img-1.jpg"
				/>
			</Head>
			<ChakraProvider resetCSS theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</>
	);
}

export default Istransfers;
