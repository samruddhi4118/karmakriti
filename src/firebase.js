// Import necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8bz1Q7sCh27syTz8YfElcbIlhyusaplU",
  authDomain: "karmakriti-95c1f.firebaseapp.com",
  projectId: "karmakriti-95c1f",
  storageBucket: "karmakriti-95c1f.firebasestorage.app",
  messagingSenderId: "957950786765",
  appId: "1:957950786765:web:91f1f5fa89cb98e4c3bd84",
  measurementId: "G-K8RT3R6MMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
