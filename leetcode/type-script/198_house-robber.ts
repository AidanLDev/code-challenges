export function rob(nums: number[]): number {
  const memo: Record<number, number> = {};
  function robbing(houseNumber: number): number {
    if (houseNumber >= nums.length) return 0;
    if (memo[houseNumber] !== undefined) return memo[houseNumber];
    const robCurrent = nums[houseNumber] + robbing(houseNumber + 2);
    const skipCurrent = robbing(houseNumber + 1);
    memo[houseNumber] = Math.max(robCurrent, skipCurrent);
    return memo[houseNumber];
  }
  return robbing(0);
}
