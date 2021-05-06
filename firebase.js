import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMBung6oBS-PywCSbZtYrVu45iGxO6Leo",
  authDomain: "signal-clone-app-a536e.firebaseapp.com",
  databaseURL: "https://signal-clone-app-a536e-default-rtdb.firebaseio.com",
  projectId: "signal-clone-app-a536e",
  storageBucket: "signal-clone-app-a536e.appspot.com",
  messagingSenderId: "991944109860",
  appId: "1:991944109860:web:32ffe974bcd00200700db1",
  measurementId: "G-KL57K8VWQQ",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
