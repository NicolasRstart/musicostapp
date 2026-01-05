const data = JSON.parse(localStorage.getItem("currentOST"));
document.getElementById("title").innerText = data.title;

const audio = document.getElementById("audio");
audio.src = "../assets/audio/" + data.file;
audio.play();