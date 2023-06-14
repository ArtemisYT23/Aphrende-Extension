import { Navigate, Routes, Route } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "@/types";
import { AuthGuard } from "@/guards";
import { Login } from "@/pages";
import { Private } from ".";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
      <Route element={<AuthGuard />}>
        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
