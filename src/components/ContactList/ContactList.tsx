import React from 'react';
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
	onAdd,
}) => (
	<div className="container-app">
		<div className="container-form">
			<Header heading="Address Book" />
			<div className="flex items-center justify-center mb-2">
				<FontAwesomeIcon
					icon={faPlus}
					className="text-indigo-600 text-3xl mr-2"
					onClick={onAdd}
				/>
				<span className="text-indigo-600 cursor-pointer" onClick={onAdd}>
					Add contact
				</span>
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
