export function render(ctx, canvas, player, blocks, score, gameOver) {
  // clear frame
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // player
  if (player.image && player.image.complete) {
    ctx.drawImage(player.image, player.x, player.y, player.size, player.size);
  } else {
    ctx.fillStyle = "white";
    ctx.fillRect(player.x, player.y, player.size, player.size);
  }

  // blocks
  for (const b of blocks) {
    if (b.image && b.image.complete) {
      ctx.drawImage(b.image, b.x, b.y, b.size, b.size);
    } else {
      ctx.fillStyle = "red";
      ctx.fillRect(b.x, b.y, b.size, b.size);
    }
  }

  // score
  ctx.fillStyle = "white";
  ctx.font = "16px sans-serif";
  ctx.fillText(`Score: ${Math.floor(score.value)}`, 10, 20);

  //end screen
  if (gameOver) {
    drawEndScreen(ctx, canvas, score);
  }
}
function drawEndScreen(ctx, canvas, score) {
  // dark overlay
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  ctx.font = "48px sans-serif";
  ctx.fillText(
    "Game Over",
    canvas.width / 2,
    canvas.height / 2 - 20
  );

  ctx.font = "20px sans-serif";
  ctx.fillText(
    `Final Score: ${Math.floor(score.value)}`,
    canvas.width / 2,
    canvas.height / 2 + 20
  );

  ctx.font = "14px sans-serif";
  ctx.fillText(
    "Press R to Restart",
    canvas.width / 2,
    canvas.height / 2 + 50
  );

  ctx.textAlign = "left"; // reset
}

