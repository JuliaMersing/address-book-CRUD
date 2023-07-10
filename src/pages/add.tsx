import React, { useContext } from 'react';
import { Contact } from '../components/type/type';
import { AddContact } from '../components/AddContact/AddContact';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../Context/ContactContext';

export const Add: React.FC = () => {
	const navigate = useNavigate();
	const { contactList, storeContacts } = useContext(ContactContext);

	const handleAddContact = (data: Contact) => {
		storeContacts([...contactList, data]);
		navigate('/');
	};

	return <AddContact onSubmitForm={handleAddContact} />;
};
