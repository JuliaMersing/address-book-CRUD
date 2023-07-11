import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';
import userEvent from '@testing-library/user-event';

test('renders NotFound component correctly', () => {
	render(<NotFound />);
	const headingElement = screen.getByText('Ups! This page does not exist!');
	expect(headingElement).toBeInTheDocument();
});
test('should navigate to the correct place when link is clicked', () => {
	render(<NotFound />);
	const link = screen.getByRole('link');
	userEvent.click(link);
	expect(link).toHaveAttribute('href', '/');
});
