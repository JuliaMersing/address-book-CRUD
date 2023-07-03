import React from 'react';
import countryList from 'country-list';
import { Contact } from '../Contact/type';

interface ContactListProps {
	contactsList: Contact[];
	onDelete: (data: Contact) => void;
	onEdit: (data: Contact) => void;
}

export const ContactList: React.FC<ContactListProps> = ({
	contactsList,
	onDelete,
	onEdit,
}) => {
	return (
		<table className="w-full border">
			<thead>
				<tr>
					<th className="py-2 px-4 border-b">First Name</th>
					<th className="py-2 px-4 border-b">Last Name</th>
					<th className="py-2 px-4 border-b">Email</th>
					<th className="py-2 px-4 border-b">Country</th>
					<th className="py-2 px-4 border-b">Manage Contact</th>
				</tr>
			</thead>
			<tbody>
				{contactsList.map((contact: Contact, index: number) => {
					return (
						<tr key={index}>
							<td className="py-2 px-4 border-b">{contact.firstName}</td>
							<td className="py-2 px-4 border-b">{contact.lastName}</td>
							<td className="py-2 px-4 border-b">{contact.email}</td>
							<td className="py-2 px-4 border-b">
								<select
									value={contact.countryCode}
									onChange={(e) => {
										const updatedContacts = [...contactsList];
										updatedContacts[index].countryCode = e.target.value;
									}}
								>
									{countryList.getData().map((country) => (
										<option key={country.code} value={country.code}>
											{country.name}
										</option>
									))}
								</select>
							</td>
							<td className="py-2 px-4 border-b">
								<div className="space-x-4">
									<button onClick={() => onEdit(contact)}>Edit</button>
									<button onClick={() => onDelete(contact)}>Delete</button>
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
