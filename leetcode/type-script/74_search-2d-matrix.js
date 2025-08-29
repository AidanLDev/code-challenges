"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetTwo = exports.matrixTwo = exports.targetOne = exports.matrixOne = void 0;
exports.searchTwoDMatrix = searchTwoDMatrix;
function searchTwoDMatrix(matrix, target) {
    /*
      - loop through n check first num in row, is it bigger than target?
        - if not check list num in row, is it bigger than target
          - if not loop through row and check if its in there, if it is return true, else return false
        - check next row, is it bigger than target? if yes return false
          - if no check the end one
    */
    console.log("trying to find target: ", target);
    for (var r = 0; r < matrix.length; r++) {
        console.log("Checking start of row: ", matrix[r][0]);
        if (matrix[r][0] === target)
            return true;
        if (matrix[r][0] > target)
            return false;
        console.log("Checking end of the row: ", matrix[r][matrix[r].length - 1]);
        if (matrix[r][matrix[r].length - 1] === target)
            return true;
        if (matrix[r][matrix[r].length - 1] > target) {
            console.log("target should be within this row, looping the rows values...");
            // Number should be within this row
            for (var c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c] === target)
                    return true;
            }
            return false;
        }
    }
    return false;
}
exports.matrixOne = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
];
exports.targetOne = 3;
exports.matrixTwo = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
];
exports.targetTwo = 13;
var res = searchTwoDMatrix(exports.matrixOne, exports.targetOne);
console.log("res: ", res);
