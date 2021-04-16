import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// Firebase web config
const config = {
  apiKey: "AIzaSyCQyhBiCNGaLfBgiX9A_egf5sT5frUNH0k",
  authDomain: "project-lime-83975.firebaseapp.com",
  projectId: "project-lime-83975",
  storageBucket: "project-lime-83975.appspot.com",
  messagingSenderId: "549028072719",
  appId: "1:549028072719:web:9f595e613e8baeab60027a",
  measurementId: "G-GZ2CB2R08W",
}

let instance = null

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance

    instance = firebase.initializeApp(config)
    return instance
  }

  return null
}
