import { initializeApp } from "firebase/app";
import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAohdL82FKUNJGXeukDMSuNfP1QrPTMaGQ",
    authDomain: "pruebatecnica-eef76.firebaseapp.com",
    projectId: "pruebatecnica-eef76",
    storageBucket: "pruebatecnica-eef76.appspot.com",
    messagingSenderId: "128456425346",
    appId: "1:128456425346:web:cf5d54c66416dcd239999b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export {
    app,
    db,
    google,
    facebook
}