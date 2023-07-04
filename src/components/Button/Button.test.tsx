import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
	test('should match snapshot add contact', () => {
		render(<Button>Add Contact</Button>);
		screen.getByRole('button', { name: /Add Contact/i });
		expect('button').toMatchSnapshot();
	});
	test('should match snapshot', () => {
		render(<Button>Update contact</Button>);
		screen.getByRole('button', { name: /Update contact/i });
		expect('button').toMatchSnapshot();
	});
});
