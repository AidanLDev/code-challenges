function pacificAtlanticSolution1(heights: number[][]): number[][] {
  const res: number[][] = [];

  if (!heights) return res;

  const maxRows = heights.length;
  const maxCols = heights[0].length;

  function dfs(row: number, col: number) {
    const seen = heights.map((row) => row.map(() => false));
    let touchedPacific = false;
    let touchedAtlantic = false;
    const queue: number[][] = [[row, col]];
    while (queue.length) {
      const [curRow, curCol] = queue.shift()!;
      const curVal = heights[curRow][curCol];

      if (curRow === 0 || curCol === 0) touchedPacific = true;
      if (curRow === maxRows - 1 || curCol === maxCols - 1)
        touchedAtlantic = true;

      if (touchedPacific && touchedAtlantic) {
        res.push([row, col]);
        return;
      }

      const neighbours = [
        [curRow + 1, curCol],
        [curRow - 1, curCol],
        [curRow, curCol + 1],
        [curRow, curCol - 1],
      ];
      for (const [nextRow, nextCol] of neighbours) {
        if (
          nextRow < 0 ||
          nextCol < 0 ||
          nextRow >= maxRows ||
          nextCol >= maxCols
        )
          continue;
        if (seen[nextRow][nextCol]) continue;
        if (heights[nextRow][nextCol] > curVal) continue;
        seen[nextRow][nextCol] = true;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  for (let row = 0; row < maxRows; row++) {
    for (let col = 0; col < maxCols; col++) {
      dfs(row, col);
    }
  }

  return res;
}

function pacificAtlanticSolution2(heights: number[][]): number[][] {
  const res: number[][] = [];
  if (!heights || heights.length === 0) return res;

  const maxRows = heights.length;
  const maxCols = heights[0].length;

  const pacificReach = heights.map(() => new Array(maxCols).fill(false));
  const atlanticReach = heights.map(() => new Array(maxCols).fill(false));

  function bfs(starts: number[][], reach: boolean[][]) {
    const queue: number[][] = [];
    for (const [r, c] of starts) {
      reach[r][c] = true;
      queue.push([r, c]);
    }

    while (queue.length) {
      const [r, c] = queue.shift()!;
      const curVal = heights[r][c];
      const neighbours = [
        [r + 1, c],
        [r - 1, c],
        [r, c + 1],
        [r, c - 1],
      ];
      for (const [nr, nc] of neighbours) {
        if (nr < 0 || nc < 0 || nr >= maxRows || nc >= maxCols) continue;
        if (reach[nr][nc]) continue;
        // can only move from current to neighbor if neighbor is >= current
        if (heights[nr][nc] < curVal) continue;
        reach[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }
  }

  const pacificStarts: number[][] = [];
  const atlanticStarts: number[][] = [];
  // Pacific: top row and left column
  for (let c = 0; c < maxCols; c++) pacificStarts.push([0, c]);
  for (let r = 0; r < maxRows; r++) pacificStarts.push([r, 0]);
  // Atlantic: bottom row and right column
  for (let c = 0; c < maxCols; c++) atlanticStarts.push([maxRows - 1, c]);
  for (let r = 0; r < maxRows; r++) atlanticStarts.push([r, maxCols - 1]);

  bfs(pacificStarts, pacificReach);
  bfs(atlanticStarts, atlanticReach);

  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++) {
      if (pacificReach[r][c] && atlanticReach[r][c]) res.push([r, c]);
    }
  }

  return res;
}

const pacitifAtlanticInput1 = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

const pactificAtlanticOutput1 = [
  [0, 4],
  [1, 3],
  [1, 4],
  [2, 2],
  [3, 0],
  [3, 1],
  [4, 0],
];
const pactificAtlanticRes1 = pacificAtlanticSolution1(pacitifAtlanticInput1);
console.log("res = : ", pactificAtlanticRes1);
