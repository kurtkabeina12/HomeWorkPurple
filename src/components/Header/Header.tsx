/* Header.jsx */

import { useContext } from 'react';
import styles from './Header.module.css'
import { UserContext } from '../../context/user.context';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export function Header(props: HeaderProps) {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error("UserContext not found");
	}

	const { user, setUser } = context;

	const logOut = () => {
		setUser({
			...user,
			isLogined: false
		})
	}
	return (
		<div className={cn(styles['headerBlock'])}>
			<img className={cn(styles['headerLogo)'])} src="../src/assets/logo.png" alt="Логотип" />
			<nav className={cn(styles['headerLinks'])}>
				<ul>
					<NavLink
  to="/"
						className={({ isActive }) =>
							cn(styles.headerLink, {
								[styles.active]: isActive
							})
						}
					>
						Поиск фильмов
					</NavLink>
					<NavLink to={'/favorites'} className={cn(styles['headerLink'])}>Мои фильмы</NavLink>
					{props.name ?
						<>
							<p>{props.name}</p>
							<NavLink onClick={logOut} className={cn(styles['headerLink'])} to={'./login'}>Выйти</NavLink>
						</>
						:
						<NavLink to={'./login'} className={styles.headerLink}>Войти <img src="../src/assets/login.png" /></NavLink>
					}
				</ul>
			</nav>
		</div>
	)
}