function longestIncreasingPath(matrix: number[][]): number {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const dirs: number[][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const mem = new Map<string, number>();

  function dfs(row: number, col: number): number {
    const key = `${row}:${col}`;
    if (mem.has(key)) return mem.get(key)!;
    let best = 1;
    for (const [rowDir, colDir] of dirs) {
      const newRow = rowDir + row;
      const newCol = colDir + col;
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        matrix[newRow][newCol] > matrix[row][col]
      ) {
        best = Math.max(best, 1 + dfs(newRow, newCol));
      }
    }
    mem.set(key, best);
    return mem.get(key)!;
  }

  let res = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      res = Math.max(res, dfs(r, c));
    }
  }
  return res;
}
