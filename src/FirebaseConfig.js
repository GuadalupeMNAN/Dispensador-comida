import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyDhIVvpsYHV-z_qs6UMl2m5vnyc2AjWByQ",
  authDomain: "domo-ut-8fe71.firebaseapp.com",
  projectId: "domo-ut-8fe71",
  storageBucket: "domo-ut-8fe71.appspot.com",
  messagingSenderId: "1068388488323",
  appId: "1:1068388488323:web:4918b53be006729dd677b6"
};

const app = initializeApp (FirebaseConfig);
const bd = getFirestore (app);


export default {app, bd};
