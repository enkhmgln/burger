// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9l_6Tncm65WBHBxUx5Nic2fCnmQjFjG8",
  authDomain: "burger-ae9d4.firebaseapp.com",
  databaseURL:
    "https://burger-ae9d4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "burger-ae9d4",
  storageBucket: "burger-ae9d4.appspot.com",
  messagingSenderId: "758882700534",
  appId: "1:758882700534:web:1ef3f7c4e0e742713630d7",
  measurementId: "G-EP0Q5ZMLTR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
