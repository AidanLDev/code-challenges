export function combine(n: number, k: number): number[][] {
  if (k > n) {
    return [];
  }

  const combinations: number[][] = [];
  backtrack(1, []);
  return combinations;

  function backtrack(start: number, path: number[]) {
    if (path.length === k) {
      combinations.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  }
}
