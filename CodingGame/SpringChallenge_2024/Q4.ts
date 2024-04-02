/*
  After spending hours analyzing the pixels in your image, you realize something very peculiar about the shapes that appeared in the artwork: a perfect circle will sometimes appear among the chaos, and you feel a strange attraction to these circles. They feel like an invitation to dive inside the image and join another dimension!

  If you manage to find a way to detect the circles before they disappear, you should be able to jump inside and be transported among the pixels to figure out what's going on inside.

  You need to write a function that detects the center coordinate of the largest circle that appears in the image. Here's what you know about them:

  The image will be provided as a list of nRows strings with length nCols each, representing the rows of pixels from top to bottom. Each pixel is a single alphanumeric character representing its color.

[
  'xxCCCCCxxxxx',
  'xCxxxxCxxxx',
  'xCxxxxCxxxx',
  'xCxxxxxCxxxx',
  'xCxxxxxCxxxx',
  'xCxxxxxCxxxx',
  'xxCCCCCxxxxx',
  'xxxxxxxxxxxx'
]

  Your code needs to return a list containing exactly 3 integer values [r, c, R] representing the largest circle found within the image:

  - r is the verticle coordinate of the circle's center.
  - c is the horizontal coordinate of the circle's center
  - R is the radius of the circle

  The top-left pixel has coordinates (0,0).

  For example lets take the following image (see Q4 img1):

  This image contains a circle of radius 3, centered on the pixel located at row 3, column 4 (shown here with a green border). Pixels forming the circle are the ones having Euclidean distance between 3 (included) and 4 (excluded), shown here with a yellow border. This is the largest circle in the image (there is also one circle with radius 1 and many circles with radius 0).

  (see Q4Img2)
  In this case your code should return the following answer in the format:
  [3, 4, 3]

  It's guaranteed that there will only be a single largest circle within the image.
  
*/

/**
 * @param nRows The height of the image.
 * @param nCols The width of the image.
 * @param image Pixels of the image, given row by row from top to bottom.
 * @return The parameters of the largest circle [centerRow, centerCol, radius].
 */
function findLargestCircle(
  nRows: number,
  nCols: number,
  image: string[]
): number[] {
  let largestCircle = [0, 0, 0];

  // Iterate over each pixel
  for (let r = 0; r < nRows; r++) {
    for (let c = 0; c < nCols; c++) {
      // Calculate the maximum possible radius
      let maxRadius = Math.min(r, c, nRows - r - 1, nCols - c - 1);

      // Check each possible radius
      for (let radius = maxRadius; radius > largestCircle[2]; radius--) {
        if (isCircle(image, r, c, radius)) {
          largestCircle = [r, c, radius];
          break; // No need to check smaller circles at this center
        }
      }
    }
  }

  return largestCircle;
}

function isCircle(
  image: string[],
  r: number,
  c: number,
  radius: number
): boolean {
  // Implement this function to check if a circle exists at (r, c) with the given radius
  // A circle exists if all pixels on the circle have the same color
}
/* Ignore and do not change the code above */

