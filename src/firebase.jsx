import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUrZ2Fm8ZG5rfZyUBYMR_Ywx-G5m9cu2A",
  authDomain: "bit-forms01.firebaseapp.com",
  databaseURL: "https://bit-forms01-default-rtdb.firebaseio.com",
  projectId: "bit-forms01",
  storageBucket: "bit-forms01.appspot.com",
  messagingSenderId: "448461443912",
  appId: "1:448461443912:web:c8647aff606b0deffcd97d",
};

firebase.initializeApp(firebaseConfig);

const fireDB = firebase.database().ref();

export default fireDB;
