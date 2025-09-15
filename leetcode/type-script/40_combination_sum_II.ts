function combinationSum2(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];

  candidates.sort((a, b) => a - b);
  function backtrack(idx: number, curNums: number[], sum: number): void {
    if (sum > target) return;
    if (sum === target) {
      combinations.push([...curNums]);
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      if (i > idx && candidates[i] === candidates[i - 1]) continue;
      curNums.push(candidates[i]);
      backtrack(i + 1, curNums, sum + candidates[i]);
      curNums.pop();
    }
  }

  backtrack(0, [], 0);

  return combinations;
}
