function isMatch(s: string, p: string): boolean {
  const n = s.length;
  const m = p.length;
  const mem = new Map<string, boolean>();

  function dfs(i: number, j: number): boolean {
    const key = `${i}:${j}`;
    if (mem.has(key)) return mem.get(key)!;

    if (i >= n && j >= m) {
      mem.set(key, true);
      return true;
    }

    if (j >= m) {
      mem.set(key, false);
      return false;
    }

    const match = i < n && (s[i] === p[j] || p[j] === ".");

    let ans = false;
    if (j + 1 < m && p[j + 1] === "*") {
      ans = dfs(i, j + 2) || (match && dfs(i + 1, j));
    } else if (match) {
      ans = dfs(i + 1, j + 1);
    } else {
      ans = false;
    }

    mem.set(key, ans);
    return ans;
  }

  return dfs(0, 0);
}

let isMatchSExample1 = "aa";
let isMatchPExample1 = "a";
let isMatchSExample2 = "aa";
let isMatchPExample2 = "a*";
let isMatchSExample3 = "ab";
let isMatchPExample3 = ".*";
