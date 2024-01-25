function pivotIndex(nums: number[]): number {
  let leftSum = 0;
  let rightSum = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    if (idx > 0) {
      // Add num left of the idx
      leftSum += nums[idx - 1];

      // reset rightSum
      rightSum = 0;

      // Work out right sum (all nums right of idx)
      for (let rightIdx = idx + 1; rightIdx < nums.length; rightIdx++) {
        rightSum += nums[rightIdx];
      }

      if (leftSum === rightSum) {
        return idx;
      }
    } else {
      //  First idx
      for (let rightIdx = idx + 1; rightIdx < nums.length; rightIdx++) {
        rightSum += nums[rightIdx];
      }
      if (leftSum === rightSum) {
        return idx;
      }
    }
  }

  // If we haven't returned the idx yet, the condition hasn't been met so return -1
  return -1;
}
