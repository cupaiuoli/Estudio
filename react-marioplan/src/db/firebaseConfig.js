import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5rZ23LmAiLu49o2inIw_3GUYUhhSa84c",
    authDomain: "marioplan-react.firebaseapp.com",
    databaseURL: "https://marioplan-react.firebaseio.com",
    projectId: "marioplan-react",
    storageBucket: "marioplan-react.appspot.com",
    messagingSenderId: "1091573823406"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;