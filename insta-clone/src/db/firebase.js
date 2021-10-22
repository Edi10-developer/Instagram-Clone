import firebase, { initializeApp } from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCos2xVOgeu-n97dkBZfwdo-bIFxfNJ7vA",
    authDomain: "instagram-clone-e7fd7.firebaseapp.com",
    databaseURL: "https://instagram-clone-e7fd7-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-e7fd7",
    storageBucket: "instagram-clone-e7fd7.appspot.com",
    messagingSenderId: "573619088178",
    appId: "1:573619088178:web:dbb14527d23977f40f052b",
    measurementId: "G-3F3FQH02FB"
});

const db      = firebaseApp.firestore();
const auth    = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };