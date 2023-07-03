import React, { FormEvent } from 'react';

interface ButtonProps {
	children: string;
	onClick?: (e: FormEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
}: ButtonProps) => (
	<div>
		<button type="submit" className="button-container" onClick={onClick}>
			{children}
		</button>
	</div>
);
