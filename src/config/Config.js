// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm7YXzc9tjej3Q4-Qh81nVvuHgxgt9u8M",
  authDomain: "saylani-hackathon-4b19d.firebaseapp.com",
  projectId: "saylani-hackathon-4b19d",
  storageBucket: "saylani-hackathon-4b19d.appspot.com",
  messagingSenderId: "608812756333",
  appId: "1:608812756333:web:e1def2dfaee828b407fe64",
  measurementId: "G-7BLYWHXQ4H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
