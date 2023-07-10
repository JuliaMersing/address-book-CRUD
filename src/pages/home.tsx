import React, { useContext, useEffect } from 'react';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactContext } from '../Context/ContactContext';

export const Home: React.FunctionComponent = () => {
	const { contactList, storeContacts } = useContext(ContactContext);

	useEffect(() => {
		storeContacts(contactList);
	});

	return <ContactList contactsList={contactList} />;
};
