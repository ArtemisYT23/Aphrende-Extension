import { Navigate, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "@/types";
import { Home } from "@/pages";

const Private: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={PrivateRoutes?.LISTNOTES} />} />
        <Route path={PrivateRoutes?.LISTNOTES} element={<Home />} />
      </Routes>
    </div>
  );
};

export default Private;
