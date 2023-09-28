import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "pp-3-a60b4.firebaseapp.com",
  projectId: "pp-3-a60b4",
  storageBucket: "pp-3-a60b4.appspot.com",
  messagingSenderId: "788295412358",
  appId: "1:788295412358:web:bd7b5b6589fea9531eff07",
  measurementId: "G-T8GMW17EZT"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 