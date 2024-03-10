function maxFrequencyElements(nums: number[]): number {
  if (!nums) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }
  const numberCount: Record<number, number> = {};
  let maxFrequency = 0;
  for (let i = 0; i < nums.length; i++) {
    if (numberCount.hasOwnProperty(nums[i])) {
      numberCount[nums[i]]++;
    } else {
      numberCount[nums[i]] = 1;
    }
    maxFrequency = Math.max(maxFrequency, numberCount[nums[i]]);
  }
  const res: number = (Object.values(numberCount) as number[])
    .filter(num => num === maxFrequency)
    .reduce(
      (accumulator: number, currentValue: number) =>
        accumulator + currentValue,
      0
    );
  return res;
}
