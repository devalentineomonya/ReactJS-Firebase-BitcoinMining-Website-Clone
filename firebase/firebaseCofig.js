// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM5R1T2J1zbVrLODgc0bQALSKErnMa08c",
  authDomain: "digitalminingvip.firebaseapp.com",
  projectId: "digitalminingvip",
  storageBucket: "digitalminingvip.appspot.com",
  messagingSenderId: "846165102607",
  appId: "1:846165102607:web:b30dd88bcbd45823c1137a",
  measurementId: "G-KYTYMLSPJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);