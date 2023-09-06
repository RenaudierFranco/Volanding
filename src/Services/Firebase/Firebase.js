import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYBS7ExXp-d2ZsTMd715i-RhrRUzaABm0",
  authDomain: "practicaprofesional3-63b76.firebaseapp.com",
  projectId: "practicaprofesional3-63b76",
  storageBucket: "practicaprofesional3-63b76.appspot.com",
  messagingSenderId: "916557166982",
  appId: "1:916557166982:web:fb77d8ed46ea0357ce9407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 