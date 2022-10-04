import { Box, Divider, SimpleGrid, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ContactInfo } from '../../components';
import { ReservationForm } from './components';

const Reservations: NextPage = () => {
	return (
		<Box as="section" maxW="1200px" p="30px" m="0 auto">
			<Stack direction={{ base: 'column', lg: 'row' }} gap="10" mb="6">
				<ReservationForm />
				<ContactInfo />
			</Stack>
			<Divider w="100%" m="0 auto" />
		</Box>
	);
};

export default Reservations;
