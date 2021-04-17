import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCrcTYxvN9sBgKiqsFu0CBg8ry1aFH6AHo",
    authDomain: "tinder-clone-50874.firebaseapp.com",
    projectId: "tinder-clone-50874",
    storageBucket: "tinder-clone-50874.appspot.com",
    messagingSenderId: "367058050284",
    appId: "1:367058050284:web:5f9a22594f247e4eea19c9"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const database= firebaseApp.firestore();

  export default database;