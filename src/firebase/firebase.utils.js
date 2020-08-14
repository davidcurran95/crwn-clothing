import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAS5y1r1is9XsijbW442tRZCTfg1QPdSXY",
  authDomain: "crwn-db-62c20.firebaseapp.com",
  databaseURL: "https://crwn-db-62c20.firebaseio.com",
  projectId: "crwn-db-62c20",
  storageBucket: "crwn-db-62c20.appspot.com",
  messagingSenderId: "537201578687",
  appId: "1:537201578687:web:d7ae05390621ac6ca86c0a",
  measurementId: "G-FRE1H1NJ6G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
