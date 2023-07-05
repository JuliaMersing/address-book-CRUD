import React from 'react';
import { Link } from 'react-router-dom';
import { Contact } from '../type/type';
import { Header } from '../Header/Header';
import { CardContact } from '../CardContact/CardContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface ContactListProps {
	contactsList: Contact[];
	onDelete: (data: Contact) => void;
	onEdit: (data: Contact) => void;
	onAdd?: () => void;
}

export const ContactList: React.FC<ContactListProps> = ({
	contactsList,
	onDelete,
	onEdit,
}) => (
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
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{contactsList.map((contact: Contact, index: number) => (
					<CardContact
						key={index}
						data={contact}
						onEdit={onEdit}
						onDelete={onDelete}
					/>
				))}
			</div>
		</div>
	</div>
);
