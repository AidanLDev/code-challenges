export function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(path: number[], choices: number[]) {
    if (choices.length === 0) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < choices.length; i++) {
      backtrack(
        [...path, choices[i]], [...choices.slice(0, i), ...choices.slice(i + 1)])
    }
  }  

  backtrack([], nums)

  return result
}