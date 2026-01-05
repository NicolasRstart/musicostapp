const OST_DATA = {
  game: [
    { title: "Main Theme", file: "game/main_theme.mp3" }
   ,{ title: "Main Theme", file: "game/main_theme2.mp3" }
   ,{ title: "Main Theme", file: "game/main_theme3.mp3" }
   ,{ title: "Main Theme", file: "game/main_theme4.mp3" }
   ,{ title: "Main Theme", file: "game/main_theme5.mp3" }
   ,{ title: "Main Theme", file: "game/main_theme6.mp3" }
   ,{ title: "Main Theme", file: "game/main_theme7.mp3" }
   ,{ title: "Main Theme", file: "game/main_theme8.mp3" }
   ,{ title: "Main Theme", file: "game/main_theme9.mp3" }
   ,{ title: "Main Theme", file: "game/main_theme10.mp3" }
   ,{ title: "Main Theme", file: "game/main_theme11.mp3" }
   

  ],
  anime: [
    { title: "Opening Theme", file: "anime/opening.mp3" }
  ],
  series: [
    { title: "Intro Series", file: "series/intro.mp3" }
    ]
};

function loadOST(type, elementId) {
  const list = document.getElementById(elementId);
  OST_DATA[type].forEach(ost => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
      ${ost.title}
      <button class="btn btn-sm btn-primary float-end"
        onclick="playOST('${ost.file}', '${ost.title}')">
        ▶
      </button>
    `;
    list.appendChild(li);
  });
}

function playOST(file, title) {
  localStorage.setItem("currentOST", JSON.stringify({ file, title }));
  window.location.href = "player.html";
}