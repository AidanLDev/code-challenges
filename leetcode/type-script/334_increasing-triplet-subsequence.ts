/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: One of the valid triplet is (3, 4, 5), because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

*/
function increasingTriplet(nums: number[]): boolean {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of nums) {
    if (num <= smallest) {
      smallest = num;
    } else if (num <= secondSmallest) {
      secondSmallest = num;
    } else {
      // num > second && smallest
      return true;
    }
  }

  return false;
}

// Example tests (from the problem statement)
let example1 = [1, 2, 3, 4, 5];
let increasingTripletsRes1 = increasingTriplet(example1);
console.log(`expecting example 1 to be true and got ${increasingTripletsRes1}`);

let example2 = [5, 4, 3, 2, 1];
let increasingTripletsres2 = increasingTriplet(example2);
console.log(
  `expecting example 2 to be false and got ${increasingTripletsres2}`
);

let example3 = [2, 1, 5, 0, 4, 6];
let increasingTripletsres3 = increasingTriplet(example3);
console.log(`expecting example 3 to be true and got ${increasingTripletsres3}`);
