import { Box, SimpleGrid, Divider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ContactInfo } from '../../components';
import ContactForm from './components/ContactForm';

const Contact: NextPage = () => {
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
