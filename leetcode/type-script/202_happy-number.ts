function isHappy(n: number): boolean {
  const seen = new Set<number>();
  seen.add(n);
  while (n > 1) {
    let numsToSum = n.toString().split("").map(Number);
    n = numsToSum.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
    if (seen.has(n)) return false;
    seen.add(n);
  }
  return true;
}
