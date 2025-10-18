// NC solution https://www.youtube.com/watch?v=5WZl3MMT0Eg
function maxSubArray(nums: number[]): number {}

let maxSubArr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let expectedOutput1 = 6;
let maxRes1 = maxSubArray(maxSubArr1);
console.log(`Res should be ${expectedOutput1} and it is ${maxRes1}`);
