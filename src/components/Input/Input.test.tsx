import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input component', () => {
	const setUp = () => {
		const mockHandleOnChange = jest.fn();
		const mockHandleBlur = jest.fn();
		const mockCountryOptions = [
			<option key="1" value="USA">
				USA
			</option>,
		];

		const utils = render(
			<>
				<Input
					id="email"
					type="email"
					value=""
					placeholder="Email"
					onChange={mockHandleOnChange}
					onBlur={mockHandleBlur}
					error=""
					className="input"
				/>
				<Input
					id="lastName"
					type="text"
					value=""
					placeholder="Last Name"
					onChange={mockHandleOnChange}
					onBlur={mockHandleBlur}
					error=""
					className="input"
				/>
				<Input
					id="conutry"
					type="text"
					value=""
					onChange={mockHandleOnChange}
					onBlur={mockHandleBlur}
					options={mockCountryOptions}
					error=""
					placeholder="Select Country"
				/>
			</>
		);
		return {
			...utils,
			mockHandleBlur,
			mockHandleOnChange,
			mockCountryOptions,
		};
	};
	test('call mockHandleOnChange when user enter firstname, lastName, email or country', async () => {
		const { mockHandleOnChange } = setUp();

		const email = 'test@gmail.com';
		const input = screen.getByPlaceholderText('Email');
		await userEvent.type(input, email);

		expect(mockHandleOnChange).toHaveBeenCalled();
	});

	test('call handleBlur when email is not valid', async () => {
		const { mockHandleOnChange, mockHandleBlur } = setUp();

		const email = 'test.com';
		const input = screen.getByPlaceholderText('Email');
		await userEvent.type(input, email);

		expect(mockHandleOnChange).toHaveBeenCalled();
		await userEvent.tab();
		expect(mockHandleBlur).toHaveBeenCalled();
	});
});
