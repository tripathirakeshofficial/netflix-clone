// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWUcx3JYtgx9BnTADazuNH5gveA0aRUH4",
  authDomain: "netflix-clone-a6e7b.firebaseapp.com",
  projectId: "netflix-clone-a6e7b",
  storageBucket: "netflix-clone-a6e7b.appspot.com",
  messagingSenderId: "155267222002",
  appId: "1:155267222002:web:96bccc1c2899ef0854836b",
  measurementId: "G-ZS0XJ733Q2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
