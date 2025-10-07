/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const seen = board.map((row) => row.map(() => false));
  const rows = board.length;
  const cols = board[0].length;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function inBounds(row: number, col: number): boolean {
    if (row < 0 || col < 0 || row >= rows || col >= cols || seen[row][col])
      return false;
    return true;
  }

  function search(row: number, col: number) {
    const queue: number[][] = [[row, col]];
    let touchesBorder = false;
    const zeroCoords: number[][] = [];
    seen[row][col] = true;
    zeroCoords.push([row, col]);
    while (queue.length) {
      const [curRow, curCol] = queue.shift()!;

      // if this cell touches the border, the region cannot be flipped
      if (
        curRow === 0 ||
        curCol === 0 ||
        curRow === rows - 1 ||
        curCol === cols - 1
      ) {
        touchesBorder = true;
      }

      for (const dir of dirs) {
        const nextRow = curRow + dir[0];
        const nextCol = curCol + dir[1];
        if (inBounds(nextRow, nextCol) && board[nextRow][nextCol] === "O") {
          seen[nextRow][nextCol] = true;
          zeroCoords.push([nextRow, nextCol]);
          queue.push([nextRow, nextCol]);
        }
      }
    }
    if (!touchesBorder) {
      zeroCoords.forEach((coord) => {
        board[coord[0]][coord[1]] = "X";
      });
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O" && !seen[r][c]) {
        search(r, c);
      }
    }
  }
  console.log("board: ", board);
}
