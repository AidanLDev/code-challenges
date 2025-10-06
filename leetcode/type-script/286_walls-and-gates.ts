function islandsAndTreasure(grid: number[][]): number[][] {
  const INF = 2147483647;
  const rows = grid.length;
  const cols = grid[0].length;
  const queue: [number, number][] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) {
        queue.push([r, c]);
      }
    }
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length > 0) {
    const [row, col] = queue.shift()!;

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === INF
      ) {
        grid[newRow][newCol] = grid[row][col] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }

  return grid;
}
