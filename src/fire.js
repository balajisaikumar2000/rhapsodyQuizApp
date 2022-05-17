// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import firebase from "firebase";
// import * as firebase from "firebase/app";
// require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyB1-PatxJ3RXireVgqUCUC7qscYeYnXnj0",
  authDomain: "quiz-a96b0.firebaseapp.com",
  projectId: "quiz-a96b0",
  storageBucket: "quiz-a96b0.appspot.com",
  messagingSenderId: "703903027993",
  appId: "1:703903027993:web:3cb7651c21c62a87dbeb88",
  measurementId: "G-0DF0E21MY1",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
