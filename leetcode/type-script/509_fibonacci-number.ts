let cache = {};
function fib(n: number): number {
  /*
  // Simple Solution without cache
  let result: number;
  if (n < 2) {
    result = n;
  } else {
    result = fib(n - 1) + fib(n - 2);
  }
  return result;
  */
  // Solution using a hashtable to speed up the algo
  if (cache[n]) {
    return cache[n];
  }
  let result: number;
  if (n < 2) {
    result = n;
  } else {
    result = fib(n - 1) + fib(n - 2);
  }
  cache[n] = result;
  return result;
}
