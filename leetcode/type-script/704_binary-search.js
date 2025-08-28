"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = binarySearch;
function binarySearch(numbers, target) {
    var leftIdx = 0;
    var rightIdx = numbers.length - 1;
    while (leftIdx <= rightIdx) {
        var mid = Math.floor((leftIdx + rightIdx) / 2);
        if (numbers[mid] === target)
            return mid;
        if (numbers[mid] > target) {
            rightIdx = mid + 1;
        }
        else {
            leftIdx = mid - 1;
        }
    }
    return -1;
}
console.log("res: ", binarySearch([-1, 0, 2, 4, 6, 8], 4));
