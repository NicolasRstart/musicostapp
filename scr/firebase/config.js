import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO",
  databaseURL: "TU_DATABASE_URL",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_BUCKET",
  messagingSenderId: "ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);