import { useContext, useRef, useState } from 'react';
import styles from "./Login.module.css";
import { Button } from '../../components/Button/Button';
import { Headline } from '../../components/Headline/Headline';
import { Input } from '../../components/Input/Input';
import { UserContext } from '../../context/user.context';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const inputRef = useRef<HTMLInputElement>(null);
    const context = useContext(UserContext);
    const [login, setLogin] = useState('');
    const navigate = useNavigate();

    if (!context) {
        throw new Error("UserContext not found");
    }

    const { user, setUser } = context;

    const handleSubmit = () => {
        if (!login.trim()) {
            inputRef.current?.focus();
            return;
        }

        setUser({
            userName: login,
            isLogined: true
        });

        navigate('/');
    };

    return (
        <div className={cn(styles['loginBlock'])}>
            <Headline text={'Вход'} />
            <Input
                placeholder="Введите логин"
                image={false}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                ref={inputRef}
            />
            <Button text="Войти в профиль" onClick={handleSubmit} />
        </div>
    )
}