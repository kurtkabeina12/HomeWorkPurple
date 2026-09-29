/* Header.jsx */

import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { userAction } from '../../store/user.slice';
import styles from './Header.module.css'
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export function Header(props: HeaderProps) {
	const dispatch = useDispatch<AppDispatch>();

const jwt = useSelector((state: RootState) => state.user.jwt);

	const logOut = () => {
            dispatch(userAction.logout());
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
        {jwt  ? (
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