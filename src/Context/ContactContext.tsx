import React, { useState } from 'react';
import { Contact } from '../components/type/type';
import { get, set } from '../components/services/localStorage';

interface ContactContextProps {
	children: React.ReactNode;
}

export const ContactContext = React.createContext<any>({});

let INITIAL_CONTACTS: Contact[] = JSON.parse(get('contactList', '[]'));

export const ContactProvider: React.FC<ContactContextProps> = ({
	children,
}) => {
	const [contactList, setContactList] = useState<Contact[]>(INITIAL_CONTACTS);

	const storeContacts = (contacts: Contact[]) => {
		setContactList(contacts);
		set('contactList', JSON.stringify(contacts));
	};

	const addContact = (contactData: Contact) => {
		const newContactList = contactList.concat(contactData);
		set('contactList', JSON.stringify(newContactList));
		setContactList(newContactList);
	};

	const deleteContact = (idContact: string) => {
		const updatedContactList = contactList.filter(
			(contact) => contact.id !== idContact
		);
		set('contactList', JSON.stringify(updatedContactList));
		setContactList(updatedContactList);
	};

	const updateContact = (data: Contact) => {
		const updatedContactList = contactList.map((contact) =>
			contact.id === data.id ? data : contact
		);
		setContactList(updatedContactList);
		set('contactList', JSON.stringify(updatedContactList));
	};

	return (
		<ContactContext.Provider
			value={{
				contactList,
				setContactList,
				storeContacts,
				addContact,
				deleteContact,
				updateContact,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};
