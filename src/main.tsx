import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import Main from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { Movie } from './pages/Movie/Movie';
import { Favorites } from './pages/Favorites/Favorites';
import { Error } from './pages/Error/Error';
import axios from 'axios';
import { UserContextProvider } from './context/user.context';
import { apiHeaders, PREFIX } from './helpers/Api';
import { RequireAuth } from './helpers/RequireAuth';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <RequireAuth><Main /></RequireAuth>
			},
			{
				path: '/movie/:id',
				element: <RequireAuth><Movie /></RequireAuth>,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => { /* как было */ }
			},
			{
				path: '/favorites',
				element: <RequireAuth><Favorites /></RequireAuth>
			},
			{
				path: '/login',
				element: <Login />
			}
		]
	},
	{
		path: '*',
		element: <Error />
	}
]);

createRoot(document.getElementById('root')!).render(
	<UserContextProvider>
		<RouterProvider router={router} />
	</UserContextProvider>
);

