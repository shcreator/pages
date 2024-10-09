// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO7J3G_yZi4_l9t3KLogllFqBpEhq6Bww",
  authDomain: "trickbd-blog.firebaseapp.com",
  projectId: "trickbd-blog",
  storageBucket: "trickbd-blog.appspot.com",
  messagingSenderId: "769639507545",
  appId: "1:769639507545:web:bcfbb10b5b35d7bf4db348",
  measurementId: "G-NVLJTJN04F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
