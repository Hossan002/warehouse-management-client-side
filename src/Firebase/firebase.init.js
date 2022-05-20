import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDnBphiGwCAVUQnojUaetCLXrnPvCrPKis",
    authDomain: "fruits-warehouse-aa280.firebaseapp.com",
    projectId: "fruits-warehouse-aa280",
    storageBucket: "fruits-warehouse-aa280.appspot.com",
    messagingSenderId: "257008305232",
    appId: "1:257008305232:web:68e6df4704e4536d327d55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;