/**
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.

 * @param nums The max number of jumps that can be taken at nums[i];
 */
function canJump(nums: number[]): boolean {
  let canJump = nums[0];
  let curIdx = 0;
  const last = nums.length - 1;
  while (curIdx < last) {
    if (canJump <= 0) return false;
    if (curIdx + canJump >= last) return true;

    let curBestIdx = curIdx;
    let curBestReach = curIdx;
    const jumps = canJump;

    for (let i = curIdx + 1; i <= curIdx + jumps && i <= last; i++) {
      const reach = i + nums[i];
      if (reach > curBestReach) {
        curBestIdx = i;
        curBestReach = reach;
      }
    }

    if (curBestIdx === curIdx) return false; // Didn't progress so stop trying
    curIdx = curBestIdx;
    canJump = nums[curIdx];
  }
  return true;
}
/*
Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/

let canJumpInput1 = [2, 3, 1, 1, 4];
let expectedRes1 = true;
let canJumpRes1 = canJump(canJumpInput1);
let canJumpInput2 = [3, 2, 1, 0, 4];
let expectedRes2 = false;
let canJumpRes2 = canJump(canJumpInput2);
console.log(`Expect ${expectedRes1} got ${canJumpRes1}`);
console.log(`Expect ${expectedRes2} got ${canJumpRes2}`);
