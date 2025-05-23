import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    AuthErrorCodes,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDngdFT2leotV7_ITn_0GAJXZbQJJxVFtk",
    authDomain: "spotify-api-1b2bb.firebaseapp.com",
    projectId: "spotify-api-1b2bb",
    storageBucket: "spotify-api-1b2bb.firebasestorage.app",
    messagingSenderId: "864467718606",
    appId: "1:864467718606:web:5fd612f98f420397a61b9f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function loginEmailPassword(email, password, navigate) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        if (userCredential){
            navigate("/");
        }
        console.log(userCredential.user)
    } catch (error) {
        if (error.code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
            alert("Wrong Email or Password, try again");
        } else {
            alert(error.code)
        }
    }

    
}