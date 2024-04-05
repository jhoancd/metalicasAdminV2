import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDllRQaOGxR546dRcRKDoQBmxtpr6g44zo",
    authDomain: "metalicasweb.firebaseapp.com",
    projectId: "metalicasweb",
    storageBucket: "metalicasweb.appspot.com",
    messagingSenderId: "78637182167",
    appId: "1:78637182167:web:2606febe280bb4e4f85492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);