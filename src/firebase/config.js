 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDIguwfruG-De0zNWYrkGRSBAfns5-Q41E",
  authDomain: "miniblog-c24a2.firebaseapp.com",
  projectId: "miniblog-c24a2",
  storageBucket: "miniblog-c24a2.appspot.com",
  messagingSenderId: "486350280200",
  appId: "1:486350280200:web:c0741f5ae67be928ffa3bd"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };