/**
 * @description Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
 * @param heights represents histogram bars
 */
export function largestRectangleArea(heights: number[]): number {
  /*
    want to find the max where the sum of the min heights[i] is largest  
  */

  const stack: number[] = [];
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    const h = i === heights.length ? 0 : heights[i];

    while (stack.length && h < heights[stack[stack.length - 1]]) {
      const top = stack.pop()!;
      const left = stack.length ? stack[stack.length - 1] : -1;
      const width = i - left - 1;
      maxArea = Math.max(maxArea, heights[top] * width);
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

const test1 = [2, 1, 5, 6, 2, 3];

const test2 = [2, 4];

console.log("test1: ", largestRectangleArea(test1));
console.log("test1: ", largestRectangleArea(test2));
