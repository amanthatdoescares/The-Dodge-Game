import { setupMenu } from "./menu.js";

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  setupMenu();
});

//MARK: music
const bgMusic = new Audio("/public/music/bgm1.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5;

// Start music automatically when page loads
window.addEventListener("load", () => {
  setTimeout(() => {
    bgMusic.play().catch(() => {});
  }, 100);
});

// MARK: Click sound
// main.js

const clickSound = new Audio("/public/sfx/click.mp3");
clickSound.volume = 0.4;

// Play sound directly in the click handler
document.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button || button.disabled) return;

  // MUST be called directly from the click event
  clickSound.currentTime = 0;
  clickSound.play();
});

