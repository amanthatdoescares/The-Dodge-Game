import { updatePlayer, createPlayer } from "../entities/player.js";
import { updateBlock, createBlock } from "../entities/block.js";
import { updateScore, resetScore } from "./score.js";
import { isColliding } from "../systems/collision.js";

let spawnTimer = 0;
let lastSpawnTime = null;
const SPAWN_INTERVAL = 1500; // ms

//player update
function updatePlayerStep(state) {
  updatePlayer(state.player, state.keys, state.canvas.width);
}

//spawn logic
function handleSpawning(state, time, constants) {
  if (lastSpawnTime === null) {
    lastSpawnTime = time;
    return;
  }

  spawnTimer += time - lastSpawnTime;
  lastSpawnTime = time;

  if (spawnTimer >= SPAWN_INTERVAL) {
    state.blocks.push(createBlock(constants));
    spawnTimer = 0;
  }
}

//block update and check collision
function updateBlocksAndCheckCollision(state) {
  for (const block of state.blocks) {
    updateBlock(block, state.canvas.width, state.canvas.height);

    if (isColliding(state.player, block)) {
      state.gameOver = true;
      return;
    }
  }
}

//clean up off-screen block
function cleanupBlocks(state) {
  state.blocks = state.blocks.filter(
    (block) => block.y <= state.canvas.height + block.size
  );
}

export function startGame(state, renderer, constants) {
  function loop(time) {
    if (!state.gameOver) {
      updatePlayerStep(state);
      handleSpawning(state, time, constants);

      const collided = updateBlocksAndCheckCollision(state);

      if (collided) {
        state.gameOver = true;
      }

      cleanupBlocks(state);
    }

    updateScore(state.score, time, state.gameOver);
    renderer();

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

export function resetGame(state, constants) {
  state.gameOver = false;

  // reset score
  resetScore(state.score);

  // reset entities
  state.player = createPlayer(constants);
  state.blocks = [];

  // reset spawner
  spawnTimer = 0;
  lastSpawnTime = null;
}

export function tryRestart(state, constants) {
  if (!state.gameOver) return;
  resetGame(state, constants);
}
