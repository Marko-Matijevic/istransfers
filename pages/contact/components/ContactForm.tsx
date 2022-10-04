import {
	Button,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Textarea,
	useToast,
	Text,
	Grid,
	GridItem,
	Box,
} from '@chakra-ui/react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
	nameAndSurname: string;
	email: string;
	telephone: number;
	message: string;
}

const ContactForm = () => {
	const { t } = useTranslation();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormData>({
		mode: 'onSubmit',
		defaultValues: {},
	});
	const toast = useToast();

	const onSubmit = (value: ContactFormData) => {
		console.log(value);
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
		<Box w="100%">
			<Flex direction="column" gap="2">
				<Heading as="h3" fontWeight="normal">
					{t('contact:stay_in_touch')}
				</Heading>
				<Divider w="100px" variant="primary" mb="4" />
			</Flex>
			<Text mb="6">{t('contact:section_text_1')}</Text>
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<Grid
					templateRows="repeat(3, 1fr)"
					templateColumns="repeat(1, 1fr)"
					gap="4"
				>
					<GridItem colSpan={1}>
						<FormControl
							w="100%"
							isRequired
							isInvalid={
								errors.nameAndSurname && !!errors.nameAndSurname.message
							}
						>
							<FormLabel htmlFor="nameAndSurname">
								{t('contact:name_and_surname')}
							</FormLabel>
							<Input
								id="nameAndSurname"
								type="text"
								placeholder={t('contact:name_and_surname')}
								variant="outline"
								{...register('nameAndSurname', {
									required: t('common:required_field'),
								})}
							/>
							<FormErrorMessage>
								{errors.nameAndSurname && errors.nameAndSurname.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={1}>
						<FormControl
							isRequired
							isInvalid={errors.email && !!errors.email.message}
						>
							<FormLabel htmlFor="email">{t('contact:email')}</FormLabel>
							<Input
								backgroundColor="#fff"
								color="#000"
								id="email"
								type="email"
								placeholder={t('contact:email')}
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
					<GridItem colSpan={1}>
						<FormControl
							isRequired
							isInvalid={errors.telephone && !!errors.telephone.message}
						>
							<FormLabel htmlFor="telephone">
								{t('contact:telephone')}
							</FormLabel>
							<Input
								variant="outline"
								id="telephone"
								type="tel"
								placeholder={t('contact:telephone')}
								{...register('telephone', {
									required: t('common:required_field'),
								})}
							/>
							<FormErrorMessage>
								{errors.telephone && errors.telephone.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem colSpan={1}>
						<FormControl
							isRequired
							isInvalid={errors.message && !!errors.message.message}
						>
							<FormLabel htmlFor="message">{t('contact:message')}</FormLabel>
							<Textarea
								variant="outline"
								id="message"
								placeholder={t('contact:message')}
								size="lg"
								resize="none"
								h="200px"
								{...register('message', {
									required: t('common:required_field'),
								})}
							/>
							<FormErrorMessage>
								{errors.message && errors.message.message}
							</FormErrorMessage>
						</FormControl>
					</GridItem>
					<GridItem>
						<Button
							type="submit"
							w="200px"
							variant="primary"
							borderRadius="30px"
							isLoading={isSubmitting}
							rightIcon={<FontAwesomeIcon icon={faEnvelope} />}
						>
							{t('contact:send_inquiry')}
						</Button>
					</GridItem>
				</Grid>
			</form>
		</Box>
	);
};

export default ContactForm;
