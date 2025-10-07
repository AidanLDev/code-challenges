/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const seen = board.map((row) => row.map(() => false));
  const rows = board.length;
  const cols = board[0].length;

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

      // read neighbors only after checking bounds to avoid out-of-range access
      const east = curRow + 1 < rows ? board[curRow + 1][curCol] : undefined;
      const west = curRow - 1 >= 0 ? board[curRow - 1][curCol] : undefined;
      const north = curCol - 1 >= 0 ? board[curRow][curCol - 1] : undefined;
      const south = curCol + 1 < cols ? board[curRow][curCol + 1] : undefined;

      // if this cell touches the border, the region cannot be flipped
      if (
        curRow === 0 ||
        curCol === 0 ||
        curRow === rows - 1 ||
        curCol === cols - 1
      ) {
        touchesBorder = true;
      }

      if (inBounds(curRow + 1, curCol) && east === "O") {
        seen[curRow + 1][curCol] = true;
        zeroCoords.push([curRow + 1, curCol]);
        queue.push([curRow + 1, curCol]);
      }
      if (inBounds(curRow - 1, curCol) && west === "O") {
        seen[curRow - 1][curCol] = true;
        zeroCoords.push([curRow - 1, curCol]);
        queue.push([curRow - 1, curCol]);
      }
      if (inBounds(curRow, curCol - 1) && north === "O") {
        seen[curRow][curCol - 1] = true;
        zeroCoords.push([curRow, curCol - 1]);
        queue.push([curRow, curCol - 1]);
      }
      if (inBounds(curRow, curCol + 1) && south === "O") {
        seen[curRow][curCol + 1] = true;
        zeroCoords.push([curRow, curCol + 1]);
        queue.push([curRow, curCol + 1]);
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
