import React, { useContext } from 'react';
import { Contact } from '../type/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import countryList from 'country-list';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../../Context/ContactContext';

interface CardContactProps {
	data: Contact;
}

export const CardContact: React.FC<CardContactProps> = ({ data }) => {
	const country = countryList.getName(data.countryCode);
	const navigate = useNavigate();
	const { deleteContact } = useContext(ContactContext);

	return (
		<div className="contained-card">
			<h2 className="input text-lg font-bold mb-2">
				{data.firstName} {data.lastName}
			</h2>
			<p className="input text-gray-600 mb-2">{data.email}</p>
			<p className="input text-gray-600 mb-2">{country}</p>
			<div className="flex justify-end">
				<FontAwesomeIcon
					icon={faEdit}
					className="action-icon edit-icon text-indigo-600 mr-2"
					onClick={() => navigate(`/edit/${data.id}`)}
				/>
				<FontAwesomeIcon
					icon={faTrash}
					className="action-icon delete-icon text-indigo-600"
					onClick={() => deleteContact(data.id)}
				/>
			</div>
		</div>
	);
};
