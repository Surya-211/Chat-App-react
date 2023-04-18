import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-app-cac09.firebaseapp.com",
  projectId: "chat-app-cac09",
  storageBucket: "chat-app-cac09.appspot.com",
  messagingSenderId: "1014971066635",
  appId: "1:1014971066635:web:6fa7da510944e4a1579a0e",
  measurementId: "G-DFLBLQXES3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
