// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl_SnfY_Xs5QqrJG5hfOW6Oxi7vFTmgC0",      // ye code hm jb firebase par web app banate h tab milta h
  authDomain: "u-netflixgpt.firebaseapp.com",
  projectId: "u-netflixgpt",
  storageBucket: "u-netflixgpt.firebasestorage.app",
  messagingSenderId: "542001615736",
  appId: "1:542001615736:web:598712571420068aaf6e8d",
  measurementId: "G-M8KCWPQ8XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();