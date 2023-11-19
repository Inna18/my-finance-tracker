import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBdIqKDhc-kGdv-CC2W0ibMjCTXeLhk1F4",
  authDomain: "money-tracker-5b749.firebaseapp.com",
  projectId: "money-tracker-5b749",
  storageBucket: "money-tracker-5b749.appspot.com",
  messagingSenderId: "134502044376",
  appId: "1:134502044376:web:d48af438537ae5735cfdad"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth,timestamp }