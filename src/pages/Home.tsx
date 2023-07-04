import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import {
	Contact,
	PageEnum,
	initialContact,
} from '../components/ContactList/type';
import { ContactList } from '../components/ContactList/ContactList';
import { AddContact } from '../components/AddContact/AddContact';
import { EditContact } from '../components/EditContact/EditContact';
import { Button } from '../components/Button/Button';

export const Home: React.FunctionComponent = () => {
	const [contactList, setContactList] = useState(initialContact as Contact[]);
	const [shownPage, setShownPage] = useState(PageEnum.isHomePage);
	const [contactToEdit, setContactToEdit] = useState({} as Contact);

	const onGoFormHandler = () => {
		setShownPage(PageEnum.isAddContactPage);
	};

	const onGoToHomePage = () => {
		setShownPage(PageEnum.isHomePage);
	};

	const onAddContactHandler = (data: Contact) => {
		setContactList([...contactList, data]);
		setShownPage(PageEnum.isHomePage);
	};

	const onDeleteContact = (data: Contact) => {
		const newList = contactList.filter((contact) => contact.id !== data.id);
		setContactList(newList);
	};

	const onEditContact = (data: Contact) => {
		setShownPage(PageEnum.isEditContactPage);
		setContactToEdit(data);
	};

	const updateContact = (data: Contact) => {
		const updatedContactList = contactList.map((contact) =>
			contact.id === data.id ? data : contact
		);
		setContactList(updatedContactList);
		onGoToHomePage();
	};

	return (
		<div>
			{shownPage === PageEnum.isHomePage && (
				<>
					<Header heading="Contacts" />
					<Button onClick={onGoFormHandler}>Add contact</Button>
					<ContactList
						contactsList={contactList}
						onDelete={onDeleteContact}
						onEdit={onEditContact}
					/>
				</>
			)}

			{shownPage === PageEnum.isAddContactPage && (
				<AddContact
					onSubmitForm={onAddContactHandler}
					onBackButton={onGoToHomePage}
				/>
			)}

			{shownPage === PageEnum.isEditContactPage && (
				<EditContact
					data={contactToEdit}
					onBackButton={onGoToHomePage}
					onEditContact={updateContact}
				/>
			)}
		</div>
	);
};
