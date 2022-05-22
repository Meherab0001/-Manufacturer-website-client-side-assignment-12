// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkAV0xt97thjapUlno2gTvTn4yf98mAxY",
  authDomain: "assignment-12-785e5.firebaseapp.com",
  projectId: "assignment-12-785e5",
  storageBucket: "assignment-12-785e5.appspot.com",
  messagingSenderId: "509297031158",
  appId: "1:509297031158:web:ca159bcc8466b79673f9d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;