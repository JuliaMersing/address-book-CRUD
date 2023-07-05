import React, { useEffect, useState } from 'react';
import { Contact } from '../components/type/type';
import { get, set } from '../components/services/localStorage';
import { ContactList } from '../components/ContactList/ContactList';
import { EditContact } from '../components/EditContact/EditContact';

export const Home: React.FunctionComponent = () => {
	const [contactList, setContactList] = useState([] as Contact[]);
	const [contactToEdit, setContactToEdit] = useState({} as Contact);
	const [isHomePage, setIsHomePage] = useState(true);

	useEffect(() => {
		const contactStored = get('UpdateContactList', '[]');
		if (contactStored) {
			storedContacts(JSON.parse(contactStored));
		}
	}, []);

	const storedContacts = (listStorage: Contact[]) => {
		setContactList(listStorage);
		set('UpdateContactList', JSON.stringify(listStorage));
	};

	const handleDeleteContact = (data: Contact) => {
		const newList = contactList.filter((contact) => contact.id !== data.id);
		storedContacts(newList);
	};

	const handleEditContact = (data: Contact) => {
		setIsHomePage(false);
		setContactToEdit(data);
	};

	const updateContact = (data: Contact) => {
		const updatedContactList = contactList.map((contact) =>
			contact.id === data.id ? data : contact
		);
		storedContacts(updatedContactList);
		setIsHomePage(true);
	};

	return (
		<>
			{isHomePage ? (
				<ContactList
					contactsList={contactList}
					onDelete={handleDeleteContact}
					onEdit={handleEditContact}
				/>
			) : (
				<EditContact data={contactToEdit} onEditContact={updateContact} />
			)}
		</>
	);
};
