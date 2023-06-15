import React, { useEffect } from "react";
import { auth } from "@/config/firebase";
import { login, logout, setUser } from "@/store/reducers/authReducers";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { onAuthStateChanged } from "firebase/auth";
import { ContentLogin, ButtonLogin } from "./Login.styles";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser(currentUser));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (!user) return;
    navigate(`/${PrivateRoutes.PRIVATE}`);
  }, [user]);

  return (
    <ContentLogin>
        <ButtonLogin onClick={handleLogin}>Iniciar sesión con Google</ButtonLogin>
    </ContentLogin>
  );
};

export default Login;
