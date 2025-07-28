export function subsets(nums: number[]): number[][] {
  const powerset: number[][] = [];
  backtrack(0, []);
  function backtrack(curNum: number, path: number[]) {
    powerset.push([...path]);
    for (let i = curNum; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }
  return powerset;
}
