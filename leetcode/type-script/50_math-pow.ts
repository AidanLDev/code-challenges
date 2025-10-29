function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (x === 0) return 0;

  let exp = Math.abs(n);
  let base = x;
  let result = 1;

  while (exp > 0) {
    if (exp % 2 === 1) {
      result *= base;
    }
    base *= base;
    exp = Math.floor(exp / 2);
  }

  return n >= 0 ? result : 1 / result;
}
