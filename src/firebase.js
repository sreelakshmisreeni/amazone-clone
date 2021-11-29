import firebase from "firebase";




const firebaseApp  = firebase.initializeApp({
    apiKey: "AIzaSyBtswCR1SyPXZrFwrqvvjVKLJ3tTzVVGLQ",
    authDomain: "clone-bda6a.firebaseapp.com",
    projectId: "clone-bda6a",
    storageBucket: "clone-bda6a.appspot.com",
    messagingSenderId: "958464812080",
    appId: "1:958464812080:web:085accbba8298da28539f5",
    measurementId: "G-5K7NJ5NCMT"
  });


const auth = firebase.auth();

export {  auth };
