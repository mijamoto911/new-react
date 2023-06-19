// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmYUnqWxUEdFfy5ZX0IkAuoXZUkuKKc3M",
  authDomain: "todo-app-yt-37c45.firebaseapp.com",
  projectId: "todo-app-yt-37c45",
  storageBucket: "todo-app-yt-37c45.appspot.com",
  messagingSenderId: "741840410112",
  appId: "1:741840410112:web:0a9df8320796b68d5c6ae5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
