/*
  ## The problem:
  create a sequence of instructions
  The instructions we can use are either:
  Filling a column with black pixels, you denote this action "C <columnNumber: number>"
  Filling a row with white pixels, you denote this action "R <rowNumber: number>"
  'C 1' for example will convert a column into '#' (black)
  'R 2' for example will convert a row into '.' (white)

  starting from a blank n x n canvas, create a sequence of commands that produce the provided image. (targetImage: string[])

  white pixels are represented by a "." and black a '#'. Rows are numbered from 0 (top) to N-1 (bottom), and columns are also numbered from 0 (left) to N-1 (right).

  Implementation:
  Implement the function solve(n, targetImage). This function must return an array of strings: the list of instructions needed to recreate the provided 

  the function takes 2 parameters:
    n an int representing the size of the canvas.
    targetImage an array of strings that represents the image you need to produce. THe image is given from top to bottom, meaning that row 0 is the first string in the array.

  After running the instructions provided by the program, the resulting image matches exactly the targetImage

  Example problem:
  solve(6, ['.#.#..', '.#.#..', '...#..', '.#.#..', '.#.#..', '.#.#..'])

  Example solution:
    let commands: string[] = ['C 1', 'R 2', 'C 3'];

    return commands;

*/

function solve(n: number, targetImage: string[]): string[] {
  let commands: string[] = [];
  let copiedImage: string[] = new Array(n).fill('.'.repeat(n));

  while (copiedImage.join('') !== targetImage.join('')) {
    // Fill columns with black pixels
    for (let col = 0; col < n; col++) {
      for (let row = 0; row < n; row++) {
        if (targetImage[row][col] === '#' && copiedImage[row][col] === '.') {
          commands.push(`C ${col}`);
          for (let i = 0; i < n; i++) {
            copiedImage[i] = replaceAt(copiedImage[i], col, '#');
          }
          break;
        }
      }
    }

    // Fill rows with white pixels
    for (let row = 0; row < n; row++) {
      if (copiedImage[row] !== targetImage[row]) {
        commands.push(`R ${row}`);
        copiedImage[row] = '.'.repeat(n);
      }
    }
  }

  return commands;
}

function replaceAt(s: string, index: number, replacement: string): string {
  return (
    s.substr(0, index) + replacement + s.substr(index + replacement.length)
  );
}

solve(6, ['.#.#..', '.#.#..', '...#..', '.#.#..', '.#.#..', '.#.#..']);
