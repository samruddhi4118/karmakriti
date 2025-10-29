// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrwoah6F2ItaYUeE4LeFovt9TP33E9BjE",
  authDomain: "karmakriti-ecommerce.firebaseapp.com",
  projectId: "karmakriti-ecommerce",
  storageBucket: "karmakriti-ecommerce.appspot.com",
  messagingSenderId: "133527282121",
  appId: "1:133527282121:web:0d6debcddd7af891c28818",
  measurementId: "G-J77PK2DMDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and EXPORT Firebase services for other files to use
export const auth = getAuth(app);
export const db = getFirestore(app);