import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebaseconfig here

const firebaseConfig = {
  apiKey: "AIzaSyDIYZAArKg-0WbVGz8IWtMFZOmeiz-3ADM",
  authDomain: "cardioapp-936f2.firebaseapp.com",
  projectId: "cardioapp-936f2",
  storageBucket: "cardioapp-936f2.appspot.com",
  messagingSenderId: "820336146650",
  appId: "1:820336146650:web:1ef5acfcd3c0433e5f8de3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseAuthentication, firebaseFireStore, timestamp };
