// 1.6
function rotateImage(originalImage) {
  /*
   * [
   * [1, 2, 3],
   * [4, 5, 6],
   * [7, 8, 9]
   * ]
   *
   */
  // Final result would look like
  /*
   * [
   * [7, 4, 1] // Left column becomes the top row
   * [8, 5, 2] // middle column becomes the second row
   * [9, 6, 3] // right column becomes the bottom row
   * ]
   */
  const rotatedImage = Array.from({ length: originalImage.length }, () =>
    Array(originalImage.length).fill(0)
  );
  for (let i = 0; i < originalImage.length; i++) {
    for (let j = 0; j < originalImage.length; j++) {
      rotatedImage[i][j] = originalImage[originalImage.length - 1 - j][i];
    }
  }
  // console.log("rotatedImage: ", rotatedImage);
}

rotateImage([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// 1.7 If an element in MxN matrix is 0, the entire row and column is set to 0
function zeroMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Track which rows and columns need to be zeroed
  const zeroRows = new Set();
  const zeroCols = new Set();

  // First pass: find all zeros and mark their rows/columns
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  // Second pass: zero out the marked rows
  for (let row of zeroRows) {
    for (let j = 0; j < cols; j++) {
      matrix[row][j] = 0;
    }
  }

  // Third pass: zero out the marked columns
  for (let col of zeroCols) {
    for (let i = 0; i < rows; i++) {
      matrix[i][col] = 0;
    }
  }

  return matrix;
}

// Test the zeroMatrix function

// Test case 1: 3x3 matrix
const matrix1 = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];
zeroMatrix(matrix1);

// Test case 2: 4x3 matrix (MxN where M ≠ N)
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 0, 9],
  [10, 11, 12],
];
// zeroMatrix(matrix2);

// Test case 3: 2x4 matrix with multiple zeros
const matrix3 = [
  [1, 0, 3, 4],
  [5, 6, 0, 8],
];
// zeroMatrix(matrix3);

// 1.8 Assume you have a method isSubstring which checks if one word is a
// substring of another. Given two strings, s1 and s2, write code to check if s2
// is a rotation of s1 using only one call to isSubstring (i.e. "waterbottle",
// "erbottlewat")

function isRotation(word1, word2) {
  const concattedString = word1 + word1;
  return concattedString.includes(word2);
}

const rotationWord1 = "waterbottle";
const rotationWord2 = "erbottlewat";

console.log(
  `Is ${rotationWord1} a rotation of ${rotationWord2}: ${isRotation(
    rotationWord1,
    rotationWord2
  )}`
);
