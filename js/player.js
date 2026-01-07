const data = JSON.parse(localStorage.getItem("currentOST"));
document.getElementById("title").innerText = data.title;

const audio = document.getElementById("audio");
audio.src = "../assets/audio/" + data.file;
audio.play();

import { signOut } from 
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase.js";

document.getElementById("logout").addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});
