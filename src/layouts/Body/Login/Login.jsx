import { useRef, useState } from 'react';
import { Button } from "../../../components/Button/Button";
import { Headline } from "../../../components/Headline/Headline";
import { Input } from "../../../components/Input/Input";
import styles from "./Login.module.css";
import { useLocalStorage } from '../../../hooks/use-localStorage.hook';

export function Login() {
    const inputRef = useRef(null);
    const [user, setUser] = useLocalStorage('user');
    const [login, setLogin] = useState('');

    const handleSubmit = () => {
        if (!login.trim()) {
            inputRef.current?.focus();
            return;
        }

        setUser({
            name: login,
            isLogined: true
        });

        console.log('Вошли:', login);
    };

    return (
        <div className={styles.loginBlock}>
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