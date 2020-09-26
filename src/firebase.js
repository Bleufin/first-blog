import firebase from "firebase/app";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyAt7yj6Rh8zSEq-7v4p512Vzhna-DzYhpQ",
  authDomain: "blog-38190.firebaseapp.com",
  databaseURL: "https://blog-38190.firebaseio.com",
  projectId: "blog-38190",
  storageBucket: "blog-38190.appspot.com",
  messagingSenderId: "660162247244",
  appId: "1:660162247244:web:6551a7ada25df4d01bd2e9",
  measurementId: "G-3E69QCH4CJ"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
