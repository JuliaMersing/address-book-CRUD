import React, { FormEvent } from 'react';

export interface InputProps {
	id?: string;
	type?: string;
	value: string;
	onChange: (e: FormEvent) => void;
	placeholder: string;
	error?: string;
	className?: string;
	options?: JSX.Element[];
	name?: string;
}

export const Input: React.FC<InputProps> = ({
	id,
	type,
	value,
	onChange,
	placeholder,
	error,
	className,
	options,
	name,
}) => (
	<div className="mb-6">
		{options ? (
			<select
				id={id}
				value={value}
				onChange={onChange}
				className={className}
				name={name}
			>
				{options}
			</select>
		) : (
			<input
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				className={className}
				placeholder={placeholder}
				name={name}
			/>
		)}
		{error && <div className="text-red-600">{error}</div>}
	</div>
);
