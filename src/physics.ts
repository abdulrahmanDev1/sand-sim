import { cols, rows, grid } from './game';

const gravityRange = document.getElementById('gravity') as HTMLInputElement;
let gravity = 0.9;
gravityRange.addEventListener('input', () => {
  gravity = gravityRange.valueAsNumber;
});

export function fall() {
  for (let i = 0; i < cols; i++) {
    for (let j = rows - 2; j >= 0; j--) {
      const square = grid[i][j];
      const belowSquare = grid[i][j + 1];
      if (square.filled && !belowSquare.filled && Math.random() < gravity) {
        square.clear();
        belowSquare.setColor(square.color); // Pass the color to the below square
        belowSquare.fill();
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
          const nextSquareIndex = i + ((Math.random() < 0.5 ? 0 : 1) * 2 - 1);
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
            }
          }
        }
      }
    }
  }
}
