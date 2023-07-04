import React from 'react';
import { Contact } from '../type/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import countryList from 'country-list';

interface CardContactProps {
	data: Contact;
	onEdit: (contact: Contact) => void;
	onDelete: (contact: Contact) => void;
}

export const CardContact: React.FC<CardContactProps> = ({
	data,
	onEdit,
	onDelete,
}) => {
	const country = countryList.getName(data.countryCode);

	return (
		<div className="container-contact bg-white border-indigo-600 border-2 rounded-md p-4 mb-4">
			<h2 className="input text-lg font-bold mb-2">
				{data.firstName} {data.lastName}
			</h2>
			<p className="input text-gray-600 mb-2">{data.email}</p>
			<p className="input text-gray-600 mb-2">{country}</p>
			<div className="flex justify-end">
				<FontAwesomeIcon
					icon={faEdit}
					className="action-icon edit-icon text-indigo-600 mr-2"
					onClick={() => onEdit(data)}
				/>
				<FontAwesomeIcon
					icon={faTrash}
					className="action-icon delete-icon text-indigo-600"
					onClick={() => onDelete(data)}
				/>
			</div>
		</div>
	);
};
