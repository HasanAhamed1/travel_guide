// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaISwlA7rnLAtWhC9BMA2-892KkOoEq9I",
  authDomain: "travel-guide-9f9ad.firebaseapp.com",
  projectId: "travel-guide-9f9ad",
  storageBucket: "travel-guide-9f9ad.appspot.com",
  messagingSenderId: "530901102156",
  appId: "1:530901102156:web:4dc4a44d9f05776f090ee9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
