// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnesrVJVTVcWQFQd3L0nHYaAzWkx-uel4",
  authDomain: "react-faq-6aa4c.firebaseapp.com",
  projectId: "react-faq-6aa4c",
  storageBucket: "react-faq-6aa4c.firebasestorage.app",
  messagingSenderId: "694569905599",
  appId: "1:694569905599:web:8eb4bceafbdb71681e450a",
  measurementId: "G-RRY74PBM92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);