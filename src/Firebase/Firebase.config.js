// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl9VA1Mj40cS4JBS2xcDP9ESb143XKMU8",
  authDomain: "explore-world-client.firebaseapp.com",
  projectId: "explore-world-client",
  storageBucket: "explore-world-client.appspot.com",
  messagingSenderId: "336131022629",
  appId: "1:336131022629:web:d0d1d4236a66bb70b284cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
