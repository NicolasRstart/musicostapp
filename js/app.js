const gameTracks = [
  {
    title: "Devil Trigger – Devil May Cry 5",
    videoId: "eICijnr1k_I"
  },
  {
    title: "Stained, Brutal Calamity – Terraria Calamity Mod",
    videoId: "vS2SIGF3qhk"
  },
  {
    title: "Hopes and Dreams – Undertale",
    videoId: "HA3Ks8NLS-Y"
  },
  {
    title: "Sealed Vessel – Hollow Knight",
    videoId: "ze0Rk-m0w2A"
  }
];

const gameContainer = document.getElementById("tracks");

gameTracks.forEach(track => {
  gameContainer.innerHTML += `
    <div class="track">
      <h3>${track.title}</h3>
      <iframe
        src="https://www.youtube.com/embed/${track.videoId}"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  `;
});

const animeTracks = [
  {
    title: "Homura – LiSA (Demon Slayer)",
    videoId: "4DXeP2H0oWQ"
  },
  {
    title: "New Genesis – Ado (One Piece Film Red)",
    videoId: "1FliVTcX8bQ"
  },
  {
    title: "Sparkle – RADWIMPS (Your Name)",
    videoId: "SCQOw1UBsVI"
  },
  {
    title: "Fireworks – DAOKO x Kenshi Yonezu",
    videoId: "-tKVN2mAKRI"
  }
];

const animeContainer = document.getElementById("tracks");

animeTracks.forEach(track => {
  animeContainer.innerHTML += `
    <div class="track">
      <h3>${track.title}</h3>
      <iframe
        src="https://www.youtube.com/embed/${track.videoId}"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  `;
});
