import React from 'react';

interface HeaderProps {
	heading: string;
	href?: string;
	linkParagraph?: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({
	heading,
	href,
	linkParagraph,
}) => (
	<>
		<h2 className="text-center text-indigo-600 text-4xl font-bold">
			{heading}
		</h2>
		<a
			href={href}
			className="font-medium text-indigo-600 hover:text-indigo-500 ml-2"
		>
			{linkParagraph}
		</a>
	</>
);
