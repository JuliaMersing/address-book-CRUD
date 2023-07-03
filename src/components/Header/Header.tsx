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
		<h2 className="heading">{heading}</h2>
		<a href={href} className="link">
			{linkParagraph}
		</a>
	</>
);
