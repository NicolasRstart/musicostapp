import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC-example",
  authDomain: "ost-player.firebaseapp.com",
  databaseURL: "https://ost-player-default-rtdb.firebaseio.com",
  projectId: "ost-player",
  storageBucket: "ost-player.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);