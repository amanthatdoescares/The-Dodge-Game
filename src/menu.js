import { goToGame, goToLeaderboard, goToAbout, goToMenu } from "./router.js";

export function setupMenu() {
  const playBtn = document.getElementById("startBtn");
  const leaderboardBtn = document.getElementById("leaderboardBtn");
  const aboutBtn = document.getElementById("aboutBtn");
  const backBtn = document.getElementById("backBtn");

  // Use the router for navigation
  playBtn.onclick = goToGame;
  leaderboardBtn.onclick = goToLeaderboard;
  aboutBtn.onclick = goToAbout;
  backBtn.onclick = goToMenu;
}
