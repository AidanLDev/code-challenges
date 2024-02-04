function getRow(rowIndex: number): number[] {
  /*
      Loop through rowIndex number of times
      for each loop check 
  */
  let triangle: number[] = [];
  let completeTriangle: number[][] = [];
  let currentRowIdx = 0;

  for (let row = 1; row <= rowIndex + 1; row++) {
    let currentRow: number[] = [];
    // Loop once per rowNumber (so row 5 will loop 5 times for example)
    for (let i = 0; i < row; i++) {
      // 1 and 2 will just be 1
      if (row === 1 || row === 2) {
        currentRow.push(1);
      } else {
        if (i > 0 && i < row - 1) {
          let sum =
            completeTriangle[currentRowIdx - 1][i - 1] +
            completeTriangle[currentRowIdx - 1][i];
          currentRow.push(sum);
        } else {
          // First and last row number will always be 1
          currentRow.push(1);
        }
      }
    }
    completeTriangle.push(currentRow);
    currentRowIdx++;
  }

  console.log(completeTriangle);

  triangle = completeTriangle[rowIndex]; // set triangle to be the result at the rowIndex passed in

  return triangle;
}
