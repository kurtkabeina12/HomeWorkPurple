import { useEffect, useRef, useState } from 'react';
import styles from "./Login.module.css";
import { Button } from '../../components/Button/Button';
import { Headline } from '../../components/Headline/Headline';
import { Input } from '../../components/Input/Input';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { login } from '../../store/user.slice';
import { favoritesActions } from '../../store/favorites.slice';

export type LoginForm = {
    userName: {
        value: string;
    },
    isLogined: {
        value: boolean;
    }
}

export function Login() {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch<AppDispatch>();
    const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);
    const navigate = useNavigate();

useEffect(() => {
    if (jwt) {
        navigate('/', { replace: true });
    }
}, [jwt, navigate]);

    const [loginValue, setLoginValue] = useState('');

const handleSubmit = async () => {
  if (!loginValue.trim()) {
    inputRef.current?.focus();
    return;
  }

  const result = await dispatch(login(loginValue));

  if (login.fulfilled.match(result)) {
    dispatch(favoritesActions.loadFavorites(loginValue));
  }
};

    return (
        <div className={cn(styles['loginBlock'])}>
            <Headline text={'Вход'} />
            <Input
                placeholder="Введите логин"
                image={false}
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                ref={inputRef}
            />
            <Button text="Войти в профиль" onClick={handleSubmit} />
        </div>
    )
}