function maxProduct(nums: number[]): number {
  let res = Math.max(...nums);

  let curMin = 1;
  let curMax = 1;

  for (const num of nums) {
    const tmpMax = curMax * num;

    curMax = Math.max(num, tmpMax, curMin * num);
    curMin = Math.min(num, tmpMax, curMin * num);

    res = Math.max(curMax, res);
  }

  return res;
}
