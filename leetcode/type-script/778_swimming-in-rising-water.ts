import { MyMinHeap } from "../../DSA/data-sctructures/minHeap";

/**
 * @description You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).

It starts raining, and water gradually rises over time. At time t, the water level is t, meaning any cell with elevation less than equal to t is submerged or reachable.

You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.

Return the minimum time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).


 * @param grid an n x n grid where grid[r][c] is the elevation
 */
function swimInWater(grid: number[][]): number {
  const seen = grid.map((row) => row.map(() => false));
  const minHeap = new MyMinHeap<[number, number, number]>(
    (a, b) => a[0] - b[0]
  ); // [time, r, c]
  const n = grid.length;
  minHeap.push([grid[0][0], 0, 0]);
  // don't mark seen until we pop the cell with its final minimal time
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (minHeap.size() > 0) {
    const top = minHeap.pop();
    if (!top) break;
    const [time, row, col] = top;
    // If we've already finalized this cell, skip
    if (seen[row][col]) continue;
    seen[row][col] = true;
    if (row === n - 1 && col === n - 1) return time;
    for (const direction of directions) {
      let nextRow = row + direction[0];
      let nextCol = col + direction[1];
      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= n ||
        nextCol >= n ||
        seen[nextRow][nextCol]
      )
        continue;
      const nextTime = Math.max(time, grid[nextRow][nextCol]);
      minHeap.push([nextTime, nextRow, nextCol]);
    }
  }
  return 0;
}

/*
Input: grid = [[0,2],[1,3]]
Output: 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.

*/
