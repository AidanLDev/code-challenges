/**
 * @description Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.
 * @see {@link https://leetcode.com/problems/trapping-rain-water-ii/}
 * @param heightMap The m x n integer matrix representing the height of each unit cell in a 2D elevation map
 */
function trapRainWater(heightMap: number[][]): number {
  if (!heightMap || heightMap.length === 0 || heightMap[0].length === 0)
    return 0;

  const m = heightMap.length;
  const n = heightMap[0].length;

  // Min-heap for boundary-first expansion
  type Cell = { h: number; r: number; c: number };
  class MinHeap {
    data: Cell[] = [];
    private cmp(a: Cell, b: Cell) {
      return a.h - b.h;
    }
    push(x: Cell) {
      this.data.push(x);
      this.bubbleUp(this.data.length - 1);
    }
    pop(): Cell | undefined {
      if (this.data.length === 0) return undefined;
      const top = this.data[0];
      const last = this.data.pop()!;
      if (this.data.length > 0) {
        this.data[0] = last;
        this.bubbleDown(0);
      }
      return top;
    }
    isEmpty() {
      return this.data.length === 0;
    }
    private bubbleUp(i: number) {
      let idx = i;
      while (idx > 0) {
        const p = (idx - 1) >> 1;
        if (this.cmp(this.data[idx], this.data[p]) >= 0) break;
        [this.data[idx], this.data[p]] = [this.data[p], this.data[idx]];
        idx = p;
      }
    }
    private bubbleDown(i: number) {
      const len = this.data.length;
      let idx = i;
      while (true) {
        const l = idx * 2 + 1;
        const r = idx * 2 + 2;
        let smallest = idx;
        if (l < len && this.cmp(this.data[l], this.data[smallest]) < 0)
          smallest = l;
        if (r < len && this.cmp(this.data[r], this.data[smallest]) < 0)
          smallest = r;
        if (smallest === idx) break;
        [this.data[idx], this.data[smallest]] = [
          this.data[smallest],
          this.data[idx],
        ];
        idx = smallest;
      }
    }
  }

  const visited: boolean[][] = Array.from({ length: m }, () =>
    Array(n).fill(false)
  );
  const heap = new MinHeap();

  // Push all boundary cells into the heap and mark visited
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        heap.push({ h: heightMap[i][j], r: i, c: j });
        visited[i][j] = true;
      }
    }
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let total = 0;

  // Expand from the lowest boundary inward
  while (!heap.isEmpty()) {
    const cell = heap.pop()!;
    for (const [dr, dc] of dirs) {
      const nr = cell.r + dr;
      const nc = cell.c + dc;
      if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr][nc]) continue;
      visited[nr][nc] = true;
      const neighHeight = heightMap[nr][nc];
      if (cell.h > neighHeight) {
        total += cell.h - neighHeight;
        heap.push({ h: cell.h, r: nr, c: nc });
      } else {
        heap.push({ h: neighHeight, r: nr, c: nc });
      }
    }
  }

  return total;
}
