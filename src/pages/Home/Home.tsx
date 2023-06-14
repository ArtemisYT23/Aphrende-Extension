import { logout } from "@/store/reducers/authReducers";
import { useAppDispatch, useAppSelector } from "@/store/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
 const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Usuario autenticado: {user?.displayName}</p>
          <p>Usuario autenticado: {user?.email}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <></>
      )}
      <span>HOME</span>
    </div>
  );
};

export default Home;
