import "firebase/auth";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKcxpcF8zMl_ksL0BLlBhu4iC7gpO4sLM",
  authDomain: "valorem-45c01.firebaseapp.com",
  projectId: "valorem-45c01",
  storageBucket: "valorem-45c01.appspot.com",
  messagingSenderId: "124395903114",
  appId: "1:124395903114:web:deca83a64dc75d1e7a3573",
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default firebase;
