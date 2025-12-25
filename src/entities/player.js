export function createPlayer(constants) {
  return {
    x: constants.CANVAS_WIDTH / 2 - constants.PLAYER_SIZE / 2,
    y: constants.CANVAS_HEIGHT - 50,
    size: constants.PLAYER_SIZE,
    speed: constants.PLAYER_SPEED,
  };
}

export function updatePlayer(player, keys, canvasWidth) {
  if (keys.left) player.x -= player.speed;
  if (keys.right) player.x += player.speed;

  if (player.x < 0) player.x = 0;
  if (player.x + player.size > canvasWidth) {
    player.x = canvasWidth - player.size;
  }
}
