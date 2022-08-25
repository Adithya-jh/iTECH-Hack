// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF8QR5T-FDJVWoNcr2KLOx0cVD3JJOPZI",
  authDomain: "social-network-29e49.firebaseapp.com",
  projectId: "social-network-29e49",
  storageBucket: "social-network-29e49.appspot.com",
  messagingSenderId: "619457204981",
  appId: "1:619457204981:web:f4035d630e80cb7a056bbc",
  measurementId: "G-HBYWB4445C"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export default app;
export { db, storage };
