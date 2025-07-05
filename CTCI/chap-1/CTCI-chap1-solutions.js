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
  console.log("rotatedImage: ", rotatedImage);
}

rotateImage([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
