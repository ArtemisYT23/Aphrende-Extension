import { Navigate, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "@/types";
import { Home, Note } from "@/pages";
import { NavBar } from "@/components";

const Private: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={PrivateRoutes?.LISTNOTES} />} />
        <Route path={PrivateRoutes?.LISTNOTES} element={<Home />} />
        <Route path={PrivateRoutes?.NEWNOTE} element={<Note />} />
      </Routes>
    </div>
  );
};

export default Private;
