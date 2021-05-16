import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASQ4tPFO4HUY6Y-iMUnSppUrmbOGQPv-o",
  authDomain: "linkedin-clone-977dd.firebaseapp.com",
  projectId: "linkedin-clone-977dd",
  storageBucket: "linkedin-clone-977dd.appspot.com",
  messagingSenderId: "586060863717",
  appId: "1:586060863717:web:7a5ce896828a0c35505c0c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
