import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { User } from "../context/user.context";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
     const raw = localStorage.getItem('user');
    const user: User | null = raw ? JSON.parse(raw) : null;

    if (!user?.isLogined) {
        return <Navigate to="/login" replace />;
    }

    return children
}