import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Add } from './pages/add';
import { Edit } from './pages/edit';
import { Error } from './pages/error';

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add" element={<Add />} />
				<Route path="/edit/:idContact" element={<Edit />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};
