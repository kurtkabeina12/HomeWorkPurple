/* Header.jsx */

import { useContext } from 'react';
import styles from './Header.module.css'
import { UserContext } from '../../context/user.context';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import { Link } from 'react-router-dom';

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
					<Link to={'/'}><a className={cn(styles['headerLink'], styles['active'])} >Поиск фильмов</a></Link>
					<Link to={'/'}><a className={cn(styles['headerLink'])}>Мои фильмы</a></Link>
					{props.name ?
						<>
							<p>{props.name}</p>
							<button onClick={logOut}>Выйти</button>
						</>
						:
						<Link to={'./login'}><a className={styles.headerLink} href="">Войти <img src="../src/assets/login.png" /></a></Link>
					}
				</ul>
			</nav>
		</div>
	)
}