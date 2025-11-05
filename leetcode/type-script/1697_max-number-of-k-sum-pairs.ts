function maxOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  let operations = 0;

  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum === k) {
      operations++;
      l++;
      r--;
    } else if (sum < k) {
      l++;
    } else {
      r--;
    }
  }

  return operations;
}
