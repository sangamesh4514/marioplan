import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fbConfig = {
  apiKey: "AIzaSyCC251VH2DmOmuAjcgBwIeqT9heYEcQ7Pw",
  authDomain: "marioplan-626aa.firebaseapp.com",
  projectId: "marioplan-626aa",
  storageBucket: "marioplan-626aa.appspot.com",
  messagingSenderId: "377116204971",
  appId: "1:377116204971:web:45a51b63d5b4554f70bcee",
  measurementId: "G-SP40F1GTEQ"
};

firebase.initializeApp(fbConfig);

export default firebase;
