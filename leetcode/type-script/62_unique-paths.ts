/**
 * Starting at grid[0][0]. Move to the bottom-right corner. At any point, you can only move down or right
 *
 * @param m The row (height of the grid)
 * @param n The col (width of the grid)
 * @returns the number of unique paths you can take to reach the bottom right corner
 */
function uniquePathsMathsAnswer(m: number, n: number): number {
  const N = m + n - 2;
  const k = Math.min(m - 1, n - 1);
  if (k === 0) return 1;
  let res = 1;
  for (let i = 1; i <= k; i++) {
    res = (res * (N - k + i)) / i;
  }
  return Math.round(res);
}
function uniquePathDPAnswer(m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));
  if (m <= 0 || n <= 0) return 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (row === 0) dp[row][col] = 1;
      if (col === 0) dp[row][col] = 1;
    }
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
    }
  }

  console.log(dp);

  return dp[m - 1][n - 1];
}
/*
  -- Thinking
  - At any point we can do 2 things, down or right
    - Before we do said things we need to check:
      - if moving takes us out of bounds
      - if we have reached our target (grid[m -1][n - 1])
    - if we can move right + 1 to totalUniqueWays
    - if we can move down + 1 to totalUniqueWays
  - Need a way to figure out when we've explored all ways and we can stop searching...
*/

let uniquePathsM1 = 3;
let uniquePathsN1 = 7;
let uniquePathsM2 = 3;
let uniquePathsN2 = 2;
let uniquePathsRes1 = uniquePathDPAnswer(uniquePathsM1, uniquePathsN1);
let uniquePathsRes2 = uniquePathDPAnswer(uniquePathsM2, uniquePathsN2);
console.log(`Expecting 28, got ${uniquePathsRes1}`);
console.log(`Expecting 3, got ${uniquePathsRes2}`);
