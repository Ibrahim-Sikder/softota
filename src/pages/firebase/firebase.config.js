// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGaQD_yr0URKQhtkDK-8XlNSMTKEAbY0g",
  authDomain: "nextjs-d4cb3.firebaseapp.com",
  projectId: "nextjs-d4cb3",
  storageBucket: "nextjs-d4cb3.appspot.com",
  messagingSenderId: "434737965082",
  appId: "1:434737965082:web:2e729052da70edc83ec9a3",
  measurementId: "G-EGJGSLF92T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;