import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import Main from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { Movie } from './pages/Movie/Movie';
import { Favorites } from './pages/Favorites/Favorites';
import { Error } from './pages/Error/Error';
import { UserContextProvider } from './context/user.context';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{
			path: '/',
			element: <Main />
		},
		{
			path: '/login',
			element: <Login />
		},
		{
			path: '/movie/:id',
			element: <Movie />
		},
		{
			path: '/favorites',
			element: <Favorites />
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
