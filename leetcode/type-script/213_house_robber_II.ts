function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  return Math.max(
    take(nums.slice(0, nums.length - 1)),
    take(nums.slice(1, nums.length))
  );

  function take(houses: number[]) {
    let rob1 = 0;
    let rob2 = 0;
    for (const amount of houses) {
      const curMax = Math.max(rob1 + amount, rob2);
      rob1 = rob2;
      rob2 = curMax;
    }
    return rob2;
  }
}
