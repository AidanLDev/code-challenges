function longestIncreasingSubsequenceBacktracking(nums: number[]): number {
  if (!nums.length) return 0;
  let longest = 0;
  const mem: Record<number, number> = {};

  function lengthFrom(i: number): number {
    if (mem[i] !== undefined) return mem[i] as number;

    let best = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        best = Math.max(best, i + lengthFrom(j));
      }
    }
    mem[i] = best;
    return best;
  }

  for (let i = 0; i < nums.length; i++) {
    longest = Math.max(longest, lengthFrom(i));
  }
  return longest;
}

function lengthOfLIS_DPSolution(nums: number[]): number {
  const dp = Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    let sequenceSums: number[] = [];
    for (let j = i; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        sequenceSums.push(dp[j] + 1);
      }
    }
    dp[i] = Math.max(1, ...sequenceSums);
  }
  return Math.max(...dp);
}
