function generate(numRows: number): number[][] {
  let result: number[][] = [];
  let currentRowIdx = 0;
  for (let row = 1; row <= numRows; row++) {
    let currentRow: number[] = [];
    for (let i = 0; i < row; i++) {
      if (row === 1 || row === 2) {
        currentRow.push(1);
      } else {
        if (i > 0 && i < row - 1) {
          let sum =
            result[currentRowIdx - 1][i - 1] + result[currentRowIdx - 1][i];
          currentRow.push(sum);
        } else {
          // first and last idx are always 1
          currentRow.push(1);
        }
      }
    }
    result.push(currentRow);
    currentRowIdx++;
  }
  return result;
}
