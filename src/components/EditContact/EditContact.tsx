import { useState } from 'react';
import { Contact } from '../type/type';
import { Header } from '../Header/Header';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import countryList from 'country-list';

interface EditContactProps {
	data: Contact;
	onEditContact: (data: Contact) => void;
}

export const EditContact: React.FunctionComponent<EditContactProps> = ({
	data,
	onEditContact,
}) => {
	const [firstName, setFirstName] = useState(data.firstName);
	const [lastName, setLastName] = useState(data.lastName);
	const [email, setEmail] = useState(data.email);
	const [country, setCountry] = useState(data.countryCode);

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		switch (name) {
			case 'firstName':
				setFirstName(value);
				break;
			case 'lastName':
				setLastName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'country':
				setCountry(value);
				break;
			default:
				break;
		}
	};

	const onSubmitContact = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const updatedData: Contact = {
			id: data.id,
			firstName,
			lastName,
			email,
			countryCode: country,
		};

		onEditContact(updatedData);
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
					heading="Edit contact"
					href="/"
					linkParagraph="Go back to address book"
				/>
				<form onSubmit={onSubmitContact}>
					<Input
						type="text"
						name="firstName"
						value={firstName}
						placeholder="First Name"
						onChange={handleChange}
						className="input"
					/>
					<Input
						type="text"
						name="lastName"
						value={lastName}
						placeholder="Last Name"
						onChange={handleChange}
						className="input"
					/>
					<Input
						type="email"
						name="email"
						value={email}
						placeholder="Email"
						onChange={handleChange}
						className="input"
					/>
					<select
						id="country"
						name="country"
						value={country}
						onChange={handleChange}
						className="input"
					>
						{countryOptions}
					</select>
					<Button>Update contact</Button>
				</form>
			</div>
		</div>
	);
};
