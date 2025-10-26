function findTargetSumWays(nums: number[], target: number): number {
  const n = nums.length;
  const mem = new Map<string, number>();
  function dfs(i: number, a: number): number {
    if (i === n) {
      return a === target ? 1 : 0;
    }
    if (mem.has(`${i}:${a}`)) return mem.get(`${i}:${a}`)!;

    const add = dfs(i + 1, a + nums[i]);
    const takeAway = dfs(i + 1, a - nums[i]);
    mem.set(`${i}:${a}`, add + takeAway);
    return mem.get(`${i}:${a}`)!;
  }
  return dfs(0, 0);
}

let exampleNums1 = [1, 1, 1, 1, 1];
let exampleTarget1 = 3;
let exampleRes1 = findTargetSumWays(exampleNums1, exampleTarget1);
console.log(`Should be 5, got ${exampleRes1}`);
