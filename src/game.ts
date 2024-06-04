import * as PIXI from 'pixi.js';
import { Particle, Sand } from './particles';
import { fall, glide } from './physics';

const BACKGROUND_COLOR = 0x212121;
const DEFAULT_COLOR = 0xe2c044;
const CELL_SIZE = 4;
let DRAW_RADIUS = 4;

const pixi = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: BACKGROUND_COLOR,
});
document.body.appendChild(pixi.view);

export enum ParticleType {
  Sand,
}

const colorPicker = document.getElementById('color-picker') as HTMLInputElement;
const resetBtn = document.getElementById('reset-color') as HTMLButtonElement;
const brushSize = document.getElementById('brush-size') as HTMLInputElement;
const clearBtn = document.getElementById('clear-grid') as HTMLButtonElement;

let cols: number = Math.floor(pixi.renderer.width / CELL_SIZE);
let rows: number = Math.floor(pixi.renderer.height / CELL_SIZE);
let grid: Particle[][] = Array.from({ length: cols }, () =>
  Array(rows).fill(null)
);

let currentColor: number = DEFAULT_COLOR;
let particleType: ParticleType = ParticleType.Sand;

let isDragging = false;
pixi.view.addEventListener('mousedown', () => (isDragging = true));
pixi.view.addEventListener('mousemove', (event) => {
  if (isDragging) draw(event);
  drawCircle(event);
});
pixi.view.addEventListener('mouseup', () => (isDragging = false));

pixi.view.addEventListener('touchstart', () => (isDragging = true));
pixi.view.addEventListener('touchmove', (event) => {
  if (isDragging) draw(event);
  drawCircle(event);
});
pixi.view.addEventListener('touchend', () => (isDragging = false));

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

// Create a new Graphics object for the circle
let circle = new PIXI.Graphics();
pixi.stage.addChild(circle);

function draw(e: MouseEvent | TouchEvent) {
  const rect = pixi.view.getBoundingClientRect();
  const clientX =
    (e as MouseEvent).clientX ?? (e as TouchEvent).touches[0].clientX;
  const clientY =
    (e as MouseEvent).clientY ?? (e as TouchEvent).touches[0].clientY;
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const mouseX = Math.floor(x / CELL_SIZE);
  const mouseY = Math.floor(y / CELL_SIZE);

  // Calculate the bounds of the circle
  const minX = Math.max(0, mouseX - DRAW_RADIUS);
  const maxX = Math.min(cols, mouseX + DRAW_RADIUS);
  const minY = Math.max(0, mouseY - DRAW_RADIUS);
  const maxY = Math.min(rows, mouseY + DRAW_RADIUS);

  // Only iterate over the cells within the bounds
  for (let i = minX; i < maxX; i++) {
    for (let j = minY; j < maxY; j++) {
      const dx = i - mouseX;
      const dy = j - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance <= DRAW_RADIUS) {
        grid[i][j].setColor(currentColor);
        grid[i][j].fill();
      }
    }
  }
}

function drawCircle(e: MouseEvent | TouchEvent) {
  const rect = pixi.view.getBoundingClientRect();
  const clientX =
    (e as MouseEvent).clientX ?? (e as TouchEvent).touches[0].clientX;
  const clientY =
    (e as MouseEvent).clientY ?? (e as TouchEvent).touches[0].clientY;
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  // Clear the previous circle
  circle.clear();
  // Draw a new circle at the mouse position
  circle.beginFill(0xffffff, 0.2);
  circle.drawCircle(x, y, DRAW_RADIUS * CELL_SIZE);
}

function clearGrid() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].clear();
    }
  }
}

// Create a grid of particles
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
      // Other particle types here
    }
    grid[i][j].addToStage(pixi.stage);
  }
}

function startGameLoop() {
  let lastTime = performance.now();
  function loop() {
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTime;
    if (deltaTime >= 16) {
      // Limit the frame rate to approximately 60 frames per second
      fall();
      glide();
      lastTime = currentTime;
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

startGameLoop();

export { cols, rows, grid, currentColor };
