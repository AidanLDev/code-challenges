/*
As a software engineer, you find the evolution pattern extremely interesting, and try to reproduce it locally to better understand what's going on. It seems like the image doesn't evolve entirely at once, the movement is always limited to a small square of pixels. Several actions happen very quickly, but they appear to always be one of the following two types:

Either an entire column "C <colNumber>" fills up with black pixels, you denote this action  Or an entire row "R <rowNumber>" gets deleted and fills up with white pixels, you denote this action 

Starting from a blank N x N  canvas, implement a program that simulates the behavior of your pixel city, based on the given sequence of actions.

A white pixel is represented by a .  character and a black pixel is represented by a # character. Rows are numbered from 0 (top) to N-1 (bottom), and columns are also numbered from 0 (left) to N-1 (right).

Input before the first turn "N" contains the size of the canvas.

Input for each turn On each turn, you will receive a line containing a command containing two space-separated values type and coord

type is a single character, either C ir R, which indicates if the command paints a column in black or paints a row in white.

coord is an integer, the number of the row or column affected by the operation.

Output for each turn After applying the modification to your simulated canvas, print its content as N lines each containg N characters representing the the pixels of the updated image. You need to print the image after each new command is recieved

*/
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n: number = parseInt(readline());

const canvas: string[][] = [];

for (let i = 0; i < n; i++) {
  let row: string[] = [];
  for (let j = 0; j < n; j++) {
    row.push('.');
  }
  canvas.push(row);
}

// game loop
while (true) {
  const command: string = readline();
  for (let i = 0; i < n; i++) {
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    let splitCommand = command.split(' ');
    let idx = Number(splitCommand[1]);
    if (splitCommand[0].toLowerCase() === 'c') {
      convertColumn(canvas, idx);
    } else {
      convertRow(canvas, idx);
    }
  }
  // Print the i-th line of the image after the command was executed
  canvas.forEach((row) => console.log(row.join('')));
}

function convertRow(canvas, idx) {
  for (let rowIdx = 0; rowIdx < canvas.length; rowIdx++) {
    for (let colIdx = 0; colIdx < canvas[rowIdx].length; colIdx++) {
      if (rowIdx === idx) {
        canvas[rowIdx][colIdx] = '.';
      }
    }
  }
}

function convertColumn(canvas, idx) {
  for (let rowIdx = 0; rowIdx < canvas.length; rowIdx++) {
    for (let colIdx = 0; colIdx < canvas[rowIdx].length; colIdx++) {
      if (colIdx === idx) {
        canvas[rowIdx][colIdx] = '#';
      }
    }
  }
}
