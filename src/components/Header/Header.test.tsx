import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';
import '@testing-library/jest-dom';

describe('Header component', () => {
	test('should navigate to the correct place when link is clicked', () => {
		render(
			<Header
				heading="Add new Contact"
				href="/"
				linkParagraph="Go back to address book"
			/>
		);
		const link = screen.getByRole('link');
		userEvent.click(link);
		expect(link).toHaveAttribute('href', '/');
	});
});
