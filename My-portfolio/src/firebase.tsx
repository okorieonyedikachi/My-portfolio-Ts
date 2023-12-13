import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "portfolio-contactform-577f6.firebaseapp.com",
  projectId: "portfolio-contactform-577f6",
  storageBucket: "portfolio-contactform-577f6.appspot.com",
  messagingSenderId: "263399401384",
  appId: "1:263399401384:web:7ac85d49f79fded4fb5f9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db