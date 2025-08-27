"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.largestRectangleArea = largestRectangleArea;
/**
 * @description Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
 * @param heights represents histogram bars
 */
function largestRectangleArea(heights) {
    /*
      want to find the max where the sum of the min heights[i] is largest
    */
    var stack = [];
    var maxArea = 0;
    for (var i = 0; i <= heights.length; i++) {
        var h = i === heights.length ? 0 : heights[i];
        while (stack.length && h < heights[stack[stack.length - 1]]) {
            var top_1 = stack.pop();
            var left = stack.length ? stack[stack.length - 1] : -1;
            var width = i - left - 1;
            maxArea = Math.max(maxArea, heights[top_1] * width);
        }
        stack.push(i);
    }
    return maxArea;
}
/*
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.s

Input: heights = [2,4]
Output: 4
*/
var test1 = [2, 1, 5, 6, 2, 3];
var test2 = [2, 4];
console.log("test1: ", largestRectangleArea(test1));
console.log("test1: ", largestRectangleArea(test2));
