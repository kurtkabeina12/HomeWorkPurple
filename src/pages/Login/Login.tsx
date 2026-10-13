import { useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";

import { Button } from "../../components/Button/Button";
import { Headline } from "../../components/Headline/Headline";
import { Input } from "../../components/Input/Input";

import cn from "classnames";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";

import { login } from "../../store/user.slice";

export type LoginForm = {
  userName: {
    value: string;
  };
  isLogined: {
    value: boolean;
  };
};

export function Login() {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const { jwt, loginErrorMessage } = useSelector(
    (state: RootState) => state.user
  );

  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState("");

  useEffect(() => {
    if (jwt) {
      navigate("/", { replace: true });
    }
  }, [jwt, navigate]);

  const handleSubmit = async () => {
    if (!loginValue.trim()) {
      inputRef.current?.focus();
      return;
    }

    await dispatch(login(loginValue));
  };

  return (
    <div className={cn(styles["loginBlock"])}>
      <Headline text="Вход" />

      <Input
        placeholder="Введите логин"
        image={false}
        value={loginValue}
        onChange={(e) => setLoginValue(e.target.value)}
        ref={inputRef}
      />

      {loginErrorMessage && (
        <p>{loginErrorMessage}</p>
      )}

      <Button
        text="Войти в профиль"
        onClick={handleSubmit}
      />
    </div>
  );
}