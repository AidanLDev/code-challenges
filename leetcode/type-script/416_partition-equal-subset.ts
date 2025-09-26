function canPartition(nums: number[]): boolean {
  const memo = new Map<string, boolean>();
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  if (totalSum % 2 !== 0) return false;
  const target = totalSum / 2;
  function backtrack(idx: number, currentSum: number): boolean {
    if (currentSum === target) {
      return true;
    }
    if (idx >= nums.length || currentSum > target) return false;

    const key = `${idx}-${currentSum}`;
    if (memo.has(key)) {
      return memo.get(key) as boolean;
    }

    const include = backtrack(idx + 1, currentSum + nums[idx]);
    const exclude = backtrack(idx + 1, currentSum);

    const result = include || exclude;
    memo.set(key, result);
    return result;
  }
  return backtrack(0, 0);
}

function canPartitionDP(nums: number[]): boolean {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  if (totalSum % 2 !== 0) return false;

  const target = totalSum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true; // We can always make sum 0 with empty subset

  for (const num of nums) {
    // Iterate backwards to avoid using the same element twice
    for (let sum = target; sum >= num; sum--) {
      dp[sum] = dp[sum] || dp[sum - num];
    }
  }

  return dp[target];
}
