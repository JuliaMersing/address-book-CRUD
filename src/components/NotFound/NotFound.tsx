import React from 'react';
import { Header } from '../Header/Header';

export const NotFound: React.FC = () => {
	return (
		<div className="container-app">
			<div className="container-form">
				<Header
					heading="Ups! This page does not exist!"
					href="/"
					linkParagraph="Go Back"
				/>
				<img
					className="mt-8 mx-auto"
					src="https://media0.giphy.com/media/8L0Pky6C83SzkzU55a/200.gif?cid=6104955eaq2nvmb9876ymsd7n2idsg2d99riityqd0ubk5un&ep=v1_gifs_translate&rid=200.gif&ct=g"
					alt="404 - Page Not Found"
				/>
			</div>
		</div>
	);
};
