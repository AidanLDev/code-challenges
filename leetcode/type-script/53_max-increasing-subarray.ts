// NC solution https://www.youtube.com/watch?v=5WZl3MMT0Eg
function maxSubArrayAttempt1(nums: number[]): number {
  let curMax = -Infinity;
  let prevSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (prevSum > 0) {
      curMax = Math.max(curMax, nums[i] + prevSum, nums[i], prevSum);
      prevSum = prevSum + nums[i];
    } else {
      curMax = Math.max(curMax, nums[i], prevSum);
      prevSum = nums[i];
    }
  }
  if (curMax === -Infinity)
    return Math.max(
      nums.reduce((acc, cur) => acc + cur, 0),
      ...nums
    );
  return curMax;
}

function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let curSum = 0;

  for (const num of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += num;
    max = Math.max(max, curSum);
  }

  return max;
}

let maxSubArr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let expectedOutput1 = 6;
let maxRes1 = maxSubArrayAttempt1(maxSubArr1);
console.log(`Res should be ${expectedOutput1} and it is ${maxRes1}`);
