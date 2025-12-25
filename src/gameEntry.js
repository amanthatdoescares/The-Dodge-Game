// src/gameEntry.js

import { createPlayer } from "./entities/player.js";
import { createScore } from "./core/score.js";
import { startGame, tryRestart } from "./core/game.js";
import { render } from "./render/renderer.js";
import { setupInput } from "./systems/input.js";

// APP READY
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// DOM REFERENCES
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// CANVAS SETUP
function setupCanvas(canvas) {
  const WIDTH = 600;
  const HEIGHT = 400;

  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  return { width: WIDTH, height: HEIGHT };
}

const { width: CANVAS_WIDTH, height: CANVAS_HEIGHT } = setupCanvas(canvas);

// CONSTANTS
const constants = {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  PLAYER_SIZE: 20,
  PLAYER_SPEED: 4,
  BLOCK_SIZE: 20,
  BLOCK_SPEED: 2,
};

// GAME STATE
const state = {
  canvas,
  ctx,
  player: createPlayer(constants),
  blocks: [],
  score: createScore(),
  gameOver: false,
  keys: { left: false, right: false },
};

setupInput(state.keys, () => {
  if (!state.gameOver) return;
  tryRestart(state, constants);
});

// RESPONSIVE CANVAS HANDLING
function getOptimalCanvasSize() {
  const maxWidth = Math.min(window.innerWidth * 0.8, 800);
  const maxHeight = Math.min(window.innerHeight * 0.6, 600);
  
  return {
    width: Math.max(300, Math.floor(maxWidth)),
    height: Math.max(200, Math.floor(maxHeight))
  };
}

function handleResize() {
  const { width, height } = getOptimalCanvasSize();
  const dpr = window.devicePixelRatio || 1;

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  constants.CANVAS_WIDTH = width;
  constants.CANVAS_HEIGHT = height;

  if (state.player.x > width - state.player.size) {
    state.player.x = width - state.player.size;
  }
}

window.addEventListener("resize", handleResize);

// START GAME
const renderFn = () => {
  render(ctx, canvas, state.player, state.blocks, state.score, state.gameOver);
};

startGame(state, renderFn, constants);
