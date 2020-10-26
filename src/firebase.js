import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDEee56jSupRJ7IWaro1h-_D6svSzVNTCg",
    authDomain: "twitter-clone-68ce9.firebaseapp.com",
    databaseURL: "https://twitter-clone-68ce9.firebaseio.com",
    projectId: "twitter-clone-68ce9",
    storageBucket: "twitter-clone-68ce9.appspot.com",
    messagingSenderId: "1094080435182",
    appId: "1:1094080435182:web:4a95c11c4ee0ed341d34ff",
    measurementId: "G-PM6K16LEJC"
};

const firebaseApp=firebase.initializeApp(firebaseConfig); 
const db=firebaseApp.firestore();

export default db;