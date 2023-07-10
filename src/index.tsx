import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ContactProvider } from './Context/ContactContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ContactProvider>
			<App />
		</ContactProvider>
	</React.StrictMode>
);
