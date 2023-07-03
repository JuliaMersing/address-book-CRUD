import { useState } from 'react';
import { Contact } from '../ContactList/type';
import { Header } from '../Header/Header';
import countryList from 'country-list';

interface EditContactProps {
	data: Contact;
	onBackButton: () => void;
	onEditContact: (data: Contact) => void;
}

export const EditContact: React.FunctionComponent<EditContactProps> = ({
	data,
	onBackButton,
	onEditContact,
}) => {
	const [firstName, setFirstName] = useState(data.firstName);
	const [lastName, setLastName] = useState(data.lastName);
	const [email, setEmail] = useState(data.email);
	const [country, setCountry] = useState(data.countryCode);

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
		const updatedData: Contact = {
			id: data.id,
			firstName: firstName,
			lastName: lastName,
			email: email,
			countryCode: country,
		};
		onEditContact(updatedData);
		onBackButton();
	};

	return (
		<div>
			<Header
				heading="Edit contact"
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
				<button type="submit">Update contact</button>
			</form>
		</div>
	);
};
