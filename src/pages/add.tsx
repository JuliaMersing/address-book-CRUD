import React, { useState, useEffect } from 'react';
import { Contact } from '../components/type/type';
import { AddContact } from '../components/AddContact/AddContact';
import { get, set } from '../components/services/localStorage';
import { useNavigate } from 'react-router-dom';

export const Add: React.FC = () => {
	const [contactList, setContactList] = useState([] as Contact[]);
	const navigate = useNavigate();

	useEffect(() => {
		const contactStored = get('UpdateContactList', '[]');
		if (contactStored) {
			const parsedContacts = JSON.parse(contactStored);
			setContactList(parsedContacts);
		}
	}, []);

	const storedContacts = (listStorage: Contact[]) => {
		setContactList(listStorage);
		set('UpdateContactList', JSON.stringify(listStorage));
	};

	const handleAddContact = (data: Contact) => {
		storedContacts([...contactList, data]);
		navigate('/');
	};

	return <AddContact onSubmitForm={handleAddContact} />;
};
