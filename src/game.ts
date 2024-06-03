import * as PIXI from 'pixi.js';

const pixi = new PIXI.Application({ width: 800, height: 900 });
document.body.appendChild(pixi.view);

export class Square {
  public square: PIXI.Graphics;
  public filled: boolean;

  constructor(x: number, y: number, w: number) {
    this.square = new PIXI.Graphics();
    this.square.beginFill(0x282828);
    this.square.drawRect(0, 0, w, w);
    this.square.x = x;
    this.square.y = y;
    this.square.interactive = true;
    this.square.buttonMode = true;
    this.filled = false;
  }

  addToStage(stage: PIXI.Container) {
    stage.addChild(this.square);
  }

  fill() {
    this.square.clear();
    this.square.beginFill(0xe2c044);
    this.square.drawRect(0, 0, w, w);
    this.square.endFill();
    this.filled = true;
  }

  clear() {
    this.square.clear();
    this.square.beginFill(0x282828);
    this.square.drawRect(0, 0, w, w);
    this.square.endFill();
    this.filled = false;
  }
}

let w: number = 4;
let cols: number = Math.floor(pixi.renderer.width / w);
let rows: number = Math.floor(pixi.renderer.height / w);
let grid: Square[][] = Array.from({ length: cols }, () =>
  Array(rows).fill(null)
);

for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {
    grid[i][j] = new Square(i * w, j * w, w);
    grid[i][j].addToStage(pixi.stage);
  }
}

let isDragging = false;

let drawRadius = 4; // You can adjust this value to modify the drawing radius

// Create a new Graphics object for the circle
let circle = new PIXI.Graphics();
pixi.stage.addChild(circle);

function draw(e: MouseEvent) {
  const rect = pixi.view.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const mouseX = Math.floor(x / w);
  const mouseY = Math.floor(y / w);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const dx = i - mouseX;
      const dy = j - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance <= drawRadius) {
        grid[i][j].fill();
      }
    }
  }
}

function drawCircle(e: MouseEvent) {
  const rect = pixi.view.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  // Clear the previous circle
  circle.clear();
  // Draw a new circle at the mouse position
  circle.lineStyle(1, 0xffffff);
  circle.drawCircle(x, y, drawRadius * w);
}

pixi.view.addEventListener('mousedown', () => (isDragging = true));
pixi.view.addEventListener('mousemove', (event) => {
  if (isDragging) draw(event);
  drawCircle(event);
});
pixi.view.addEventListener('mouseup', () => (isDragging = false));

let gravity = 1; // You can adjust this value to modify the gravity

function fall() {
  for (let i = 0; i < cols; i++) {
    for (let j = rows - 2; j >= 0; j--) {
      const square = grid[i][j];
      const belowSquare = grid[i][j + 1];
      if (square.filled && !belowSquare.filled && Math.random() < gravity) {
        square.clear();
        belowSquare.fill();
      }
    }
  }
}

function glide() {
  for (let i = 0; i < cols; i++) {
    for (let j = rows - 1; j >= 0; j--) {
      const square = grid[i][j];
      if (square.filled) {
        const belowSquare = j + 1 < rows ? grid[i][j + 1] : null;
        if (belowSquare && belowSquare.filled) {
          const randomDirection = Math.random() < 0.5 ? -1 : 1;
          const nextSquareIndex = i + randomDirection;
          if (nextSquareIndex >= 0 && nextSquareIndex < cols) {
            const nextSquare = grid[nextSquareIndex][j];
            const belowNextSquare =
              j + 1 < rows ? grid[nextSquareIndex][j + 1] : null;
            if (
              !nextSquare.filled &&
              (!belowNextSquare || !belowNextSquare.filled)
            ) {
              square.clear();
              nextSquare.fill();
            }
          }
        }
      }
    }
  }
}

pixi.ticker.add(fall);
pixi.ticker.add(() => {
  fall();
  glide();
});
