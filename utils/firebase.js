import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAkkIGYOZsio5f0WBt0QdeDM7ezTodBdCw",
  authDomain: "todo-975f5.firebaseapp.com",
  projectId: "todo-975f5",
  storageBucket: "todo-975f5.appspot.com",
  messagingSenderId: "1016586182116",
  appId: "1:1016586182116:web:473f74be75758b820c3bf1",
  measurementId: "G-TKTJW8ZMGK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);