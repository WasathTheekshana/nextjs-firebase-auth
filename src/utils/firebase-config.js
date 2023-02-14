import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGwFRI0q49SkCr8yQj-tyR8d71cONChdc",
  authDomain: "nextjs-auth-cded4.firebaseapp.com",
  projectId: "nextjs-auth-cded4",
  storageBucket: "nextjs-auth-cded4.appspot.com",
  messagingSenderId: "536237373564",
  appId: "1:536237373564:web:3bf370f5c8b276bbba71f9",
  measurementId: "G-QJ9FS4ZX7Z",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
