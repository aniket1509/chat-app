import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASo1z45YENDFh8IOV1VV06dBBn2JMwFpY",
    authDomain: "chatapp-51eb9.firebaseapp.com",
    projectId: "chatapp-51eb9",
    storageBucket: "chatapp-51eb9.appspot.com",
    messagingSenderId: "692816938196",
    appId: "1:692816938196:web:9d02abc89567ba3a60a741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();