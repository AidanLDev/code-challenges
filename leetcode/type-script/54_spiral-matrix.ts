function spiralOrder(matrix: number[][]): number[] {
  /*
      Keep track of the rowIdx and colIdx
          (to go right matrix[rowIdx][iterateMe++])
          (to go down matrix[iterateMe--][colIdx])
          (to go left matrix[rowIdx][iterateme--])
          (to go up matrix[iterateMe++][colIdx])
      
      Iterate right until we reach the end of the row - for i = 0; i < matrix[rowIdx].length; i++
  
      go down until we reach the end - for i = 0; i < matrix.length; i++
      
      go to the left until we reach the end - for i = 0; i < matrix[rowIdx].length; i++
      
      go up until we're at idx 1. while rowIdx !== 1 rowIdx --
      
      go right until we're at the second last idx while rowIdx !== matrix[rowIdx].length - 1
      
  */
}
