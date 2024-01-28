function findDiagonalOrder(mat: number[][]): number[] {
  let m = mat.length;
  let n = mat[0].length;
  let output: number[] = [];
  let dirs = [
    [-1, 1],
    [1, -1],
  ]; // Directions for moving up-right and down-left
  let row = 0,
    col = 0,
    d = 0; // Initialize row, column, and direction

  for (let i = 0; i < m * n; i++) {
    output.push(mat[row][col]);
    row += dirs[d][0];
    col += dirs[d][1];

    // Check for out of bounds and adjust accordingly
    if (row >= m) {
      row = m - 1;
      col += 2;
      d = 1 - d;
    }
    if (col >= n) {
      col = n - 1;
      row += 2;
      d = 1 - d;
    }
    if (row < 0) {
      row = 0;
      d = 1 - d;
    }
    if (col < 0) {
      col = 0;
      d = 1 - d;
    }
  }

  return output;
}
