import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC9TBLmyBOVJfbbYWEeyGqBeGIEnhcVtHg",
  authDomain: "catch-of-the-day-react-c-91c43.firebaseapp.com",
  databaseURL:
    "https://catch-of-the-day-react-c-91c43-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

// named export
export { firebaseApp };

// default export
export default base;
