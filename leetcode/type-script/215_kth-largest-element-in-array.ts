import { MyMinHeap } from "../../DSA/data-sctructures/minHeap";
//  https://leetcode.com/problems/kth-largest-element-in-an-array/description/
function findKthLargest(nums: number[], k: number): number {
  if (nums.length === 1) return nums[0];
  if (k === 1) return Math.max(...nums);
  const myHeap = new MyMinHeap();
  for (const num of nums) {
    if (myHeap.size() < k) {
      myHeap.push(num);
    } else if (num > myHeap.peak()!) {
      myHeap.pop();
      myHeap.push(num);
    }
  }
  return myHeap.peak()!;
}

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
const nums1 = [3, 2, 1, 5, 6, 4];
const k1 = 2;
const res1 = findKthLargest(nums1, k1);
console.log("res: ", res1);
