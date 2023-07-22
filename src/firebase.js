import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQvLH2hf9fiKLBULij0Az6qjmA5rFiUvo",
  authDomain: "clone-cdeff.firebaseapp.com",
  projectId: "clone-cdeff",
  storageBucket: "clone-cdeff.appspot.com",
  messagingSenderId: "51240467123",
  appId: "1:51240467123:web:ba60fb421467793f980ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Authentication instances
export const db = getFirestore(app);
export const auth = getAuth(app);




