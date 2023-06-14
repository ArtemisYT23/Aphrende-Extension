import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth, googleProvider } from "@/config/firebase";
import { signInWithRedirect } from "firebase/auth";
import { User } from "firebase/auth";

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
    user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: () => {
        signInWithRedirect(auth, googleProvider);
      },
      logout: (state) => {
        auth.signOut().catch((error) => {
          console.log(error);
        });
        state.user = null;
      },
      setUser: (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;