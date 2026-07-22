import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from '../components/Header/Header';

export function Layout() {

	return (
		<>
		<Header name={''}/>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</>
	);
}