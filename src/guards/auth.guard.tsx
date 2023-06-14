import { useAppSelector } from "@/store/store";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "@/types";

const AuthGuard: React.FC = () => {
    const user = useAppSelector((state) => state.auth.user);
    return user != null ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
}

export default AuthGuard;