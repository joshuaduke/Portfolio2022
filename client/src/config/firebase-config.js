// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLd5VDFR3A1mk4CX-YnvX6Rjp32xkCrUc",
  authDomain: "portfolio-31d64.firebaseapp.com",
  projectId: "portfolio-31d64",
  storageBucket: "portfolio-31d64.appspot.com",
  messagingSenderId: "570228426494",
  appId: "1:570228426494:web:8059faf7828a35e55387af",
  measurementId: "G-N3SSEFCJN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);