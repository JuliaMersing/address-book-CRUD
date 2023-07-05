import React, { useEffect, useState } from 'react';
import { Contact, PageEnum } from '../type/type';
import { ContactList } from '../ContactList/ContactList';
import { AddContact } from '../AddContact/AddContact';
import { EditContact } from '../EditContact/EditContact';
import { get, set } from '../services/localStorage';

export const Home: React.FunctionComponent = () => {
	const [contactList, setContactList] = useState([] as Contact[]);
	const [shownPage, setShownPage] = useState(PageEnum.isHomePage);
	const [contactToEdit, setContactToEdit] = useState({} as Contact);

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

	const handleGoAddContact = () => {
		setShownPage(PageEnum.isAddContactPage);
	};

	const handleGoHome = () => {
		setShownPage(PageEnum.isHomePage);
	};

	const handleAddContact = (data: Contact) => {
		storedContacts([...contactList, data]);
		setShownPage(PageEnum.isHomePage);
	};

	const handleDeleteContact = (data: Contact) => {
		const newList = contactList.filter((contact) => contact.id !== data.id);
		storedContacts(newList);
	};

	const handleEditContact = (data: Contact) => {
		setShownPage(PageEnum.isEditContactPage);
		setContactToEdit(data);
	};

	const updateContact = (data: Contact) => {
		const updatedContactList = contactList.map((contact) =>
			contact.id === data.id ? data : contact
		);
		storedContacts(updatedContactList);
		handleGoHome();
	};

	return (
		<div>
			{shownPage === PageEnum.isHomePage && (
				<ContactList
					contactsList={contactList}
					onDelete={handleDeleteContact}
					onEdit={handleEditContact}
					onAdd={handleGoAddContact}
				/>
			)}

			{shownPage === PageEnum.isAddContactPage && (
				<AddContact
					onSubmitForm={handleAddContact}
					onBackButton={handleGoHome}
				/>
			)}

			{shownPage === PageEnum.isEditContactPage && (
				<EditContact
					data={contactToEdit}
					onBackButton={handleGoHome}
					onEditContact={updateContact}
				/>
			)}
		</div>
	);
};
