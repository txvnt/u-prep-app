import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_eBWRGdp7ClS9puMINyC2UWIwVcM28ks",
  authDomain: "u-prep.firebaseapp.com",
  databaseURL: "https://u-prep.firebaseio.com",
  projectId: "u-prep",
  storageBucket: "u-prep.appspot.com",
  messagingSenderId: "663512966540",
  appId: "1:663512966540:web:7b38fe1043b2b2067862a9",
  measurementId: "G-8HH53PWLEY"
};

export const fire = firebase.initializeApp(firebaseConfig);
const baseDb = fire.database();
export const db = baseDb;