function searchInsert(nums: number[], target: number): number {
  let targetIdx = -1;
  targetIdx = nums.indexOf(target);
  if (targetIdx === -1) {
    if (nums[nums.length - 1] < target) {
      return nums.length;
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
          return i;
        }
      }
    }
  }
  return targetIdx;
}
