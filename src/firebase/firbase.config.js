// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC9eSswW93owUUmlXmbqwvMydRWUqcO1w",
  authDomain: "assignment-9-83521.firebaseapp.com",
  projectId: "assignment-9-83521",
  storageBucket: "assignment-9-83521.firebasestorage.app",
  messagingSenderId: "336737473518",
  appId: "1:336737473518:web:6f4d5c89054ea3a057b4ff"
};

// Initialize Firebaseconst auth = getAuth(auth);
const app = initializeApp(firebaseConfig);
export default app
// export const auth = getAuth(app);