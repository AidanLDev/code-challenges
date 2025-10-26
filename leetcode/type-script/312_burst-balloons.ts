function maxCoins(nums: number[]): number {
  const n = nums.length;
  const arr = [1, ...nums, 1];
  const mem: number[][] = Array.from({ length: n + 2 }, () =>
    new Array(n + 2).fill(-1)
  );

  function dfs(left: number, right: number): number {
    if (left + 1 === right) return 0;
    if (mem[left][right] !== -1) return mem[left][right];
    let best = 0;
    for (let i = left + 1; i < right; i++) {
      const sum = arr[left] * arr[i] * arr[right];
      const total = sum + dfs(left, i) + dfs(i, right);
      best = Math.max(best, total);
    }
    mem[left][right] = best;
    return best;
  }

  return dfs(0, n + 1);
}

let balloonsExample1Nums = [3, 1, 5, 8];
let balloonsExample2Nums = [1, 5];
let burstBalloonsRes1 = maxCoins(balloonsExample1Nums);
let burstBalloonsRes2 = maxCoins(balloonsExample2Nums);
console.log(`Expecting 167 got ${burstBalloonsRes1}`);
console.log(`Expecting 10 got ${burstBalloonsRes2}`);
