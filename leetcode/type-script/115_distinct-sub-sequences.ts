function numDistinct(s: string, t: string): number {
  const sLen = s.length;
  const tLen = t.length;
  if (sLen < tLen) return 0;

  const mem = new Map<string, number>();
  function dfs(i: number, j: number): number {
    if (j === tLen) return 1;
    if (i === sLen) return 0;

    const key = `${i}:${j}`;
    if (mem.has(key)) return mem.get(key)!;

    let res = 0;
    if (s[i] === t[j]) {
      res = dfs(i + 1, j + 1) + dfs(i + 1, j);
    } else {
      res = dfs(i + 1, j);
    }
    mem.set(key, res);
    return res;
  }
  return dfs(0, 0);
}

let numDistinctS1 = "rabbbit";
let numDistinctT1 = "rabbit";
let numDistinctRes1 = numDistinct(numDistinctS1, numDistinctT1);
console.log(`Expecting 3 got ${numDistinctRes1}`);
