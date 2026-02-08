// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp5nNDYSkUjriAa4KCofjTKb2mHOy_6LA",
  authDomain: "otp-verification-15eac.firebaseapp.com",
  projectId: "otp-verification-15eac",
  appId: "1:1044215506440:web:61ebbe5f4e919b12de93bd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const providerGitHub = new GithubAuthProvider();
export { auth, provider, signInWithPopup };