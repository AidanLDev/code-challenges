function twoSum(nums: number[], target: number): number[] {
  const sumResults = {};
  for (let i = 0; i < nums.length; i++) {
    let curSum = target - nums[i];
    if (sumResults.hasOwnProperty(target - curSum)) {
      return [sumResults[target - curSum], i];
    }
    sumResults[curSum] = i;
  }
  return [-1, -1];
}
