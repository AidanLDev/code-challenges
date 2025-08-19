"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSudoku = isValidSudoku;
function isValidSudoku(board) {
    /*
      - No num < 1 || > 9
      - No repeated num in row
      - No repeated num in column
      - No repeated num in 3x3 square
  
      Checkins rows is easy, board[idx].forEach(num) = whole row
      checking columns is easy board.forEach(col)[colIdx]
      Checking squares can use modulo to see where in the square the idx is so 0 % 3 = 0 which is the start of the square
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
        [4, 5, 6]
        [7, 8, 9]
      ]
    */
    // Check rows are valid
    for (var i = 0; i < board.length; i++) {
        var seenNumbers = {};
        for (var j = 0; j < board[i].length; j++) {
            var curNum = board[i][j];
            if (seenNumbers[curNum])
                return false;
            if (curNum && curNum !== ".") {
                seenNumbers[curNum] = true;
            }
        }
    }
    // Check columns are valid
    for (var i = 0; i < board.length; i++) {
        var seenNumbers = {};
        for (var j = 0; j < board[i].length; j++) {
            var curNum = board[j][i];
            if (seenNumbers[curNum])
                return false;
            if (curNum && curNum !== ".")
                seenNumbers[curNum] = true;
        }
    }
    // Check if squares are valid
    // Row 1
    for (var i = 0; i < 3; i++) {
        // iterate 3 times
        var seenNumbers = {};
        for (var j = i * 3; j < i * 3 + 3; j++) {
            for (var k = 0; k < 3; k++) {
                var curNum = board[j][k];
                if (seenNumbers[curNum])
                    return false;
                if (curNum && curNum !== ".")
                    seenNumbers[curNum] = true;
            }
        }
    }
    // Row 2
    for (var i = 0; i < 3; i++) {
        // iterate 3 times
        var seenNumbers = {};
        for (var j = i * 3; j < i * 3 + 3; j++) {
            for (var k = 3; k < 6; k++) {
                var curNum = board[j][k];
                if (seenNumbers[curNum])
                    return false;
                if (curNum && curNum !== ".")
                    seenNumbers[curNum] = true;
            }
        }
    }
    // Row 3
    for (var i = 0; i < 3; i++) {
        // iterate 3 times
        var seenNumbers = {};
        for (var j = i * 3; j < i * 3 + 3; j++) {
            for (var k = 6; k < 9; k++) {
                var curNum = board[j][k];
                if (seenNumbers[curNum])
                    return false;
                if (curNum && curNum !== ".")
                    seenNumbers[curNum] = true;
            }
        }
    }
    return true;
}
console.log("Testing isValidSudoku()");
var validBoard = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
var invalidBoard = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "1", ".", ".", ".", ".", "6", "."],
    ["1", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", "6", ".", "8", ".", ".", "7", "9"],
];
console.log("testing with valid board: ", isValidSudoku(validBoard));
console.log("testing with in-valid board: ", isValidSudoku(invalidBoard));
