import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    window.location.href = "index.html";
  } catch (err) {
    error.innerText = err.message;
  }
});

document.getElementById("registerBtn").addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    window.location.href = "index.html";
  } catch (err) {
    error.innerText = err.message;
  }
});

onAuthStateChanged(auth, user => {
  if (user) {
    console.log("Usuario logueado:", user.email);
  }
});
