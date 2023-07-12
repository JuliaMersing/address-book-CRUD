import React, { useContext, useEffect } from 'react';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactContext } from '../Context/ContactContext';

export const Home: React.FC = () => {
	const { contactList, storeContacts } = useContext(ContactContext);

	useEffect(() => {
		storeContacts(contactList);
	}, [contactList, storeContacts]);

	return <ContactList contactsList={contactList} />;
};
