function orangesRotting(grid: number[][]): number {
  let max = 0;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const rows = grid.length;
  const cols = grid[0].length;

  const queue: Array<[number, number, number]> = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c, 0]);
      }
    
    
    
    }
  }

  while (queue.length) {
    const [curRow, curCol, curMin] = queue.shift()!;
    for (const dir of directions) {
      const newRow = dir[0] + curRow;
      const newCol = dir[1] + curCol;
      if (
        newRow < 0 ||
        newCol < 0 ||
        newRow >= rows ||
        newCol >= cols ||
        grid[newRow][newCol] === 2 ||
        grid[newRow][newCol] === 0
      )
        continue;
      max = Math.max(max, curMin + 1);
      grid[newRow][newCol] = 2;
      queue.push([newRow, newCol, curMin + 1]);
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        return -1;
      }
    }
  }

  return max;
}

const orangeGrid1 = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
const orangeGrid2 = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];
const orangeRes1 = orangesRotting(orangeGrid1);
const orangeRes2 = orangesRotting(orangeGrid2);
console.log("orangeRes1: ", orangeRes1);
console.log("orangeRes2: ", orangeRes2);
