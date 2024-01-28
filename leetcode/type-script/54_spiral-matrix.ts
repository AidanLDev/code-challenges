function spiralOrder(matrix: number[][]): number[] {
  let result: number[] = [];
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // Traverse Right
    for (let j = colBegin; j <= colEnd; j++) {
      result.push(matrix[rowBegin][j]);
    }
    rowBegin++;

    // Traverse Down
    for (let j = rowBegin; j <= rowEnd; j++) {
      result.push(matrix[j][colEnd]);
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      // Traverse Left
      for (let j = colEnd; j >= colBegin; j--) {
        result.push(matrix[rowEnd][j]);
      }
    }
    rowEnd--;

    if (colBegin <= colEnd) {
      // Traverse Up
      for (let j = rowEnd; j >= rowBegin; j--) {
        result.push(matrix[j][colBegin]);
      }
    }
    colBegin++;
  }

  return result;
}
