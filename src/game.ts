import { Application, Graphics } from 'pixi.js';
import { Particle, Sand } from './particles';
import { fall, glide } from './physics';

const BACKGROUND_COLOR = 0x212121;
const DEFAULT_COLOR = 0xe2c044;
let APP_WIDTH = window.innerWidth - 200;
let APP_HEIGHT = window.innerHeight - 200;

const CELL_SIZE = 4;
let DRAW_RADIUS = 4;

const viewCanvas = document.createElement('canvas');
viewCanvas.id = 'game-canvas';

const pixi = new Application({
  width: APP_WIDTH,
  height: APP_HEIGHT,
  backgroundColor: BACKGROUND_COLOR,
  view: viewCanvas,
});

if (!document.getElementById('game-canvas')) {
  document.body.appendChild(pixi.view);
}

export enum ParticleType {
  Sand,
}

const colorPicker = document.getElementById('color-picker') as HTMLInputElement;
const resetBtn = document.getElementById('reset-color') as HTMLButtonElement;
const brushSize = document.getElementById('brush-size') as HTMLInputElement;
const clearBtn = document.getElementById('clear-grid') as HTMLButtonElement;

let cols: number;
let rows: number;
let grid: Particle[][];
let velocityGrid: number[][];

let currentColor: number = DEFAULT_COLOR;
let particleType: ParticleType = ParticleType.Sand;

let isDragging = false;

const rect = pixi.view.getBoundingClientRect();

pixi.view.addEventListener('mousedown', () => {
  isDragging = true;
  stopGameLoop();
});

pixi.view.addEventListener('mousemove', (event) => {
  if (isDragging) draw(event);
});

pixi.view.addEventListener('mouseup', () => {
  isDragging = false;
  startGameLoop();
});

pixi.view.addEventListener('touchstart', () => {
  isDragging = true;
  stopGameLoop();
});

pixi.view.addEventListener('touchmove', (event) => {
  if (isDragging) draw(event);
});

pixi.view.addEventListener('touchend', () => {
  isDragging = false;
  startGameLoop();
});

colorPicker.addEventListener('input', () => {
  currentColor = parseInt(colorPicker.value.slice(1), 16);
});
resetBtn.addEventListener('click', () => {
  currentColor = DEFAULT_COLOR;
});
brushSize.addEventListener('input', () => {
  DRAW_RADIUS = brushSize.valueAsNumber;
});

clearBtn.addEventListener('click', clearGrid);

let circle = new Graphics();
pixi.stage.addChild(circle);

function draw(e: MouseEvent | TouchEvent) {
  const clientX =
    (e as MouseEvent).clientX ?? (e as TouchEvent).touches[0].clientX;
  const clientY =
    (e as MouseEvent).clientY ?? (e as TouchEvent).touches[0].clientY;
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const mouseX = Math.floor(x / CELL_SIZE);
  const mouseY = Math.floor(y / CELL_SIZE);

  const minX = Math.max(0, mouseX - DRAW_RADIUS);
  const maxX = Math.min(cols, mouseX + DRAW_RADIUS);
  const minY = Math.max(0, mouseY - DRAW_RADIUS);
  const maxY = Math.min(rows, mouseY + DRAW_RADIUS);

  for (let i = minX; i < maxX; i++) {
    for (let j = minY; j < maxY; j++) {
      const dx = i - mouseX;
      const dy = j - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance <= DRAW_RADIUS) {
        grid[i][j].setColor(currentColor);
        grid[i][j].fill();
        velocityGrid[i][j] = dx / DRAW_RADIUS;
      }
    }
  }
}

function clearGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].clear();
      velocityGrid[i][j] = 0;
    }
  }
}

export function initGame() {
  cols = Math.floor(pixi.renderer.width / CELL_SIZE);
  rows = Math.floor(pixi.renderer.height / CELL_SIZE);
  grid = Array.from({ length: cols }, () => Array(rows).fill(0));
  velocityGrid = Array.from({ length: cols }, () => Array(rows).fill(0));

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let color = DEFAULT_COLOR;
      switch (particleType) {
        case ParticleType.Sand:
          grid[i][j] = new Sand(
            i * DRAW_RADIUS,
            j * DRAW_RADIUS,
            DRAW_RADIUS,
            color
          );
          break;
      }
      grid[i][j].addToStage(pixi.stage);
    }
  }
  startGameLoop();
}

function stopGameLoop() {
  cancelAnimationFrame(gameLoopId);
}

function startGameLoop() {
  gameLoopId = requestAnimationFrame(loop);
}
let gameLoopId: number;
let lastTime = performance.now();
function loop() {
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;

  if (!isDragging) {
    if (deltaTime >= 16) {
      fall();
      glide();
      lastTime = currentTime;
    }
  }

  gameLoopId = requestAnimationFrame(loop);
}

initGame();
export { cols, rows, grid, velocityGrid };
