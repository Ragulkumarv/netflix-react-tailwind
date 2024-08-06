// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJMECwxBNWgUOAieEbH8PC2QVzTflElro",
  authDomain: "netflix-react-tailwind-32ab1.firebaseapp.com",
  projectId: "netflix-react-tailwind-32ab1",
  storageBucket: "netflix-react-tailwind-32ab1.appspot.com",
  messagingSenderId: "271122784917",
  appId: "1:271122784917:web:6bd10dc30c1416f047f19c",
  measurementId: "G-ZP40NGJ04J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
