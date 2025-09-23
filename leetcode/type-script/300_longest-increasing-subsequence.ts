function longestIncreasingSubsequenceBacktracking(nums: number[]): number {
  if (!nums.length) return 0;
  let longest = 0;
  function checkSequence(
    start: number,
    lastVal: number | null,
    length: number
  ) {
    if (length > longest) longest = length;
    for (let i = start; i < nums.length; i++) {
      if (lastVal === null || nums[i] > lastVal) {
        checkSequence(i + 1, nums[i], length + 1);
      }
    }
  }
  checkSequence(0, null, 0);
  return longest;
}
