import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDCpMoyI89aTykstUV4s5CjXy-mqjhjqRc",
  authDomain: "testapp-e8290.firebaseapp.com",
  projectId: "testapp-e8290",
  storageBucket: "testapp-e8290.appspot.com",
  messagingSenderId: "689025438449",
  appId: "1:689025438449:web:6572e5d910a5e48affcf50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);