#Dodge Game – File-by-File TODO List
##Phase 0: Sanity check (once)

 Run the bash script

 Verify folders exist

 Open the project in your editor

Stop here if anything feels off.

##Phase 1: Entry point & canvas
public/index.html

 Add basic HTML boilerplate

 Add <canvas> with fixed width/height

 Link style.css

 Load src/main.js using <script type="module">

 Confirm blank page loads (no errors)

Goal: browser opens, nothing crashes.

styles/style.css

 Remove default margins

 Center the canvas

 Set background color

 Make canvas visible (border or background)

Goal: you can see the canvas.

##Phase 2: Wiring & game loop
src/main.js

 Grab canvas and context

 Import game loop from core/game.js

 Call a start() function

 Log something to console (sanity)

Goal: JavaScript is executing.

src/core/game.js

 Create start() function

 Create update() function (empty)

 Create render() function (clear screen)

 Implement requestAnimationFrame loop

Goal: working game loop, even if empty.

##Phase 3: Game state & config
src/core/state.js

 Store isRunning

 Store score

 Store gameOver

 Export state object

Goal: single source of truth.

src/core/constants.js

 Canvas width/height

 Player size & speed

 Block size & speed

 Spawn rate

Goal: no magic numbers anywhere else.

##Phase 4: Player entity
src/entities/player.js

 Define player position

 Movement left/right

 Screen bounds check

 Update function

Goal: player can move.

##Phase 5: Input system
src/systems/input.js

 Listen for keydown

 Listen for keyup

 Track pressed keys

 Export input state

Goal: clean input, no logic here.

##Phase 6: Blocks & spawning
src/entities/block.js

 Block constructor

 Move block down

 Mark block for removal

Goal: falling objects exist.

src/systems/spawner.js

 Timer logic

 Spawn blocks periodically

 Push blocks into array

Goal: continuous challenge.

##Phase 7: Collision
src/systems/collision.js

 Rectangle collision function

 Check player vs blocks

 Trigger game over

Goal: rules are enforced.

##Phase 8: Rendering
src/render/renderer.js

 Clear canvas

 Draw player

 Draw blocks

 Draw score

Goal: visuals separated from logic.

##Phase 9: Polish (optional)

 Restart on key press

 Pause support

 Difficulty increase over time

Only after everything works.

##Phase 10: Future (do not touch yet)
src/net/socket.js

 Leave empty

 Comment intent

server/

 Ignore until leaderboard phase