import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Contact } from '../components/type/type';
import { ContactContext } from '../Context/ContactContext';
import { EditContact } from '../components/EditContact/EditContact';

export const Edit: React.FC = () => {
	const [contactToEdit, setContactToEdit] = useState({} as Contact);
	const { idContact } = useParams();
	const { contactList, updateContact } = useContext(ContactContext);

	useEffect(() => {
		const findContact = contactList.filter(
			(contact: Contact) => contact.id === idContact
		);
		if (findContact.length !== 0) {
			setContactToEdit(findContact[0]);
		}
	}, [idContact, contactList]);

	return <EditContact data={contactToEdit} onEditContact={updateContact} />;
};
