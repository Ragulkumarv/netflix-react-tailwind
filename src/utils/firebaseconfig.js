// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmq-UzJ6Td8ZU2yox6U6qRCl5U2xvJgxY",
  authDomain: "netflix-react-tailwind-b5bac.firebaseapp.com",
  projectId: "netflix-react-tailwind-b5bac",
  storageBucket: "netflix-react-tailwind-b5bac.appspot.com",
  messagingSenderId: "937175469241",
  appId: "1:937175469241:web:4ece03e844911354f79f68",
  measurementId: "G-MPSNBG8DG2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
