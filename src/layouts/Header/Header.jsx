/* Header.jsx */

import { useLocalStorage } from '../../hooks/use-localStorage.hook';
import styles from './Header.module.css'

export function Header({ name }) {
	const [user, setUser] = useLocalStorage('user');

	const logOut = () => {
		setUser({
			...user,
			isLogined: false
		})
	}
	return (
		<div className={styles.headerBlock}>
			<img className={styles.headerLogo} src="../src/assets/logo.png" alt="Логотип" />
			<nav className={styles.headerLinks}>
				<ul>
					<li><a className={styles.headerLink, styles.active} href="">Поиск фильмов</a></li>
					<li><a className={styles.headerLink} href="">Мои фильмы</a></li>
					{name ?
						<>
							<li><a className={styles.headerLink} href="">{name}</a></li>
							<li onClick={logOut}><a className={styles.headerLink} href="">Выйти</a></li>
						</>
						:
						<li><a className={styles.headerLink} href="">Войти <img src="../src/assets/login.png" /></a></li>
					}
				</ul>
			</nav>
		</div>
	)
}