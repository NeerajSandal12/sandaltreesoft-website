// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
// import firebase from 'firebase/app';
import 'firebase/database';
//  firebase = require('firebase/app');
// require('firebase/auth');
// require('firebase/database');
const firebaseConfig = {
  apiKey: "AIzaSyAeFt0CCvvyHrzfINJyCcMNLme1o1ajPD4",
  authDomain: "neeraj-aac67.firebaseapp.com",
  projectId: "neeraj-aac67",
  storageBucket: "neeraj-aac67.appspot.com",
  messagingSenderId: "468650792034",
  appId: "1:468650792034:web:4ad7a71ac6a5e1c2c7ed3b"
};
// const app = initializeApp(firebaseConfig);
const fireDb=firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
// {
//     "rules": {
//       ".read": "now < 1678559400000",  // 2023-3-12
//       ".write": "now < 1678559400000",  // 2023-3-12
//     }
//   }