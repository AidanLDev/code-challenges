function combinationSum(candidates: number[], target: number): number[][] {
  const results: number[][] = [];

  function backtrack(curIdx: number, curNums: number[], curSum: number): void {
    if (curSum > target) return;
    if (curSum === target) {
      results.push([...curNums]);
      return;
    }
    for (let i = curIdx; i < candidates.length; i++) {
      curNums.push(candidates[i]);
      backtrack(i, curNums, curSum + candidates[i]);
      curNums.pop();
    }
  }

  backtrack(0, [], 0);

  return results;
}
