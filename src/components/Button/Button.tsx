import React, { FormEvent } from 'react';

interface ButtonProps {
	children: string;
	onClick?: (e: FormEvent) => void;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	disabled,
}) => (
	<div>
		<button
			type="submit"
			className="button-container"
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	</div>
);
