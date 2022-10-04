import { Box, SimpleGrid, Divider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { ContactInfo } from '../../components';
import { ContactForm } from './components';

const Contact: NextPage = () => {
	const { t } = useTranslation();
	return (
		<Box as="section" maxW="1200px" margin="0 auto" p="30px">
			<SimpleGrid w="100%" columns={{ base: 1, md: 2 }} spacing="10" pb="10">
				<ContactForm />
				<ContactInfo />
			</SimpleGrid>
			<Divider w="100%" m="0 auto" />
		</Box>
	);
};

export default Contact;
