import {
	Box,
	Heading,
	Divider,
	Grid,
	FormControl,
	FormLabel,
	GridItem,
	Input,
	FormErrorMessage,
	Select,
	HStack,
	Textarea,
	Button,
	useToast,
} from '@chakra-ui/react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { DatePicker } from '../../../components';

interface ReservationFormData {
	pickUpAddress: string;
	dropOffAddress: string;
	pickUpDate: Date;
	pickUpTimeHours: string;
	pickUpTimeMinutes: string;
	numberOfPassengers: string;
	numberOfBags: string;
	firstName: string;
	lastName: string;
	email: string;
	telephoneNumber: string;
	additionalInformation?: string;
}

export const ReservationForm = () => {
	const { t } = useTranslation();
	const {
		control,
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<ReservationFormData>({
		mode: 'onSubmit',
		defaultValues: {
			additionalInformation: undefined,
			pickUpDate: new Date(),
			pickUpTimeHours: '12am',
			pickUpTimeMinutes: '00',
			numberOfBags: '1',
			numberOfPassengers: '1',
		},
	});
	const toast = useToast();

	const onSubmit = (value: ReservationFormData) => {
		try {
			toast({
				position: 'bottom-left',
				title: t('common:form_success'),
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
		} catch {
			toast({
				position: 'bottom-left',
				title: t('common:form_error'),
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Box bgColor="secondary" p="6" color="white" w="100%">
			<Heading as="h5" mb="2" fontSize="3xl" fontWeight="normal">
				{t('reservations:reserve_your_trip')}
			</Heading>
			<Divider w="100px" variant="primary" mb="4" />
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<Grid
					templateRows={{ base: 'repeat(10, 1fr)', md: 'repeat(8, 1fr)' }}
					templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
					gap="4"
				>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<FormControl
							isRequired
							isInvalid={errors.pickUpAddress && !!errors.pickUpAddress.message}
						>
							<FormLabel htmlFor="pickUpAddress">
								{t('reservations:pick_up_address')}
							</FormLabel>
							<Input
								backgroundColor="#fff"
								color="#000"
								id="pickUpAddress"
								type="text"
								placeholder={t('reservations:pick_up_address')}
								{...register('pickUpAddress', {
									required: t('common:required_field'),
								})}
							/>
							<FormErrorMessage>
								{errors.pickUpAddress && errors.pickUpAddress.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<FormControl
							isRequired
							isInvalid={
								errors.dropOffAddress && !!errors.dropOffAddress.message
							}
						>
							<FormLabel htmlFor="dropOffAddress">
								{t('reservations:drop_off_address')}
							</FormLabel>
							<Input
								backgroundColor="#fff"
								color="#000"
								id="dropOffAddress"
								type="text"
								maxLength={540}
								placeholder={t('reservations:drop_off_address')}
								{...register('dropOffAddress', {
									required: t('common:required_field'),
								})}
							/>
							<FormErrorMessage>
								{errors.dropOffAddress && errors.dropOffAddress.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<FormControl
							isRequired
							isInvalid={errors.pickUpDate && !!errors.pickUpDate.message}
						>
							<FormLabel htmlFor="pickUpDate">
								{t('reservations:pick_up_date')}
							</FormLabel>
							<Controller
								control={control}
								name="pickUpDate"
								render={({ field }) => (
									<DatePicker
										selectedDate={field.value}
										placeholderText="Select date"
										{...register('pickUpDate', {
											required: t('common:required_field'),
										})}
										onChange={(date) => {
											field.onChange(date);
										}}
									/>
								)}
							/>
							<FormErrorMessage>
								{errors.pickUpDate && errors.pickUpDate.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<FormControl
							isRequired
							isInvalid={
								(errors.pickUpTimeHours && !!errors.pickUpTimeHours.message) ||
								(errors.pickUpTimeMinutes && !!errors.pickUpTimeMinutes.message)
							}
						>
							<FormLabel htmlFor="pickUpTimeHours">
								{t('reservations:pick_up_time')}
							</FormLabel>
							<HStack spacing="2">
								<Select
									backgroundColor="#fff"
									color="#000"
									id="pickUpTimeHours"
									{...register('pickUpTimeHours', {
										required: t('common:required_field'),
									})}
								>
									<option value="12am">12 am</option>
									<option value="01am">01 am</option>
									<option value="02am">02 am</option>
									<option value="03am">03 am</option>
									<option value="04am">04 am</option>
									<option value="05am">05 am</option>
									<option value="06am">06 am</option>
									<option value="07am">07 am</option>
									<option value="08am">08 am</option>
									<option value="09am">09 am</option>
									<option value="10am">10 am</option>
									<option value="11am">11 am</option>
									<option value="12pm">12 pm</option>
									<option value="01pm">01 pm</option>
									<option value="02pm">02 pm</option>
									<option value="03pm">03 pm</option>
									<option value="04pm">04 pm</option>
									<option value="05pm">05 pm</option>
									<option value="06pm">06 pm</option>
									<option value="07pm">07 pm</option>
									<option value="08pm">08 pm</option>
									<option value="09pm">09 pm</option>
									<option value="10pm">10 pm</option>
									<option value="11pm">11 pm</option>
								</Select>
								<FormErrorMessage>
									{errors.pickUpTimeHours && errors.pickUpTimeHours.message}
								</FormErrorMessage>
								<Select
									backgroundColor="#fff"
									color="#000"
									id="pickUpTimeMinutes"
									{...register('pickUpTimeMinutes', {
										required: t('common:required_field'),
									})}
								>
									<option value="00">00</option>
									<option value="15">15</option>
									<option value="30">30</option>
									<option value="45">45</option>
								</Select>
								<FormErrorMessage>
									{errors.pickUpTimeMinutes && errors.pickUpTimeMinutes.message}
								</FormErrorMessage>
							</HStack>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<FormControl
							isRequired
							isInvalid={
								errors.numberOfPassengers && !!errors.numberOfPassengers.message
							}
						>
							<FormLabel htmlFor="numberOfPassengers">
								{t('reservations:number_of_passengers')}
							</FormLabel>
							<Select
								backgroundColor="#fff"
								color="#000"
								id="numberOfPassengers"
								{...register('numberOfPassengers', {
									required: t('common:required_field'),
								})}
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="7+">7+</option>
							</Select>
							<FormErrorMessage>
								{errors.numberOfPassengers && errors.numberOfPassengers.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<FormControl
							isRequired
							isInvalid={errors.numberOfBags && !!errors.numberOfBags.message}
						>
							<FormLabel htmlFor="numberOfBags">
								{t('reservations:number_of_bags')}
							</FormLabel>
							<Select
								backgroundColor="#fff"
								color="#000"
								id="numberOfBags"
								{...register('numberOfBags', {
									required: t('common:required_field'),
								})}
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="7+">7+</option>
							</Select>
							<FormErrorMessage>
								{errors.numberOfBags && errors.numberOfBags.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<FormControl
							isRequired
							isInvalid={errors.firstName && !!errors.firstName.message}
						>
							<FormLabel htmlFor="firstName">
								{t('reservations:first_name')}
							</FormLabel>
							<Input
								backgroundColor="#fff"
								color="#000"
								id="firstName"
								type="text"
								placeholder={t('reservations:first_name')}
								maxLength={100}
								{...register('firstName', {
									required: t('common:required_field'),
								})}
							/>
							<FormErrorMessage>
								{errors.firstName && errors.firstName.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<FormControl
							isRequired
							isInvalid={errors.lastName && !!errors.lastName.message}
						>
							<FormLabel htmlFor="lastName">
								{t('reservations:last_name')}
							</FormLabel>
							<Input
								backgroundColor="#fff"
								color="#000"
								id="lastName"
								type="text"
								placeholder={t('reservations:last_name')}
								maxLength={100}
								{...register('lastName', {
									required: t('common:required_field'),
								})}
							/>
							<FormErrorMessage>
								{errors.lastName && errors.lastName.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<FormControl
							isRequired
							isInvalid={errors.email && !!errors.email.message}
						>
							<FormLabel htmlFor="email">
								{t('reservations:email_address')}
							</FormLabel>
							<Input
								backgroundColor="#fff"
								color="#000"
								id="email"
								type="email"
								placeholder={t('reservations:email_address')}
								{...register('email', {
									required: t('common:required_field'),
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: t('common:invalid_email'),
									},
								})}
							/>
							<FormErrorMessage>
								{errors.email && errors.email.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<FormControl
							isRequired
							isInvalid={
								errors.telephoneNumber && !!errors.telephoneNumber.message
							}
						>
							<FormLabel htmlFor="telephoneNumber">
								{t('reservations:telephone_number')}
							</FormLabel>
							<Input
								backgroundColor="#fff"
								color="#000"
								id="telephoneNumber"
								type="tel"
								placeholder={t('reservations:telephone_number')}
								{...register('telephoneNumber', {
									required: t('common:required_field'),
								})}
							/>
							<FormErrorMessage>
								{errors.telephoneNumber && errors.telephoneNumber.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={2} rowSpan={{ base: 2, md: 4 }}>
						<FormControl>
							<FormLabel htmlFor="additionalInformation">
								{t('reservations:additional_information')}
							</FormLabel>
							<Textarea
								backgroundColor="#fff"
								color="#000"
								id="additionalInformation"
								placeholder={t('reservations:additional_information')}
								size="lg"
								maxLength={3000}
								height="200px"
								resize="none"
								{...register('additionalInformation')}
							/>
						</FormControl>
					</GridItem>
					<GridItem colSpan={{ base: 2, md: 1 }}>
						<Button
							color="white"
							w="200px"
							borderRadius="30px"
							variant="primary"
							rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
							isLoading={isSubmitting}
							type="submit"
						>
							{t('reservations:send_inquiry')}
						</Button>
					</GridItem>
				</Grid>
			</form>
		</Box>
	);
};
