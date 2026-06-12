import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/use-localStorage.hook";

export const UserContext = createContext({
    userName: 'quest',
    isLogined: false
})

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', {
        userName: 'quest',
        isLogined: false
    });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}