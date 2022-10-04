import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

import { NextPage } from 'next/types';

const Custom500: NextPage = () => {
	const { t } = useTranslation();
	return (
		<>
			<Box
				as="section"
				maxW="1200px"
				p="60px 30px 0px 30px"
				m="0 auto"
				textAlign="center"
			>
				<Heading as="h3" fontWeight="normal">
					{t('error:title')}
				</Heading>
				<Text pb="60px">{t('error:description')}</Text>
				<Divider maxW="100%" m="0 auto" />
			</Box>
		</>
	);
};

export default Custom500;
