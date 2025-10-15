function maxIncreasingSubarrays(nums: number[]): number {
  const n = nums.length;
  if (n < 2) return 0;

  const incLen: number[] = new Array(n).fill(0);
  for (let i = n - 2; i >= 0; i--) {
    incLen[i] = nums[i] < nums[i + 1] ? incLen[i + 1] + 1 : 0;
  }

  const existsK = (k: number): boolean => {
    if (k <= 0) return true;
    if (2 * k > n) return false;
    for (let a = 0; a + 2 * k - 1 < n; a++) {
      const b = a + k;
      if (incLen[a] >= k - 1 && incLen[b] >= k - 1) return true;
    }
    return false;
  };

  let lo = 0;
  let hi = Math.floor(n / 2);
  let ans = 0;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (existsK(mid)) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return ans;
}

let maxIncreasingArr1 = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
let maxIncreasingArr2 = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
let maxIncreasingRes1 = maxIncreasingSubarrays(maxIncreasingArr1);
let maxIncreasingRes2 = maxIncreasingSubarrays(maxIncreasingArr2);
console.log("res1: ", maxIncreasingRes1);
console.log("res2: ", maxIncreasingRes2);
