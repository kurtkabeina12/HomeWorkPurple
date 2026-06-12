import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
    userName: 'quest',
    isLogined: false
})

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        userName: 'quest',
        isLogined: false
    });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}