function intersection(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [];

  if (!nums1 || !nums2) {
    return [];
  }

  // If check so we loop through the smallest arr, as one might be 1,000 nums in length and the other just 1
  if (nums1?.length > nums2?.length) {
    loopNums(nums2, nums1);
  } else {
    loopNums(nums1, nums2);
  }

  function loopNums(nums: number[], comparisonArr: number[]) {
    for (let i = 0; i < nums.length; i++) {
      if (comparisonArr.includes(nums[i])) {
        result.push(nums[i]);
      }
    }
  }
  return [...new Set(result)]; // Return unique vals, no dupes
}
