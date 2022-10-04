import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { InputGroup, Input, useStyleConfig } from '@chakra-ui/react';

import 'react-datepicker/dist/react-datepicker.css';

const customDateInput = ({ value, onClick, onChange }: any, ref: any) => (
	<Input
		autoComplete="off"
		background="#fff"
		color="#000"
		value={value}
		ref={ref}
		onClick={onClick}
		onChange={onChange}
	/>
);
const CustomInput = forwardRef(customDateInput);

interface Props {
	onChange: (date: Date) => any;
	selectedDate: Date | undefined;
	placeholderText: string;
}

export const DatePicker = ({
	selectedDate,
	placeholderText,
	onChange,
}: Props) => {
	const datePickerClasses = useStyleConfig('DatePicker');
	return (
		<InputGroup sx={datePickerClasses}>
			<ReactDatePicker
				dateFormat="dd/MM/yyyy"
				selected={selectedDate}
				placeholderText={placeholderText}
				minDate={new Date()}
				customInput={<CustomInput />}
				onChange={onChange}
			/>
		</InputGroup>
	);
};
