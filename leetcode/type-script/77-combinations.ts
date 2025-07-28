export function combine(n: number, k: number): number[][] {
  // N = range of numbers we want to find e.g. N = 4 [1, 2], [2, 3], [3, 4] (find all nums from 1 -> n within the range of k)
  // K = Length of our combination e.g. K = 2 [num1, num2]
  if (k > n) {
    return [];
  }

  const combinations: number[][] = [];
  backtrack(1, []);
  return combinations;

  function backtrack(start: number, path: number[]) {
    if (path.length === k) {
      // Base case, if we've built up a combination the size of k, add combination to our results array
      combinations.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      // Loop until we reach n
      path.push(i); // Build our combination
      backtrack(i + 1, path); // Check if we've finished i.e. path is the same length as k
      path.pop(); // after our recursive function returns, pop so we can do the next combination
    } // Once the loop finished, we return and go onto the next iteration of numbers
  }
}
