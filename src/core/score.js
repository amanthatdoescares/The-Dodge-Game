export function createScore() {
  return {
    value: 0,
    lastTime: null,
  };
}
export function updateScore(score, currentTime, gameOver) {
  if (score.lastTime === null) {
    score.lastTime = currentTime;
    return;
  }
  if (!gameOver) {
    const delta = currentTime - score.lastTime;
    score.value += delta / 1000;
  }
  score.lastTime = currentTime;
}

export function resetScore(score) {
  score.value = 0;
  score.lastTime = null;
}
