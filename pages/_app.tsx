import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				{/* <!-- HTML Meta Tags --> */}
				<title>
					Istransfers - safe, quick, reliable. Airport transfers, hotels, vip
					transfers
				</title>
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
			<ChakraProvider resetCSS theme={undefined}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
