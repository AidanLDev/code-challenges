export function longestConsecutive(nums: number[]): number {
  let longest = 0;
  let curStreak = 1;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      curStreak++;
    } else if (nums[i] === nums[i + 1]) {
      continue;
    } else {
      if (curStreak > longest) longest = curStreak;
      curStreak = 1;
    }
  }
  return longest;
}
