import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  projectId: "login-5f06b",
  messagingSenderId: "871189597682",
  storageBucket: "login-5f06b.appspot.com",
  authDomain: "login-5f06b.firebaseapp.com",
  apiKey: "AIzaSyAv_2gKtBhV6tgEGYUlFmSwXsSinCJapyM",
  appId: "1:871189597682:web:7a70ffc05b902664826f6b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();