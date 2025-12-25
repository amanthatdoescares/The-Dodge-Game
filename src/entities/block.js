export function createBlock(constants) {
  return {
    x: Math.random() * (constants.CANVAS_WIDTH - constants.BLOCK_SIZE),
    y: -constants.BLOCK_SIZE,
    size: constants.BLOCK_SIZE,
    speed: constants.BLOCK_SPEED,
  };
}

export function updateBlock(block, canvasWidth, canvasHeight) {
  block.y += block.speed;
}
