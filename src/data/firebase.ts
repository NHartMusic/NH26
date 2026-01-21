
import { initializeApp } from 'firebase/app'
import {
    collection,
    getFirestore,
} from 'firebase/firestore'
  
import { getAnalytics } from "firebase/analytics"

  const firebaseConfig = {
    apiKey: "AIzaSyAJBcXBJZ87ixAWyh2GGDPOozIlGNygkVE",
    authDomain: "nh26-976e2.firebaseapp.com",
    projectId: "nh26-976e2",
    storageBucket: "nh26-976e2.firebasestorage.app",
    messagingSenderId: "11644452752",
    appId: "1:11644452752:web:d30e3910fb18af2090fd15",
    measurementId: "G-58T1RDJNYS"
  }

  // Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const analytics = getAnalytics(app)
