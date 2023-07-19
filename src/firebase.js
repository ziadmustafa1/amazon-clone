import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // استخدم `getAuth` بدلاً من `GetAuth`

const firebaseConfig = {
  apiKey: "AIzaSyDLV1Je6S2NhBhrbRoe0Xju6Z77aWpJdYQ",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID, // قم بإضافة `measurementId` إذا كنت تستخدمها
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // استخدم `getAuth` بدلاً من `GetAuth`
const db = getFirestore(app);

export { auth, db };