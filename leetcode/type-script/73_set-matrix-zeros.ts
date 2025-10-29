function setZeroes(matrix: number[][]): void {
  const foundZeros: Array<[number, number]> = [];
  function setColToZeros(colIdx: number) {
    for (const row of matrix) {
      row[colIdx] = 0;
    }
  }

  function setRowToZeros(rowIdx: number) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[rowIdx][i] = 0;
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) foundZeros.push([row, col]);
    }
  }

  for (const [row, col] of foundZeros) {
    setRowToZeros(row);
    setColToZeros(col);
  }
}
