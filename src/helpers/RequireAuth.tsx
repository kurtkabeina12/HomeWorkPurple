import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
    console.log('REQUIRE AUTH RENDER');

    const jwt = useSelector((state: RootState) => state.user.jwt);

    console.log('JWT FROM REDUX:', jwt);

    if (!jwt) {
        console.log('NO JWT → LOGIN');
        return <Navigate to="/login" replace />;
    }

    console.log('JWT EXISTS → MAIN');

    return children;
};