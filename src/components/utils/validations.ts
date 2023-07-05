export const verifyEmail = (email: string): string => {
	const emailRegex = /\S+@\S+\.\S+$/;
	if (!email) return 'Please, enter your email';
	if (!emailRegex.test(email)) return 'Invalid email provided';
	return '';
};

export const verifyFirstName = (firstName: string): string => {
	if (!firstName) return 'This field is required';
	return '';
};

export const verifyLastName = (lastName: string): string => {
	if (!lastName) return 'This field is required';
	return '';
};

export const verifyCountry = (countryCode: string): string => {
	if (countryCode === '') return 'This field is required';
	return '';
};
