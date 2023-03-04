// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEevawNHyKGliHUb0JwbsoJ3CwRr6fJZs",
  authDomain: "hackathon-react-1a92c.firebaseapp.com",
  projectId: "hackathon-react-1a92c",
  storageBucket: "hackathon-react-1a92c.appspot.com",
  messagingSenderId: "969823090130",
  appId: "1:969823090130:web:dd3fa5970dbc3ab3e8440b",
  measurementId: "G-W9JC4BXYCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { analytics, auth, firestore }