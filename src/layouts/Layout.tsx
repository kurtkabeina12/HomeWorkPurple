import { Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from '../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

export function Layout() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const profile = useSelector((s: RootState) => s.user.profile);

    return (
        <div className={cn(styles['app'])}>
            <Header name={profile?.isLogined ? profile?.userName : ''} />
            <div className={styles['content']}>
                <Outlet />
            </div>
        </div>
    );
}