function maxProduct(nums: number[]): number {
  let res = Math.max(...nums);

  let curMax = 1;
  let curMin = 1;

  for (const num of nums) {
    const tmpMax = curMax * num;

    curMax = Math.max(num, tmpMax, curMin * num);
    curMin = Math.min(num, tmpMax, curMin * num);

    res = Math.max(curMax, res);

    console.log("vars: ", {
      num,
      curMax,
      curMin,
      res,
    });
  }

  return res;
}

const nums1 = [2, 3, -2, 4];
const nums2 = [-2, 0, -1];
export {}; // <-- makes this file a module
// let res1 = maxProduct(nums1);
// const res2 = maxProduct(nums2)
