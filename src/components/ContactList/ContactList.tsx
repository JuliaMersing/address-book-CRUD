import React from 'react';
import countryList from 'country-list';
import { Contact } from './type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';

interface ContactListProps {
	contactsList: Contact[];
	onDelete: (data: Contact) => void;
	onEdit: (data: Contact) => void;
	onAdd?: () => void;
}

export const ContactList: React.FC<ContactListProps> = ({
	contactsList,
	onDelete,
	onEdit,
	onAdd,
}) => {
	return (
		<>
			<Header heading="Contacts" />
			<Button onClick={onAdd}>Add contact</Button>
			<div className="flex justify-center">
				<table className="w-full max-w-screen-lg my-8">
					<thead>
						<tr className="border-b">
							<th className="py-2 px-4">First Name</th>
							<th className="py-2 px-4">Last Name</th>
							<th className="py-2 px-4">Email</th>
							<th className="py-2 px-4">Country</th>
							<th className="py-2 px-4">Manage Contact</th>
						</tr>
					</thead>
					<tbody>
						{contactsList.map((contact: Contact, index: number) => {
							return (
								<tr key={index} className="border-b">
									<td className="py-2 px-4">{contact.firstName}</td>
									<td className="py-2 px-4">{contact.lastName}</td>
									<td className="py-2 px-4">{contact.email}</td>
									<td className="py-2 px-4">
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
											<FontAwesomeIcon
												icon={faEdit}
												className="action-icon edit-icon text-indigo-600"
												onClick={() => onEdit(contact)}
											/>
											<FontAwesomeIcon
												icon={faTrash}
												className="action-icon delete-icon text-indigo-600"
												onClick={() => onDelete(contact)}
											/>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};
