function findDifference(nums1: number[], nums2: number[]): number[][] {
  const n = Math.max(nums1.length, nums2.length);
  const distinctOne: number[] = [];
  const distinctTwo: number[] = [];
  const seenOne = new Set<number>();
  const seenTwo = new Set<number>();
  for (let i = 0; i < n; i++) {
    if (!seenOne.has(nums1[i]) && typeof nums1[i] === "number") {
      seenOne.add(nums1[i]);
      if (nums2.indexOf(nums1[i]) === -1) {
        distinctOne.push(nums1[i]);
      }
    }
    if (!seenTwo.has(nums2[i]) && typeof nums2[i] === "number") {
      seenTwo.add(nums2[i]);
      if (nums1.indexOf(nums2[i]) === -1) {
        distinctTwo.push(nums2[i]);
      }
    }
  }
  return [distinctOne, distinctTwo];
}
