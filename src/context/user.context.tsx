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
    isLogined: !!localStorage.getItem('jwt'),
		userName: localStorage.getItem('userName') ?? 'guest',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}