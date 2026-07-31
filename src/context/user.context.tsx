import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
} from "react";
import { useLocalStorage } from "../hooks/use-localStorage.hook";

export interface User {
  userName: string;
  isLogined: boolean;
}

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useLocalStorage<User>("user", {
    userName: "guest",
    isLogined: false,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}