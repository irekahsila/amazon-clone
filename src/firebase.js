import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXTsGvUbGGbwmNEjFzKyq8OJNhzP250wA",
    authDomain: "clone-db8a2.firebaseapp.com",
    projectId: "clone-db8a2",
    storageBucket: "clone-db8a2.appspot.com",
    messagingSenderId: "240984799736",
    appId: "1:240984799736:web:a33b0ae67eeacafd0a3e0d",
    measurementId: "G-QFFPJG7G0J"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };