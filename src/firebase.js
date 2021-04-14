import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyC9_lfaP63EgSgPIkiXFtdx-IqqgNGaFuU",
    authDomain: "clone-9520f.firebaseapp.com",
    projectId: "clone-9520f",
    storageBucket: "clone-9520f.appspot.com",
    messagingSenderId: "122061792158",
    appId: "1:122061792158:web:987bb7805ea5edebcc2c8f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };