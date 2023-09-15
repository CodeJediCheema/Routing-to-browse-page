// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAybIT7BRbk1i9e6BkPk7Dmu8X-ZB4xVtU",
  authDomain: "netflixgpt-ac070.firebaseapp.com",
  projectId: "netflixgpt-ac070",
  storageBucket: "netflixgpt-ac070.appspot.com",
  messagingSenderId: "1074340054941",
  appId: "1:1074340054941:web:054161ff7848b697065174",
  measurementId: "G-T888FEGV20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();