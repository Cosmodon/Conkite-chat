// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOhapQ5ZMaeQ7neCSh0lEIHwX6rkfWDpw",
  authDomain: "conkite-react-chat-app.firebaseapp.com",
  projectId: "conkite-react-chat-app",
  storageBucket: "conkite-react-chat-app.appspot.com",
  messagingSenderId: "362146579824",
  appId: "1:362146579824:web:bca05fd5891bcc4060bbb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);