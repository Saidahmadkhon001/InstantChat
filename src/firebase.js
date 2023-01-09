import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAYT_0sPo3JmKYSMSVYN6MjGIm9vHOZZHw",
    authDomain: "instanchat-a0853.firebaseapp.com",
    projectId: "instanchat-a0853",
    storageBucket: "instanchat-a0853.appspot.com",
    messagingSenderId: "74971503464",
    appId: "1:74971503464:web:a31e608e4ca54a56afd4dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();;
export const db = getFirestore();

