// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8lIEdTTwEbS6RoEBEjfOLEOPWlOFXaOA",
  authDomain: "pantry-track-ec2ca.firebaseapp.com",
  projectId: "pantry-track-ec2ca",
  storageBucket: "pantry-track-ec2ca.appspot.com",
  messagingSenderId: "693468131945",
  appId: "1:693468131945:web:58c495c06b9916e1e468f8",
  measurementId: "G-JVB9QDTDYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}