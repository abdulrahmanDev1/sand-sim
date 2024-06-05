import { cols, rows, grid, velocityGrid } from './game';

const gravityRange = document.getElementById('gravity') as HTMLInputElement;
let gravity = 0.5;
gravityRange.addEventListener('input', () => {
  gravity = gravityRange.valueAsNumber;
});

export function fall() {
  for (let i = 0; i < cols; i++) {
    for (let j = rows - 2; j >= 0; j--) {
      const square = grid[i][j];
      if (square.filled) {
        let velocity = velocityGrid[i][j];
        velocity += gravity;
        velocityGrid[i][j] = velocity;

        let newPos = Math.min(rows - 1, Math.floor(j + velocity));

        if (newPos > j) {
          let moved = false;
          for (let y = newPos; y > j; y--) {
            if (!grid[i][y].filled) {
              grid[i][j].clear();
              grid[i][y].setColor(square.color);
              grid[i][y].fill();
              velocityGrid[i][y] = velocity;
              velocityGrid[i][j] = 0;
              moved = true;
              break;
            } else if (i > 0 && !grid[i - 1][y].filled) {
              grid[i][j].clear();
              grid[i - 1][y].setColor(square.color);
              grid[i - 1][y].fill();
              velocityGrid[i - 1][y] = velocity;
              velocityGrid[i][j] = 0;
              moved = true;
              break;
            } else if (i < cols - 1 && !grid[i + 1][y].filled) {
              grid[i][j].clear();
              grid[i + 1][y].setColor(square.color);
              grid[i + 1][y].fill();
              velocityGrid[i + 1][y] = velocity;
              velocityGrid[i][j] = 0;
              moved = true;
              break;
            }
          }
          if (!moved) {
            velocityGrid[i][j] = 0; // Reset velocity if no movement occurred
          }
        }
      }
    }
  }
}

export function glide() {
  for (let i = 0; i < cols; i++) {
    for (let j = rows - 1; j >= 0; j--) {
      const square = grid[i][j];
      if (square.filled) {
        const belowSquare = j + 1 < rows ? grid[i][j + 1] : null;
        if (belowSquare && belowSquare.filled) {
          const direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose left or right
          const nextSquareIndex = i + direction;
          if (nextSquareIndex >= 0 && nextSquareIndex < cols) {
            const nextSquare = grid[nextSquareIndex][j];
            const belowNextSquare =
              j + 1 < rows ? grid[nextSquareIndex][j + 1] : null;
            if (
              !nextSquare.filled &&
              (!belowNextSquare || !belowNextSquare.filled)
            ) {
              square.clear();
              nextSquare.setColor(square.color);
              nextSquare.fill();
              velocityGrid[nextSquareIndex][j] = velocityGrid[i][j];
              velocityGrid[i][j] = 0;
            }
          }
        }
      }
    }
  }
}
