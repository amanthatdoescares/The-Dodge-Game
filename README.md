# The Dodge Game

A fast-paced browser-based dodge game built from scratch using vanilla JavaScript, HTML5 Canvas, and modern ES6 modules. Navigate your character to avoid falling blocks and survive as long as possible to achieve high scores.

![Game Preview](public/pictures/homescreen.png)

## 🎮 Game Features

- **Fast-paced Gameplay**: Dodge falling blocks in an endless survival challenge
- **Real-time Scoring**: Track your survival time with precise score calculations
- **Responsive Controls**: Smooth left/right movement controls
- **Modular Architecture**: Clean, maintainable code structure using ES6 modules
- **Audio Experience**: Background music and sound effects for immersive gameplay
- **Visual Polish**: SVG-based UI elements and video backgrounds
- **Leaderboard System**: Compete with other players (server-side leaderboard)
- **Mobile-Friendly**: Responsive design that works on various screen sizes

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dodge-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to start playing!

### Alternative Setup

If you prefer to run without the Node.js server, you can serve the files using any static file server:

```bash
# Using Python's built-in server
python -m http.server 8000

# Using Live Server (VS Code extension)
# Right-click on public/index.html and select "Open with Live Server"
```

## 🎯 How to Play

1. **Start**: Click the "Play" button on the main menu
2. **Control**: Use arrow keys (← →) or A/D keys to move your character
3. **Objective**: Avoid all falling blocks for as long as possible
4. **Scoring**: Your score increases based on survival time
5. **Game Over**: Collision with any block ends the game
6. **Restart**: Click the restart button to try again and beat your high score

### Controls
- **Left Arrow** / **A**: Move left
- **Right Arrow** / **D**: Move right
- **Mouse Click**: Interact with UI elements and restart game

## 🏗️ Project Architecture

The game follows a clean, modular architecture pattern:

```
src/
├── core/           # Core game logic and state management
│   ├── game.js     # Main game loop and state management
│   ├── score.js    # Score calculation and tracking
│   ├── state.js    # Game state management
│   └── constants.js # Game constants and configuration
├── entities/       # Game objects and entities
│   ├── player.js   # Player character logic
│   └── block.js    # Falling obstacle logic
├── systems/        # Game systems and utilities
│   ├── collision.js # Collision detection
│   ├── input.js    # Input handling
│   └── spawner.js  # Block spawning logic
├── render/         # Rendering and visual systems
│   └── renderer.js # Canvas rendering
├── net/            # Networking and server communication
│   └── socket.js   # Socket.io integration
├── router.js       # Page navigation
├── menu.js         # Menu system
├── main.js         # Entry point and global setup
└── gameEntry.js    # Game initialization
```

### Key Components

- **Game Loop**: Runs at 60 FPS using `requestAnimationFrame`
- **State Management**: Centralized state handling for consistent game data
- **Collision System**: Efficient collision detection between player and blocks
- **Spawning System**: Timed block generation with increasing difficulty
- **Rendering Engine**: Canvas-based 2D rendering with smooth animations
- **Audio System**: Background music and sound effect management

## 🎨 Assets and Media

The game includes various multimedia assets:

- **Graphics**: SVG-based UI elements for crisp, scalable graphics
- **Audio**: Background music (bgm1.mp3) and sound effects (click.mp3)
- **Video**: Background videos for enhanced visual experience
- **Images**: Game icons and visual elements

All assets are optimized for web delivery and cached for performance.

## 🔧 Technologies Used

- **Frontend**: 
  - Vanilla JavaScript (ES6+)
  - HTML5 Canvas for game rendering
  - CSS3 for styling and animations
  - SVG for UI graphics
  
- **Backend**:
  - Node.js server
  - Express.js framework
  - Socket.io for real-time communication
  
- **Development**:
  - ES6 Modules for modular architecture
  - Modern JavaScript features (arrow functions, destructuring, etc.)
  - Canvas API for 2D graphics
  - Web Audio API for sound management

## 📱 Browser Compatibility

- **Chrome**: 60+ (recommended)
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

*Note: Game requires modern browser with ES6 module support*

## 🛠️ Development

### Project Structure
```
dodge-game/
├── public/                 # Static assets and HTML pages
│   ├── pages/             # HTML pages (index.html, game.html)
│   ├── styles/            # CSS files
│   ├── music/             # Background music
│   ├── sfx/               # Sound effects
│   ├── background video/  # Background videos
│   └── *.svg              # SVG graphics
├── server/                # Node.js server
│   ├── index.js          # Server entry point
│   └── leaderboard.js    # Leaderboard logic
├── src/                   # JavaScript source code
├── styles/               # Additional stylesheets
└── package.json          # Project configuration
```

### Available Scripts

- `npm start`: Start development server
- `npm run build`: Build for production (if build process is configured)
- `npm test`: Run tests (if configured)

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📊 Performance

- **Frame Rate**: 60 FPS gameplay
- **Load Time**: Optimized asset loading for quick startup
- **Memory Usage**: Efficient object pooling and cleanup
- **Responsiveness**: Smooth controls with minimal input lag

## 🎵 Audio Credits

- Background music and sound effects are included for demonstration purposes
- Consider replacing with your own licensed audio content for production use

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern web technologies for optimal performance
- Inspired by classic arcade dodge games
- Designed with mobile-first responsive principles

---

**Enjoy playing The Dodge Game!** 🎮

For support, feature requests, or bug reports, please open an issue in the repository.
