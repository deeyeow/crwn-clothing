import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDyG2JCuVie0nxJpflm35R_51t7Ulu5lCA",
    authDomain: "crwn-db-f6422.firebaseapp.com",
    projectId: "crwn-db-f6422",
    storageBucket: "crwn-db-f6422.appspot.com",
    messagingSenderId: "518129570292",
    appId: "1:518129570292:web:0134d8313b6d87cbdea9a1",
    measurementId: "G-NMTZMTWMHX"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;