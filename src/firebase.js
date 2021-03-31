import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpYd7ixqxDc-Z6swe6IlzztHi9tF2MuhQ",
  authDomain: "devr-realtime-chat-app.firebaseapp.com",
  projectId: "devr-realtime-chat-app",
  storageBucket: "devr-realtime-chat-app.appspot.com",
  messagingSenderId: "121293724498",
  appId: "1:121293724498:web:5da78e5d9b47d80d40788b",
  measurementId: "G-PWMQ3ZB55T",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
