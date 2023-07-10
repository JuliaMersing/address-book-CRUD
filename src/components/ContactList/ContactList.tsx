import React from 'react';
import { Link } from 'react-router-dom';
import { Contact } from '../type/type';
import { Header } from '../Header/Header';
import { CardContact } from '../CardContact/CardContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface ContactListProps {
	contactsList: Contact[];
	onAdd?: () => void;
}

export const ContactList: React.FC<ContactListProps> = ({ contactsList }) => (
	<div className="container-app">
		<div className="container-form">
			<Header heading="Address Book" />
			<div className="flex items-center justify-center mb-2">
				<Link to="/add" className="text-indigo-600 text-3xl mr-2">
					<FontAwesomeIcon icon={faPlus} />
				</Link>
				<Link to="/add" className="text-indigo-600 cursor-pointer">
					Add contact
				</Link>
			</div>
			<div className="container-card-list">
				{contactsList.map((contact: Contact, index: number) => (
					<CardContact key={index} data={contact} />
				))}
			</div>
		</div>
	</div>
);
