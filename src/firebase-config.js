// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAasIb3QhdMRlJEGHAMq1E8We2B1AnEioo",
  authDomain: "lazyinlifegg.firebaseapp.com",
  projectId: "lazyinlifegg",
  storageBucket: "lazyinlifegg.appspot.com",
  messagingSenderId: "395143790319",
  appId: "1:395143790319:web:5b0e2ac5e70f75b306651a",
  measurementId: "G-4MGY1HQ9JX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
