import React, { useState } from 'react';
import countryList from 'country-list';
import { Header } from '../Header/Header';
import { Contact } from '../Contact/type';

interface AddContactProps {
	onBackButton: () => void;
	onSubmitForm: (data: Contact) => void;
}

export const AddContact: React.FC<AddContactProps> = ({
	onBackButton,
	onSubmitForm,
}) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [country, setCountry] = useState('');

	const handleChangeFirstName = (event: any) => {
		setFirstName(event.target.value);
	};

	const handleChangeLastName = (event: any) => {
		setLastName(event.target.value);
	};

	const handleChangeEmail = (event: any) => {
		setEmail(event.target.value);
	};

	const handleChangeCountry = (event: any) => {
		setCountry(event.target.value);
	};

	const onSubmitContact = (event: any) => {
		event.preventDefault();
		const data: Contact = {
			id: new Date().toJSON().toString(),
			firstName: firstName,
			lastName: lastName,
			email: email,
			countryCode: country,
		};
		onSubmitForm(data);
		onBackButton();
	};

	return (
		<div>
			<Header
				heading="Add new contact"
				href="/"
				linkParagraph="Go back to address book"
			/>
			<form onSubmit={onSubmitContact}>
				<div>
					<label htmlFor="firstName">First Name:</label>
					<input
						type="text"
						value={firstName}
						placeholder="First Name"
						onChange={handleChangeFirstName}
					/>
				</div>
				<div>
					<label htmlFor="lastName">Last Name:</label>
					<input
						type="text"
						value={lastName}
						placeholder="Last Name"
						onChange={handleChangeLastName}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						value={email}
						placeholder="Email"
						onChange={handleChangeEmail}
					/>
				</div>
				<div>
					<label htmlFor="countryCode">Country:</label>
					<select
						id="countryCode"
						value={country}
						onChange={handleChangeCountry}
					>
						<option value="">Select country</option>
						{countryList.getData().map((country) => (
							<option key={country.code} value={country.code}>
								{country.name}
							</option>
						))}
					</select>
				</div>
				<button type="submit">Add contact</button>
			</form>
		</div>
	);
};
