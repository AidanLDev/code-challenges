export function isValidSudoku(board: string[][]): boolean {
  // Check rows are valid
  for (let i = 0; i < board.length; i++) {
    const seenNumbers: Record<string, boolean> = {};
    for (let j = 0; j < board[i].length; j++) {
      const curNum = board[i][j];
      if (seenNumbers[curNum]) return false;
      if (curNum && curNum !== ".") {
        seenNumbers[curNum] = true;
      }
    }
  }

  // Check columns are valid
  for (let i = 0; i < board.length; i++) {
    const seenNumbers: Record<string, boolean> = {};
    for (let j = 0; j < board[i].length; j++) {
      const curNum = board[j][i];
      if (seenNumbers[curNum]) return false;
      if (curNum && curNum !== ".") seenNumbers[curNum] = true;
    }
  }

  // Check if squares are valid
  // Row 1
  for (let i = 0; i < 3; i++) {
    // iterate 3 times
    const seenNumbers: Record<string, boolean> = {};
    for (let j = i * 3; j < i * 3 + 3; j++) {
      for (let k = 0; k < 3; k++) {
        const curNum = board[j][k];
        if (seenNumbers[curNum]) return false;
        if (curNum && curNum !== ".") seenNumbers[curNum] = true;
      }
    }
  }

  // Row 2
  for (let i = 0; i < 3; i++) {
    // iterate 3 times
    const seenNumbers: Record<string, boolean> = {};
    for (let j = i * 3; j < i * 3 + 3; j++) {
      for (let k = 3; k < 6; k++) {
        const curNum = board[j][k];
        if (seenNumbers[curNum]) return false;
        if (curNum && curNum !== ".") seenNumbers[curNum] = true;
      }
    }
  }

  // Row 3
  for (let i = 0; i < 3; i++) {
    // iterate 3 times
    const seenNumbers: Record<string, boolean> = {};
    for (let j = i * 3; j < i * 3 + 3; j++) {
      for (let k = 6; k < 9; k++) {
        const curNum = board[j][k];
        if (seenNumbers[curNum]) return false;
        if (curNum && curNum !== ".") seenNumbers[curNum] = true;
      }
    }
  }

  return true;
}

console.log("Testing isValidSudoku()");
const validBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const invalidBoard = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", "6", "."],
  ["1", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", "6", ".", "8", ".", ".", "7", "9"],
];

console.log("testing with valid board: ", isValidSudoku(validBoard));
console.log("testing with in-valid board: ", isValidSudoku(invalidBoard));
