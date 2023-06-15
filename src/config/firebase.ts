import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: "AIzaSyCc2A052f6M5HFMLkLNN9B0ZsHOzsOmtQA",
  // authDomain: "extension-chrome-3dca8.firebaseapp.com",
  // projectId: "extension-chrome-3dca8",
  // storageBucket: "extension-chrome-3dca8.appspot.com",
  // messagingSenderId: "1080018200983",
  // appId: "1:1080018200983:web:60089dedbc0de7a1047cd2",
  // measurementId: "G-1WGH7FPNJ0"
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