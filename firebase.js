// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChUuOZvEQ1Xv3fM_9QcrZSeWsmWg39BiU",
  authDomain: "flashcard-saas-ede5c.firebaseapp.com",
  projectId: "flashcard-saas-ede5c",
  storageBucket: "flashcard-saas-ede5c.appspot.com",
  messagingSenderId: "221302981087",
  appId: "1:221302981087:web:38caa496587543ed82846a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;