function findDiagonalOrder(mat: number[][]): number[] {
  /*
      Keep track of currentRow = rowIdx and colIdx = j
      number[rowIdx][] = row
      number[][colIdx] = column
      Go up the rows () until colIdx === 0 || rowIdx === 0
      then traverse to the right col colIdx++
      then go down and left until colIdx === 0 || rowIdx === 0(reached the left most end)
      then go up and right until rowIDx === 0 || colIdx === 0
      Then go down and left until colIdx === 0 || rowIdx === 0
      Finally go up and right until colIdx === 0 || rowIdx === 0
  */
}
