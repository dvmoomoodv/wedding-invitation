import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDEWfoi8XTiwSldhJyx0l4inY2wimSq38Y",
  authDomain: "wedding-card-b7772.firebaseapp.com",
  projectId: "wedding-card-b7772",
  storageBucket: "wedding-card-b7772.appspot.com",
  messagingSenderId: "710906166452",
  appId: "1:710906166452:web:0eb15a6591c2c5cb482be1",
  measurementId: "G-78QPGJQ6T0",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { app, auth, db, analytics };
