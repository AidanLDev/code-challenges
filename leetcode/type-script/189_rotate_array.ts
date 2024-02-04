/*
    Reverse the entire array, then reverse the first k elements, and finally reverse the remaining elements. This approach effectively rotates the array to the right by k steps. The reverse function is a helper function that reverses the elements in the nums array between the start and end indices.
*/

function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
