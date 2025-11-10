/*
if winEnd === 0 && usedDelete = false:
    usedDelete = true
else if winEnd === 0:
    while (winStart === 0)
        winStart++
        useedDelete = false
else: // winEnd === 1
    longest = Math.max(longest, winENd - winStart)

return longest
*/
function longestSubarray(nums: number[]): number {
  let winStart = 0;
  let zeros = 1;
  let longest = 0;
  if (nums.length <= 1) return nums.length - 1;

  for (let winEnd = 0; winEnd < nums.length; winEnd++) {
    if (nums[winEnd] === 0) zeros--;
    if (zeros < 0) {
      if (nums[winStart] === 0) zeros++;
      winStart++;
    }
    longest = Math.max(longest, winEnd - winStart);
  }

  return longest;
}

const exampleNums1 = [1, 1, 0, 1];
const exampleNums2 = [0, 1, 1, 1, 0, 1, 1, 0, 1];
const exampleNums3 = [1, 1, 1];
const res1 = longestSubarray(exampleNums1);
const res2 = longestSubarray(exampleNums2);
const res3 = longestSubarray(exampleNums3);
console.log(`Expecting res1 to be 3 and got ${res1}`);
console.log(`Expecting res2 to be 5 and got ${res2}`);
console.log(`Expecting res3 to be 2 and got ${res3}`);

export default {};
