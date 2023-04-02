import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAk6l-cKL7j79Hx2dn7MXkASY59DZKkldA",
  authDomain: "tiktok---jornada-6531d.firebaseapp.com",
  projectId: "tiktok---jornada-6531d",
  storageBucket: "tiktok---jornada-6531d.appspot.com",
  messagingSenderId: "504648984868",
  appId: "1:504648984868:web:9bdfd3ab4fe3159298ebb1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export default db;