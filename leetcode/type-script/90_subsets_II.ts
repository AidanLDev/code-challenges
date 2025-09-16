function subsetsTwo(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  function backtrack(idx: number, curNums: number[]) {
    res.push([...curNums]);
    for (let i = idx; i < nums.length; i++) {
      if (i > idx && nums[i] === nums[i - 1]) continue;
      curNums.push(nums[i]);
      backtrack(i + 1, curNums);
      curNums.pop();
    }
  }

  backtrack(0, []);

  return res;
}
