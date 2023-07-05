export interface Contact {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	countryCode: string;
}

export enum PageEnum {
	isHomePage,
	isAddContactPage,
	isEditContactPage,
}
