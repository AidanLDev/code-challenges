export function searchTwoDMatrix(matrix: number[][], target: number): boolean {
  for (let r = 0; r < matrix.length; r++) {
    if (matrix[r][0] === target) return true;
    if (matrix[r][0] > target) return false;

    if (matrix[r][matrix[r].length - 1] === target) return true;
    if (matrix[r][matrix[r].length - 1] > target) {
      for (let c = 0; c < matrix[r].length; c++) {
        if (matrix[r][c] === target) return true;
      }
      return false;
    }
  }
  return false;
}

export const matrixOne = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
export const targetOne = 3;
export const matrixTwo = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
export const targetTwo = 13;

const res = searchTwoDMatrix(matrixOne, targetOne);
console.log("res: ", res);
