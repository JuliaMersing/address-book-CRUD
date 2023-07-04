import React, { useState } from 'react';
import countryList from 'country-list';
import { Header } from '../Header/Header';
import { Contact } from '../ContactList/type';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import {
	verifyCountry,
	verifyEmail,
	verifyFirstName,
	verifyLastName,
} from '../utils/validations';

interface AddContactProps {
	onBackButton: () => void;
	onSubmitForm: (data: Contact) => void;
}

export const AddContact: React.FC<AddContactProps> = ({
	onBackButton,
	onSubmitForm,
}) => {
	const [formData, setFormData] = useState<Contact>({
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		countryCode: '',
	});

	const [formErrors, setFormErrors] = useState<{
		firstName: string;
		lastName: string;
		email: string;
		country: string;
	}>({
		firstName: '',
		lastName: '',
		email: '',
		country: '',
	});

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		setFormErrors((prevErrors) => ({
			...prevErrors,
			[name]: '',
		}));
	};

	const handleBlur = (event: any) => {
		const { name, value } = event.target;
		let error = '';

		switch (name) {
			case 'firstName':
				error = verifyFirstName(value);
				break;
			case 'lastName':
				error = verifyLastName(value);
				break;
			case 'email':
				error = verifyEmail(value);
				break;
			case 'country':
				error = verifyCountry(value);
				break;
			default:
				break;
		}

		setFormErrors((prevErrors) => ({
			...prevErrors,
			[name]: error,
		}));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data: Contact = {
			...formData,
			id: new Date().toJSON().toString(),
		};
		onSubmitForm(data);
		onBackButton();
	};

	const countryOptions = countryList.getData().map((country) => (
		<option key={country.code} value={country.code}>
			{country.name}
		</option>
	));

	return (
		<div className="container-app">
			<div className="container-form">
				<Header
					heading="Add new contact"
					href="/"
					linkParagraph="Go back to address book"
				/>
				<form onSubmit={handleSubmit}>
					<Input
						type="text"
						name="firstName"
						value={formData.firstName}
						placeholder="First Name"
						onChange={handleChange}
						onBlur={handleBlur}
						error={formErrors.firstName}
						className={formErrors.firstName !== '' ? 'input-error' : 'input'}
					/>

					<Input
						type="text"
						name="lastName"
						value={formData.lastName}
						placeholder="Last Name"
						onChange={handleChange}
						onBlur={handleBlur}
						error={formErrors.lastName}
						className={formErrors.lastName !== '' ? 'input-error' : 'input'}
					/>

					<Input
						type="email"
						name="email"
						value={formData.email}
						placeholder="Email"
						onChange={handleChange}
						onBlur={handleBlur}
						error={formErrors.email}
						className={formErrors.email !== '' ? 'input-error' : 'input'}
					/>
					<Input
						id="country"
						type="text"
						name="country"
						value={formData.countryCode}
						onChange={handleChange}
						onBlur={handleBlur}
						options={countryOptions}
						placeholder="Select Country"
						error={formErrors.country}
						className={formErrors.country !== '' ? 'input-error' : 'input'}
					/>
					<Button>Add Contact</Button>
				</form>
			</div>
		</div>
	);
};
