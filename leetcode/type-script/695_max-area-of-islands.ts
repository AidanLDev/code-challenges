function maxAreaOfIslands(grid: number[][]): number {
  let max = 0;

  const rowLength = grid.length;
  const colLength = grid[0].length;
  const seen = grid.map((row) => row.map(() => false));

  function traverse(row: number, col: number): number {
    const queue: number[][] = [[row, col]];
    let total = 0;
    while (queue.length) {
      const [curRow, curCol] = queue.shift()!;
      if (
        curRow < 0 ||
        curCol < 0 ||
        curRow >= rowLength ||
        curCol >= colLength
      )
        continue;
      if (seen[curRow][curCol]) continue;
      if (grid[curRow][curCol] === 1) {
        seen[curRow][curCol] = true;
        total++;
        queue.push(
          [curRow + 1, curCol],
          [curRow - 1, curCol],
          [curRow, curCol + 1],
          [curRow, curCol - 1]
        );
      }
    }
    return total;
  }

  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (seen[row][col]) continue;
      if (grid[row][col] === 1) {
        max = Math.max(max, traverse(row, col));
      } else {
        seen[row][col] = true;
      }
    }
  }

  return max;
}

const maxAreaOfIslandsGrid1 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

const maxAreaOfIslandsRes1 = maxAreaOfIslands(maxAreaOfIslandsGrid1);
