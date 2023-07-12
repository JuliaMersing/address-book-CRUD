import React from 'react';
import { Link } from 'react-router-dom';
import { Contact } from '../type/type';
import { Header } from '../Header/Header';
import { CardContact } from '../CardContact/CardContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface ContactListProps {
	contactsList: Contact[];
}

export const ContactList: React.FC<ContactListProps> = ({ contactsList }) => (
	<div className="container-app">
		<div className="container-form">
			<Header heading="Address Book" />
			<div className="flex items-center justify-center mb-2">
				<Link to="/add" className="container-link">
					<FontAwesomeIcon icon={faPlus} />
					Add contact
				</Link>
			</div>
			<div className="container-card-list">
				{contactsList.map((contact: Contact) => (
					<CardContact key={contact.id} data={contact} />
				))}
			</div>
		</div>
	</div>
);
