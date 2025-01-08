const playPauseButton = document.getElementById("playPauseButton");
const muteButton = document.getElementById("muteButton");
const loopButton = document.getElementById("loopButton");
const audio = document.getElementById("audio");
const volumeControl = document.getElementById("volumeControl");

let isMuted = false;
let isLooping = false;

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "Pause";
  } else {
    audio.pause();
    playPauseButton.textContent = "Play";
  }
});

muteButton.addEventListener("click", () => {
  isMuted = !isMuted;
  audio.muted = isMuted;
  muteButton.textContent = isMuted ? "Unmute" : "Mute";
  muteButton.classList.toggle("muted", isMuted);
});

loopButton.addEventListener("click", () => {
  isLooping = !isLooping;
  audio.loop = isLooping;
  loopButton.textContent = isLooping ? "Loop On" : "Loop Off";
  loopButton.classList.toggle("looping", isLooping);
});

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});
// let menuList = document.getElementById("menuList");
// menuList.style.maxHeight = "0px";
// function toggleMenu() {
//   if (menuList.style.maxHeight === "0px") {
//     menuList.style.maxHeight = "300px";
//   } else {
//     menuList.style.maxHeight = "0px";
//   }
// }
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "420px"; // Expand the menu
  } else {
    menuList.style.maxHeight = "0px"; // Collapse the menu
  }
}

// Close the menu when a navigation link is clicked
const navLinks = document.querySelectorAll("#menuList li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuList.style.maxHeight = "0px"; // Collapse the menu
  });
});

