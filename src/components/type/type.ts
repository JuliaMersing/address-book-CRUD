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
		firstName: 'Katrín',
		lastName: 'Jakobsdóttir',
		email: 'azucar@me.com',
		countryCode: 'IS',
	},
];

export enum PageEnum {
	isHomePage,
	isAddContactPage,
	isEditContactPage,
}
