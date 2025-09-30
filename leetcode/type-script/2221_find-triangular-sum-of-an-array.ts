function triangularSum(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  let prevRow: number[] = [...nums];

  while (prevRow.length > 1) {
    const newRow: number[] = Array(prevRow.length - 1);
    for (let i = 0; i < prevRow.length - 1; i++) {
      newRow[i] = (prevRow[i] + prevRow[i + 1]) % 10;
    }
    prevRow = newRow;
  }
  return prevRow[0];
}
