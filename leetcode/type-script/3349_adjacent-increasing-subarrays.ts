/**
 * Given an array nums of n integers and an integer k, determine whether there exist two adjacent subarrays of length k such that both subarrays are strictly increasing. Specifically, check if there are two subarrays starting at indices a and b (a < b), where:

Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
The subarrays must be adjacent, meaning b = a + k.
Return true if it is possible to find two such subarrays, and false otherwise.

 

Example 1:

Input: nums = [2,5,7,8,9,2,3,4,3,1], k = 3

Output: true

Explanation:

The subarray starting at index 2 is [7, 8, 9], which is strictly increasing.
The subarray starting at index 5 is [2, 3, 4], which is also strictly increasing.
These two subarrays are adjacent, so the result is true.
Example 2:

Input: nums = [1,2,3,4,4,4,4,5,6,7], k = 5

Output: false
 * @param nums 
 * @param k 
 */
function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  const n = nums.length;
  if (k === 1) return n >= 2;
  if (n < 2 * k) return false;

  const incLen: number[] = new Array(n).fill(0);
  for (let i = n - 2; i >= 0; i--) {
    incLen[i] = nums[i] < nums[i + 1] ? incLen[i + 1] + 1 : 0;
  }

  for (let i = 0; i + k < n; i++) {
    if (incLen[i] >= k - 1 && incLen[i + k] >= k - 1) return true;
  }
  return false;
}

let increasingSubArr1 = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
let increasingSubK1 = 3;
let increasingSubArr2 = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
let increasingK2 = 5;
let increasingSubArr3 = [-15, 19];
let increasingSubK3 = 1;
let increasingSubRes1 = hasIncreasingSubarrays(
  increasingSubArr1,
  increasingSubK1
);
let increasingSubRes2 = hasIncreasingSubarrays(increasingSubArr2, increasingK2);
let increasingSubRes3 = hasIncreasingSubarrays(
  increasingSubArr3,
  increasingSubK3
);

console.log("res1: ", increasingSubRes1);
console.log("res2: ", increasingSubRes2);
console.log("res3: ", increasingSubRes3);
