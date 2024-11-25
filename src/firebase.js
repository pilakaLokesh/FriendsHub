import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBICM05fjJhMSI7npgjoFCznFGO52_BTNE",
    authDomain: "auth-f4a34.firebaseapp.com",
    projectId: "auth-f4a34",
    storageBucket: "auth-f4a34.appspot.com",  
    messagingSenderId: "309048847286",
    appId: "1:309048847286:web:1851c7526ec186d438af17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
