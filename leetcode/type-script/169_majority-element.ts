export function majorityElement(nums: number[]): number {
  const majorityThreshold = Math.floor(nums.length / 2);
  nums.sort();
  let foundNum = -1;
  while (foundNum === -1) {
    const lastIdx = nums.lastIndexOf(nums[0]);
    const subArray = nums.slice(0, lastIdx + 1);
    if (subArray.length > majorityThreshold) {
      foundNum = nums[0];
    }
    nums.splice(0, subArray.length);
  }

  return foundNum;
}
