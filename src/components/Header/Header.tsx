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
			<img className={cn(styles['headerLogo'])} src="../src/assets/logo.png" alt="Логотип" />
			<nav className={cn(styles['headerLinks'])}>
    <ul>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    cn(styles.headerLink, { [styles.active]: isActive })
                }
            >
                Поиск фильмов
            </NavLink>
        </li>
        <li>
            <NavLink
                to={'/favorites'}
                className={({ isActive }) =>
                    cn(styles.headerLink, { [styles.active]: isActive })
                }
            >
                Мои фильмы
            </NavLink>
        </li>
        {props.name ? (
            <>
                <li><p>{props.name}</p></li>
                <li>
                    <NavLink
                        onClick={logOut}
                        to={'/login'}
                        className={({ isActive }) =>
                            cn(styles.headerLink, { [styles.active]: isActive })
                        }
                    >
                        Выйти
                    </NavLink>
                </li>
            </>
        ) : (
            <li>
                <NavLink to={'/login'} className={styles.headerLink}>
                    Войти <img src="../src/assets/login.png" />
                </NavLink>
            </li>
        )}
    </ul>
</nav>
		</div>
	)
}