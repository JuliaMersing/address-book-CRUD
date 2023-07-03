export interface Contact {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	countryCode: string;
}

export const initialContact: Contact[] = [
	{
		id: new Date().toJSON().toString(),
		firstName: 'Celia',
		lastName: 'Cruz',
		email: 'azucar@me.com',
		countryCode: 'Cuba',
	},
];

export enum PageEnum {
	isHomePage,
	isAddContactPage,
	isEditContactPage,
}
