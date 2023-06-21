import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDcKCeMFzCXdDKyR71XWhiZHCK-4gCiWWg",
    authDomain: "todo-app-28de2.firebaseapp.com",
    projectId: "todo-app-28de2",
    storageBucket: "todo-app-28de2.appspot.com",
    messagingSenderId: "194677075443",
    appId: "1:194677075443:web:cc6cb29051723e52f47686",
    measurementId: "G-S60J6FRVEM"
 })

const db = firebaseApp.firestore();

export default db;



