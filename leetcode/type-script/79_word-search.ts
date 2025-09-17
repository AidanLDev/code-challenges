function wordSearch(board: string[][], word: string): boolean {
  let hasWord = false;

  const rowLength = board.length;
  const colLength = board[0].length;

  function search(
    rowIdx: number,
    colIdx: number,
    wordIdx: number,
    visited: boolean[][]
  ) {
    if (rowIdx < 0 || rowIdx >= rowLength || colIdx < 0 || colIdx >= colLength)
      return;
    if (visited[rowIdx][colIdx]) return;
    if (board[rowIdx][colIdx] !== word[wordIdx]) return;

    if (rowIdx === word.length - 1) {
      hasWord = true;
      return;
    }

    visited[rowIdx][colIdx] = true;

    search(rowIdx + 1, colIdx, wordIdx + 1, visited);
    if (hasWord) return;
    search(rowIdx - 1, colIdx, wordIdx + 1, visited);
    if (hasWord) return;
    search(rowIdx, colIdx + 1, wordIdx + 1, visited);
    if (hasWord) return;
    search(rowIdx, colIdx - 1, wordIdx + 1, visited);
    if (hasWord) return;

    visited[rowIdx][colIdx] = false;
  }

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      const visited = Array.from({ length: rowLength }, () =>
        Array(colLength).fill(false)
      );
      search(i, j, 0, visited);
      if (hasWord) return true;
    }
  }
  return false;
}
