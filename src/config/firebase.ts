import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBW9_SrKp_sB1JbpFjEMYJPCzuY1PcsaUY",
  authDomain: "difajobs.firebaseapp.com",
  projectId: "difajobs",
  storageBucket: "difajobs.appspot.com",
  messagingSenderId: "616916027643",
  appId: "1:616916027643:web:6bf85326475c8e3bd6885e",
  measurementId: "G-RYZR51YT50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);