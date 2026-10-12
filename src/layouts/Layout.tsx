import { Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from '../components/Header/Header';
import { useContext } from 'react';
import { UserContext } from '../context/user.context';

export function Layout() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("UserContext not found");
    }

    const { user } = context;

    return (
        <div className={cn(styles['app'])}>
            <Header name={user.isLogined ? user.userName : ''} />
            <div className={styles['content']}>
                <Outlet />
            </div>
        </div>
    );
}