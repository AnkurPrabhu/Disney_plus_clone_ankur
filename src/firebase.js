import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgRQ6003tKlF1sWrDNQDl6-m24QUPSCuE",
  authDomain: "disney-plus-clone-ankur.firebaseapp.com",
  projectId: "disney-plus-clone-ankur",
  storageBucket: "disney-plus-clone-ankur.appspot.com",
  messagingSenderId: "1077557253174",
  appId: "1:1077557253174:web:88a70dff444767b7bef497",
  measurementId: "G-4V1E3X2K5R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;